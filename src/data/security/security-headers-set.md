---
title: Security Headers Set
category: Security
---
Taking the time to setup simple headers on your webserver will save you down the road. 

Test using: [securityheaders.io](https://securityheaders.io/)

- [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) header to mitigate XSS and data injection attacks
- [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) token to prevent cross site request forgery.
- [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) header to protect against click-jacking
- [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) header to mitigate XSS attacks
- Use [HSTS](https://blog.stackpath.com/glossary/hsts/) responses to force TLS only access. Redirect all HTTP request to HTTPS on the server as backup
- Cookies should be scoped by path and domain as well as utilize [HttpOnly, SameSite, and Secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies) attributes
