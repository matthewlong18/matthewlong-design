---
name: sauce-extractor
description: Pulls the useful ideas, action steps and quotes out of any transcript, article, thread or notes. Use for "extract the sauce", "sauce this", or "what's useful here".
---

# Sauce Extractor

Turns long content (podcast or video transcripts, articles, threads, messy notes) into a short list of what's worth keeping and what to do with it.

## About me (optional)

Fill in these three lines so the takeaways fit you. Or leave them as they are, and Claude will use what it already knows about you.

- What I do: [for example: I run a one-person bookkeeping business]
- Who I serve: [for example: cafés and restaurants]
- What I'm working on right now: [for example: getting more referrals]

## Step 0: Work out who this is for

1. If the About me lines above are filled in, use them.
2. If they are blank or still show the [square brackets], use what you already know about the user: memory, project instructions, or earlier in this conversation.
3. If you know nothing about them, don't stop to interview them. Do the extraction with general takeaways, then ask one question at the end: "What do you do, and what are you working on right now? I'll tailor the takeaways."

## Step 1: Get the content

- **Pasted text** (transcript, article, thread, notes): use it as is.
- **A link**: open it if you have a tool that can read it. If you can't read it, which is common with YouTube, say so in one line and ask for the text: "I can't read that link from here. On YouTube, use the 'Show transcript' option under the video, copy all of it, and paste it here."
- Never guess what a video or article says from its title or link.

## Step 2: Extract the sauce

Use this format:

```
## 🍯 The Sauce: [source title or a short summary]

**Source:** [name, handle or link, if known]
**Type:** [Podcast / Video / Article / Thread / Notes / Other]
**Date extracted:** [today's date]

### 💡 Key insights
(3 to 7 bullets: the ideas, mental models or frameworks worth remembering)

### ⚡ What to do with it
(Concrete actions, most useful first. Tie each one to the user's work when you know it.)

### 🗣️ Quotes worth keeping
(Up to 5 direct quotes, under 15 words each. Skip this section if nothing is quotable.)

### 🏷️ Tags
(2 to 5 tags, for example: pricing, content, client acquisition, AI tools)
```

Rules for a good extraction:

- Signal over summary. Skip the obvious and keep the non-obvious.
- For long transcripts, find the densest 20% and extract from that.
- For short posts and threads, capture the core argument plus any frameworks or numbers.
- Write actions as "do this", not "consider whether".
- If something in the content contradicts what the user is currently doing, say so in one line.
- If the content is thin, say so honestly. Don't pad it to fill the format.
- Quote only what was actually said. Never invent a quote or a number.

## Step 3: Save it (optional)

Only offer this if a Notion connection is available. Otherwise skip this step: the output is already easy to copy.

1. Ask: "Want me to save this to Notion?"
2. If yes, look for a database called "Tips & Tricks", or one the user names.
3. If there isn't one, offer to create it with these fields: Title, Type, Tags, Source URL, Date.
4. Save the extraction as a new page: the source title as the page title, the insights and actions in the page body, and the tags and link in their fields.

## Phrases that should start this skill

- "extract the sauce"
- "sauce this"
- "what's the sauce here?"
- "what's useful in this?"
- A pasted transcript or article with no other instruction

---
From The Joy of Not Cooking, by Matthew Long. matthewlong.design/cookbook
