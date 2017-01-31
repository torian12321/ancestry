var
modal = (function($, _doc){
	var
	mailing_URL  = "./inc/ajax/suscribe.php",
	ajax         = new XMLHttpRequest(),
	modal        = _doc.querySelector('.modal'),
	user_name    = _doc.getElementById('modal_name'),
	user_surname = _doc.getElementById('modal_surname'),
	user_emaile  = _doc.getElementById('modal_email'),
	btnSubmit    = _doc.querySelector('#btnSubmit'),
	btnClose     = _doc.querySelector('#btnClose'),
	name         = _doc.getElementById('subscribe-name'),
	surname      = _doc.getElementById('subscribe-surname'),
	email        = _doc.getElementById('subscribe-email');

	var
	_open = function(){
		modal.classList.add('active');
	},
	_close = function(){
		modal.classList.remove('active');
        // TODO: clean the form values?
	},
	_validField  = function(field, type){
		var valid = (field.value != '') ? true : false;


		if(type === 'email'){
			var
			emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
			valid       = emailFilter.test(field.value) ? true : false;
		}

		if(!valid && type !== 'email'){
			field.focus();
		}

		if(valid){
			field.parentNode.classList.remove('error');
		}else{
			field.parentNode.classList.add('error');
		}



		return valid;
	},
	_submit = function(){
		var validForm = true;

		validForm = _validField(name) ? validForm : false;
		validForm = _validField(surname) ? validForm : false;
		validForm = _validField(email, 'email') ? validForm : false;
		// Prevent dobleClick
		//btnSubmit.prop("disabled", true);

		if(validForm){
	    	var postRequest =
				'name='     + name.value    +
				'&surname=' + surname.value +
				'&email='   + email.value;

			ajax.onreadystatechange = function() {
		        if (ajax.readyState == 4 && ajax.status == 200) {
		            if (ajax.responseText > 0){
		                var animationTime = 500;
						// Send email, show confirmation, etc
		            }else {
		            	//btnSubmit.prop("disabled", false);
		            	// console.log('error');
		            }
		        }
		    }

		    ajax.open('POST', mailing_URL, true);
		    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		    ajax.send(postRequest);
		}else{
			//btnSubmit.prop("disabled", false);
		}
	};

	if (btnClose){
        btnClose.addEventListener('click', _close);
    }
    if (btnSubmit){
        btnSubmit.addEventListener('click', _submit);
    }





	return{
		show : _open,
		open : _open,
		hidde: _close,
        close: _close
	};
})(jQuery, document);