/* The Joy of Not Cooking: loads the recipe text, runs the copy button, and tells PostHog what got clicked.
   A recipe page needs: <pre id="recipe" data-src="/cookbook/recipes/NAME/SKILL.md" data-recipe="NAME">,
   a button with id="copy", and a <p id="status">. */
(function () {
  var box = document.getElementById('recipe');
  var btn = document.getElementById('copy');
  var status = document.getElementById('status');
  var name = box ? box.getAttribute('data-recipe') : '';
  var text = '';

  function track(event, extra) {
    try {
      if (window.posthog && window.posthog.capture) {
        var props = { recipe: name };
        for (var k in (extra || {})) props[k] = extra[k];
        window.posthog.capture(event, props);
      }
    } catch (e) {}
  }
  function say(msg) { if (status) status.textContent = msg; }

  if (box) {
    fetch(box.getAttribute('data-src'))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (t) { text = t.trim() + '\n'; box.textContent = text; })
      .catch(function () {
        box.textContent = "The recipe didn't load. Refresh the page, or use the download button instead.";
      });
  }

  function fallbackCopy(t) {
    var ta = document.createElement('textarea');
    ta.value = t; ta.setAttribute('readonly', '');
    ta.style.position = 'absolute'; ta.style.left = '-9999px';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }
  function copied() {
    btn.classList.add('done'); btn.textContent = 'Copied ✓';
    say('Copied. Now paste it into a new Claude chat.');
    track('cookbook_copy');
    setTimeout(function () { btn.classList.remove('done'); btn.textContent = 'Copy the recipe'; }, 4000);
  }
  function failed() { say("Couldn't copy automatically. Select the text in the box and copy it by hand."); }

  if (btn) {
    btn.addEventListener('click', function () {
      if (!text) { say('Still loading the recipe. Try again in a second.'); return; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(copied, function () { fallbackCopy(text) ? copied() : failed(); });
      } else { fallbackCopy(text) ? copied() : failed(); }
    });
  }

  var links = document.querySelectorAll('[data-track]');
  for (var i = 0; i < links.length; i++) {
    (function (el) {
      el.addEventListener('click', function () { track(el.getAttribute('data-track')); });
    })(links[i]);
  }
})();
