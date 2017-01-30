var
field_validate2 = function(field, type, params){
	var
	_isEmpty = function(){
		if(field.val().trim() == ''){
			return true;
		}
	},
	_typeValidate = function(){
		switch(type) {
		    case 'email':
		    case 'mail' :
		        var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

				if (!emailFilter.test(field.val())) {
					return false;
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
					return false;
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
					return false;
				}
		        break;
		    case 'password':
		    	// Add passord conditions:
		    	// length, num+string, capital, etc
		    	break;

		    return true;
		}
	},
	removeWordCharacters = function () {
		// Remove special characters

        if (field.type !== 'text' && field.type !== 'tel') return;
        var s = field.value;
        // smart single quotes and apostrophe
        s = s.replace(/[\u2018|\u2019|\u201A]/g, "\'");
        // smart double quotes
        s = s.replace(/[\u201C|\u201D|\u201E]/g, "\"");
        // ellipsis
        s = s.replace(/\u2026/g, "...");
        // dashes
        s = s.replace(/[\u2013|\u2014]/g, "-");
        // circumflex
        s = s.replace(/\u02C6/g, "^");
        // open angle bracket
        s = s.replace(/\u2039/g, "");
        // spaces
        s = s.replace(/[\u02DC|\u00A0]/g, " ");

        field.value = s;
        return;
    };


    // Include to add security
    // removeWordCharacters();


	if(
		_isEmpty 				||
		_typeValidate == false
	){
		return false;
	}else{
		return true;
	}
};