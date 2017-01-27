// Smooth Scrolling
/*
// Jquery version
var
smoothScrolling = function() {
	$('a[href*=#]:not([href=#])').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html,body').stop().animate({
					scrollTop: target.offset().top
				}, 1250);
			return false;
			}
		}
	});
};
*/

// Vanilla JS version
var
smoothScrolling = function() {
    // https://github.com/sitepoint-editors/smooth-scrolling/blob/gh-pages/script.js

    var jump = function(target, options){
        var
        _win = window,
        _doc = document,
        timeStart,
        timeElapsed,
        opt      = {
            duration : options.duration,
            offset   : options.offset || 0,
            callback : options.callback,
            easing   : options.easing || easeInOutQuad
        },
        distance = typeof target       === 'string'   ? opt.offset + _doc.querySelector(target).getBoundingClientRect().top : target,
        duration = typeof opt.duration === 'function' ? opt.duration(distance) : opt.duration,
        start    = _win.pageYOffset;

        requestAnimationFrame(function(time) { timeStart = time; loop(time); });

        function loop(time) {
            timeElapsed = time - timeStart;

            _win.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

            if (timeElapsed < duration)
                requestAnimationFrame(loop);
            else
                end();
        }

        function end() {
            _win.scrollTo(0, start + distance);

            if (typeof opt.callback === 'function')
                opt.callback();
        }

        // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
        function easeInOutQuad(t, b, c, d)  {
            t /= d / 2;
            if(t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    };


    if (isCssSmoothSCrollSupported()) {
        _doc.getElementById('css-support-msg').className = 'supported';
        return;
    }

    var
    duration = 400,
    pageUrl  = location.hash ? stripHash(location.href) : location.href;

    //delegatedLinkHijacking();
    directLinkHijacking();

    function delegatedLinkHijacking() {
        _doc.body.addEventListener('click', onClick, false);

        function onClick(e) {
            if (!isInPageLink(e.target))
                return;

            e.stopPropagation();
            e.preventDefault();

            jump(e.target.hash, {
                duration: duration,
                callback: function() {
                    setFocus(e.target.hash);
                }
            });
        }
    }

    function directLinkHijacking() {
        [].slice.call(_doc.querySelectorAll('a'))
            .filter(isInPageLink)
            .forEach(function(a) { a.addEventListener('click', onClick, false); });

        function onClick(e) {
            e.stopPropagation();
            e.preventDefault();

            jump(e.target.hash, {
                duration: duration
            });
        }
    }

    function isInPageLink(n) {
        return n.tagName.toLowerCase() === 'a'
            && n.hash.length > 0
            && stripHash(n.href) === pageUrl;
    }

    function stripHash(url) {
        return url.slice(0, url.lastIndexOf('#'));
    }

    function isCssSmoothSCrollSupported() {
        return 'scrollBehavior' in _doc.documentElement.style;
    }

    // Adapted from:
    // https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
    function setFocus(hash) {
        var element = _doc.getElementById(hash.substring(1));

        if (element) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1;
            }
            element.focus();
        }
    }
};
