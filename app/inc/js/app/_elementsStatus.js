// The element:
// <button data-activate=".main-menu"></button>
// will toggle 'active' class to the element main-menu on be clicked
var
element_selector = function(element, data_selector){
	switch(element.data(data_selector)) {
    case 'this':
        return element;
    case 'parent':
       	return element.parent();
    default:
    	return $(element.data(data_selector));
	}
};

$('[data-activate]').click(function(){
	element_selector($(this), 'activate').toggleClass('active');
});

$('[data-show-hide]').click(function(){
	element_selector($(this), 'show-hide').toggleClass('hidde');
});
$('[data-hidde]').click(function(){
	element_selector($(this), 'hidde').addClass('hidde');
});
$('[data-show]').click(function(){
	element_selector($(this), 'show').addClass('show');
});


// Tab openers
$('.tabs-header label').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
