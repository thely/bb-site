---
title: Text-to-speech continues
createdAt: 2015-11-28
tags:
  - Max/MSP
  - text-to-speech
  - Python
---

A lot of progress has been made on making more interesting text-to-speech options in Max, using the Web Speech and Google Maps APIs. It's on github as [performable-maps](https://github.com/thely/performable-maps), though still not quite a release candidate yet.

**The gist:**

The Web Speech API is implemented in a few browsers (Chrome, Safari, Firefox). The voices available in the API are OS- and browser-dependent: when run in any browser on a Mac, the voices that come with the 'say' command are available, while when run in Chrome on any OS, there are several voices available from Google that sound very much like the voices used in Google Maps turn-by-turn directions. Being able to use these voices in Max would be great, right? I agree!

**Challenges:**

    The Web Speech API does not work with the Web Audio API in any form.
    [jweb], Max's embedded web browser, is built on Chromium, which does not support the Web Speech API - you can load a page that uses it, but no sound will be produced.

**Solution:**

Using an intermediary localhost Python server and Sqlite3 database, get the browser and Max to communicate by posting and polling. Python is natively installed in OSX, and not hard to install in Windows. The interaction looks like this:

1. When Max loads, run a script to open a tab in Chrome that loads the localhost page. The page is basically a shell: the user won't need to interact with it at all. It's only loaded because it's the only way for the Web Speech API to function.
2. When the browser loads, it gets its list of voices and sends it to the server. It then begins polling the server (one request every 3 seconds) to see if there are any new requests of text to be spoken.
3. The user clicks a bang in Max to populate a umenu with the list of available voices, and chooses one.
4. In this implementation, the user also chooses a set of directions from Max; we'll be iterating over a list of driving directions and requesting the next step from the browser.
5. Pressing the "prev" or "next" buttons in Max sends data to the server about which direction we'd like spoken aloud, which path it came from, and the exact time it was requested. Max immediately begins polling (one request every .2 seconds) to find the exact start/end times of the speech to figure out when to start recording.
6. When the browser discovers an unchecked speech request, it queues up the utterance, and plays it when ready (multiple utterances won't occur simultaneously). SpeechSynthesisUtterances have two event listeners, among others: onstart and onend. These are fairly exact markers (with a little wiggle room) of when sound begins and ends; when these listeners are triggered, the browser sends notification of the trigger to the server.
7. Max has been polling furiously; when it receives onstart, it begins recording, and starts counting milliseconds. When it receives onend, it stops recording, stops polling, crops the buffer~ object to the number of milliseconds, and writes it to a file in a local directory.

Note that in order for Max to get sound from the browser, you'll need to use Soundflower or Jack, set it as your computer's stereo output, and set Soundflower/Jack as Max's input.

[performable-maps](https://github.com/thely/performable-maps)! Check it out!