var
_doc = document,
_win = window,
init = function(){
    smoothScrolling();
	fancy_functions.run();
    fitContentOnScreen();
},
resize = function(){
    fitContentOnScreen();
};


_doc.addEventListener('DOMContentLoaded', init);
_win.addEventListener('resize', resize);


// Service worker
if ('serviceWorker' in navigator) {
	// navigator.serviceWorker.register('./service-worker.js');
}