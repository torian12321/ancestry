var
_doc       = document,
_win       = window,
_btnSearch = _doc.getElementById('btnSearch');

var
init = function(){
	panelsResize();

    if (_btnSearch){
        _btnSearch.addEventListener('click', modal.open);
    }
},
resize = function(){
	panelsResize();
},
panelsResize = function(){
    var
	panelMain = $('.panelMain'),
	h_1       = $('.panel_featured').outerHeight(true),
	h_2       = $('.panel_subscribe').outerHeight();

	panelMain.css( "min-height", (h_1 + h_2) );
};


_doc.addEventListener('DOMContentLoaded', init);
_win.addEventListener('resize', resize);


// Service worker
if ('serviceWorker' in navigator) {
	// navigator.serviceWorker.register('./service-worker.js');
}