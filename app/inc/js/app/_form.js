$('input, textarea').focusout(function(){
	var
	field = $(this),
	value = field.val().replace(/\s/g, '');   //remove space

	if( value !== ''){
		field.addClass('filled');
	}else{
		field.removeClass('filled');
		field.val('');
	}

	field_validate(field);
});


var
field_validate = function(field, type, params){
	var isValid = true;

	if(field.val().trim() == ''){
		isValid = false;
	}

	switch(type) {
	    case 'email':
	    case 'mail' :
	        var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

			if (!emailFilter.test(field.val())) {
				isValid = false;
			}
	        break;
	    case 'txt' :
	    case 'text':
	    	var
			l   = field.val().length,
			min = params['min'],
			max = params['max'];

			if(
				(min && l < min) ||
				(max && l > max)
			){
				isValid = false;
			}
	        break;
	   	case 'num'    :
	   	case 'number' :
	   	case 'numeric':
	        var
			value = parseInt(field.val()),
			min   = params['min'],
			max   = params['max'];

			if(
				(min && value < min) ||
				(max && value > max)
			){
				isValid = false;
			}
	        break;
	    case 'password':
	    	// Add passord conditions:
	    	// length, num+string, capital, etc
	    	break;
	}

	if(!isValid){
		field.addClass('error');
	}else{
		field.removeClass('error');
	}

	return(isValid);
},
form_validate = function(formSelector){
	var isValid = true;

	$(formSelector + ' .mandatory').each(function( index ){
		if(!field_validate($(this))){
			isValid = false;
		}
	});

	return(isValid);
};
