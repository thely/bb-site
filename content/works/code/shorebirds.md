---
title: Listening to the Virginia Barrier Islands
subtitle: audio-based webapp
excerpt: A webapp that allows listeners to virtually navigate the bird species present on the two of the Virginia Barrier Islands in 1990. Made with NodeJS, Leaflet, Web Audio API. Made in collaboration with Eli Stine.
date: 2019
category: code
link: http://dev.coastalconservatory.org/fwp_portfolio/barrier-islands-shore-seabird-sonification/#
code_link: https://github.com/thely/shorebird-leaflet
image: /images/code/shorebirds2.png
---

This was made in collaboration with fellow UVA student, Eli Stine, who had previously done an app version of it in Max in collaboration with an ecologist. The data used in the app is based on bird population data in 1990 on Cobb and Hog Islands, which are inaccessible except by boat. Bird calls are spatialized on the island based on where their species generally prefers to be, using a land use map of terrain types provided by the ecologist.

Leaflet.js is used for the map, spatialization is done with IRCAM's binaural convolution node for the web audio API, and NodeJS does everything else. It's a resource-intensive page (the audio file of all the bird sounds is about an hour long, and 25MB!), so I don't recommend viewing it on mobile.

<div class="gallery">

![](/images/code/shorebirds2.png)
![](/images/code/shorebirds1.png)
![](/images/code/shorebirds3.png)

</div>