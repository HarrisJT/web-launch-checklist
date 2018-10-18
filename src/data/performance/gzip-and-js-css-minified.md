---
title: GZIP & Minified JS/CSS
category: Performance
---
GZIP is a powerful compressor for text files that can be configured in the web server. Javascript and CSS files should be combined into one file and minified when served to the user to reduce the impact of loading on the critical path. I suggest the tools [UgilfyJS](http://lisperator.net/uglifyjs/) for Javascript and [CSSO](https://github.com/css/csso) for CSS. 
