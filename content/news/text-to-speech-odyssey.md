---
title: Personal text-to-speech odyssey
createdAt: 2015-11-12
tags:
  - Max/MSP
  - text-to-speech
---

I'm currently in the process of working on a piece for percussion, and I've found that thinking about the gritty technology stuff first helps me hone in on what I want a work to focus on. I've got a few different stumbling blocks taking space in my head, so I'm writing to get all the ideas out.

For this piece, I'm hoping to have the performer get some driving directions from the Google Maps Directions API, and use the Mac say command or similar do text-to-speech that I can then process with Max/MSP. I have the following constraints:

1. The piece should be as OS-independent as possible.
2. The performer should not need continuous internet access, and should still be playable without it, as not all venues will have available WiFi.
3. The piece should not ask the performer to install anything, or an absolute minimum of things if necessary.
4. All aspects of the piece should be controlled from within the patch; running outside applications/files should be a last resort.

Given this, I basically have one option for text-to-speech: the Web Speech API, which is a part of HTML5, and is standard on Google Chrome. Mac say obviously hits only one half of the OS market. Asking the performer to install Chrome doesn't strike me as the worst offense; most people have Chrome already, even if they use it infrequently.

The devil now is point #4. In order to use the Web Speech API, I have to ask the performer to localhost a page (on the off-chance that two people might be playing this piece in two different places at the same time), and open a Chrome tab. Not only this, but the local-hosted page needs to update live as requests to the server come in, and whatever I use to host needs to be something that many people have/use. Options:

    Python is pretty common, comes installed on all Macs, and a Windows install is not too difficult. Python contains a SimpleHTTPServer, which can be run either with the shell object in Max/MSP (unfortunately also Mac-specific), or with the py/pyext objects. Unfortunately, py hasn't been updated in a long time, and doesn't come with good documentation. There are Jython and embedded web server objects as well, facing similar issues.
    Possibility of running all the Python nonsense as an executable somehow, through Python libraries meant to do this.
    mxj might allow a Java server. This is where I am right now.
