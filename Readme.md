Groovestats: A google analytics tracking js clone

Groovestats is a simple js that collects data from your visitors browser and send it to some endpoint.

The data tracked is pretty much what Google Analytics track.

To implement:

* Create your endpoint in the server script language of your choice.
* Set the endpoint in GrooveStat
* Include GrooveStat in your pages
* That's it, now your endpoint should receive data async.

Example request sent to your endpoint:

    http://your.company.com/tracker.js?_ftma=fbp1c0d05828&_ftmb=fbp3c445015&url=http%3A%2F%2Ffiddle.jshell.net%2F_display%2F&page_title=-%20jsFiddle%20demo&hostname=fiddle.jshell.net&path=undefined&port=&query=&referrer=http%3A%2F%2Fjsfiddle.net%2F&browser=Netscape%205.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_8_5)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F30.0.1599.101%20Safari%2F537.36&cookies_enabled=true&language=en-US&java_enabled=1&screen_resolution=1920x1080&platform=MacIntel&plugins=%5Bobject%20PluginArray%5D&product_name=Gecko&character_set=UTF-8&screen_color_depth=24-bit&compat_mode=CSS1Compat&flash_enabled=true&guid=fbp4c0bf2a4
    
Example jsfiddle:  

[http://jsfiddle.net/x5EyB/](http://jsfiddle.net/x5EyB/)

License:
Groovestats is released under the MIT License.



