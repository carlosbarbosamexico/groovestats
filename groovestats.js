if (!window.GrooveStats) {
    
   
  GrooveStats = {
    
    _endpoint: {
       
       url: 'http://your.company.com/tracker.js?'
       
     },
		 
    _page: {
    
      url: window.location.href,
      page_title: document.title,
      hostname: window.location.hostname,
      path: window.location.path,
      port: window.location.port,
    
    },
    
    _client: {
    
      query: window.location.search,
      referrer: document.referrer,
      browser: navigator.appName+" "+navigator.appVersion,
      cookies_enabled: navigator.cookieEnabled,
      language: (navigator && (navigator.language || navigator.browserLanguage) || "-"),
      java_enabled:  navigator && navigator.javaEnabled() ? 1 : 0,
      screen_resolution: screen ? screen.width + "x" + screen.height : "-",
      platform: navigator.platform,
      plugins: navigator.plugins,
      product_name: navigator.product,
      character_set: document.characterSet || document.charset || "-",
      screen_color_depth: screen ? screen.colorDepth + "-bit" : "-",
      compat_mode: document.compatMode,
    
    
    
     },
    
    
     
    
    _cookie: {
      
        persistent: '_ftma',
        session: '_ftmb',
      
      
    },
    
     _userCookies: {
      
      _ftma : null,
      _ftmb : null,
    },
    
    getPersistentCookie: function() {
      
      persistentCookie = this.readCookie(this._cookie.persistent);
      if (persistentCookie != null) {
        return persistentCookie;
        
      };
      
      persistentCookie = this.createCookie(this._cookie.persistent, this.guid(), 730);
      
      persistentCookie = this.readCookie(this._cookie.persistent);
      
      return persistentCookie;
      
      
    },
    
    getSessionCookie: function() {
      
      sessionCookie = this.readCookie(this._cookie.session);
      if (sessionCookie != null) {
        sessionCookie = this.createCookie(this._cookie.session, sessionCookie, 30);
        sessionCookie = this.readCookie(this._cookie.session);
        return sessionCookie;
       };
      
      sessionCookie= this.createCookie(this._cookie.session, this.guid(), 30);
      
      sessionCookie = this.readCookie(this._cookie.session);
      
      return sessionCookie;
      
    },
    
    cookieManager: function() {
      
      this._userCookies._ftma = this.getPersistentCookie();
      this._userCookies._ftmb = this.getSessionCookie();
      //console.log(this._userCookies._ftma);
      //console.log(this._userCookies._ftmb);
      
      
    },
    
    
    createCookie: function(name, value, days) {
      
      if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires;
      
 
    },
    
    readCookie: function(name) {
      
      var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
      
      
    },
    
    eraseCookie: function(name) {
	this.createCookie(name,"",-1);
    },
    
    injectTrackingScript: function(url) {
     
      var _trackingRequestScript = document.createElement('script'); _trackingRequestScript.type = 'text/javascript'; _trackingRequestScript.async = true;
      _trackingRequestScript.src = url;
      var _ftm = document.getElementsByTagName('script')[0]; _ftm.parentNode.insertBefore(_trackingRequestScript, _ftm);
      
    },
    
      injectTrackingImage: function(url) {
     
      var _trackingRequestImage = document.createElement('image'); _trackingRequestImage.src= url; _trackingRequestImage.width="1px";
      _trackingRequestImage.height = "1px"; _trackingRequestImage.style ="display:none";
      var _ftm = document.getElementsByTagName('body')[0]; _ftm.parentNode.insertBefore(_trackingRequestImage, _ftm);
      
    },
    
    
    
    init: function() {
        
        this.cookieManager();
        
        var url = this.encodeUrl();
        //uncomment one of the following to debug
        //alert(url);
        //console.log(url);
        this.injectTrackingScript(url);
        
    },
    
    guid: function() {
      return 'fbp' + (Math.random() * (1<<30)).toString(16).replace('.', '');
    },
    
    encodeUrl: function() {
        
        var url = this._endpoint.url+this.encodeData(this._userCookies)+"&"+this.encodeData(this._page)+"&"+this.encodeData(this._client)+"&flash_enabled="+this.flashCheck()+"&guid="+this.guid();
        return url;
    },
    
    encodeData: function(data) {
        var ret = [];
        for (var d in data)
           ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    },
    
    flashCheck: function() {
      
      var hasFlash = false;
        try {
          var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
          if(fo) hasFlash = true;
        }catch(e){
          if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
        }
        
      return hasFlash;
    }
    
    
    
    
  }
  
}

GrooveStats.init();