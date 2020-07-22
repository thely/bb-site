---
title: PBS AppleTV prototype
subtitle: XML and Python
date: 2013
category: code
---

As part of a summer internship with PBS Digital, I had the opportunity to prototype the PBS AppleTV app. An interesting experience, for sure - at the time, the AppleTV had just been released, and only ~30 companies had access to the documentation. Which was emailed to you as a PDF attachment. Dang!

I didn't do the backend/content delivery work, as that system already existed and plugging in content was beyond the scope of my two months. Half of the time was spent making mockups and adjusting existing templates to fit. The current version of the app isn't too different from what I started out with; I'm assuming a lot of the current changes are because of updates Apple made to the library that enabled a bit more customization.

The other half was spent writing their device authorization app, called matchmaker, which is open-source and available on [Github](https://github.com/pbs/matchmaker). It's extensible and Python-based. By default, it uses memcached to make temporary keys for authorization, and account storage is done through Gigya (what PBS uses). Memcached account storage is also in the library, and it's possible to use SQL account storage as well. Heavily documented README, pretty well commented throughout the code. It was definitely an enjoyable two months - they're a great team!
