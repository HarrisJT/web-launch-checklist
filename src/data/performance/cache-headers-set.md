---
title: Cache Headers Set
category: Performance
---
Specify the [cache-control] header with a [max-age] directive in the web server to avoid having the browser set poor default versions. This will provide huge performance savings for users who see the same resources multiple times. Static assets with versioning should be cached for as long as possible.
