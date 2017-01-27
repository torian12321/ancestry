// Fancy functions contains any function that is made just for fun, a playground.
// Cancel the functions from the project, and it will work anyway, but without swag :(

var
fancy_functions = (function(_doc){

	var
	_run = function(){
		_sayHello('SMARTBOX');
		//_animateTitle();
	},
	_sayHello = function(console_text){
		// http://codepen.io/SamEureka/pen/GZVJvE?editors=0010
		// Check the console
		var
		css_shadow = '',
		i;


		for(i=-1; i<3;  i++){ css_shadow += i +'px '+ i +'px hsl(176, 100%, 33%),'; }
		for(i=3;  i<6;  i++){ css_shadow += i +'px '+ i +'px hsl(20, 83%, 53%),'; }
		for(i=6;  i<9;  i++){ css_shadow += i +'px '+ i +'px hsl(342, 100%, 36%),'; }
		for(i=9;  i<12; i++){ css_shadow += i +'px '+ i +'px hsl(44, 62%, 53%),'; }
		for(i=12; i<15; i++){ css_shadow += i +'px '+ i +'px hsl(285, 36%, 43%),'; }
		css_shadow = css_shadow.slice(0, -1); //remove last coma

		var css = 'text-shadow: '+ css_shadow +';font-size: 50px; color: #FFF;';
		console.log('%c %s', css, console_text);
	},
	_animateTitle = function(){
		// Add animaitions to the website title (browser tab)
		var
		index     = 0,
		title     = _doc.title,
		animation = [
			'o--',
			'-o-',
			'--o',
			'-o-'
		],
	    animation_length = animation.length;

		setInterval(function(){
			_doc.title = animation[index % animation_length] + title + animation[index % animation_length];
			index++;
	    }, 250);
	};

	return {
        run  : _run,
        start: _run
    };
})(document);