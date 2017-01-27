var
cookies = (function(){
    var
    _doc    = document,
    _cookie = _doc.cookie;

    var
    _add = function(cname, cvalue, exdays){
        //    var d = new Date();
        //    d.setTime(d.getTime() + (exdays*24*60*60*1000));
        //    var expires = "expires="+d.toUTCString();
        _cookie = cname + "=" + cvalue + "; "/* + expires*/;
    },
    _get = function(cname) {
        var
        name = cname + "=",
        ca   = _cookie.split(';');

        for(var i=0, l=ca.length; i<l; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
        }
        return "";
    },
    _reset = function(cname){
        _doc.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    },
    _resetAll = function(){
        var cookies = _cookie.split(";");

        for (var i=0, l=cookies.length; i < l; i++) {
            var
            cookie = cookies[i],
            eqPos  = cookie.indexOf("="),
            cname  = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            resetCookie(cname);
        }
    };

    return {
        add     : _add,
        set     : _get,
        get     : _get,
        reset   : _reset,
        resetAll: _resetAll
    };
})();