var
modal = (function($, _doc){
	var
    modal    = _doc.querySelector('.modal'),
    btnClose = _doc.querySelector('#btnClose');

	var
	mailing_URL = "./inc/ajax/suscribe.php",
	ajax        = new XMLHttpRequest(),
	name        = $('#subscribe-name input'),
	surname     = $('#subscribe-surname input'),
	email       = $('#subscribe-mail input');

	var
	_open = function(){
		modal.classList.add('active');
	},
	_close = function(){
		modal.classList.remove('active');
        // TODO: clean the form values?
	},
	_validField  = function(field, type){
		var valid = (field.val() != '') ? true : false;


		if(type === 'email'){
			var
			emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
			valid       = emailFilter.test(field.val()) ? true : false;
		}

		if(!valid && type !== 'email'){
			field.focus();
		}

		field.toggleClass('error', !valid);
		return valid;
	},
	_submit = function(){

		// Prevent dobleClick
		//btn_mailing.prop("disabled", true);

		if(
			validField(name)          &&
			validField(surname)       &&
			validField(email, 'email')
		){
	    	var postRequest =
				'name='     + name.val()    +
				'&company=' + company.val() +
				'&email='   + email.val();

			ajax.onreadystatechange = function() {
		        if (ajax.readyState == 4 && ajax.status == 200) {
		            if (ajax.responseText > 0){
		                var animationTime = 500;
						$('#mailingList .mail-deffault').fadeOut(animationTime);
						$('#mailingList .mail-success').delay(animationTime).fadeIn(animationTime);
		            }else {
		            	// console.log('error');
		            }
		        }
		    }

		    ajax.open('POST', mailing_URL, true);
		    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		    ajax.send(postRequest);
		}else{
			btn_mailing.prop("disabled", false);
		}
	};

	if (btnClose){
        btnClose.addEventListener('click', _close);
    }

	return{
		show : _open,
		open : _open,
		hidde: _close,
        close: _close
	};
})(jQuery, document);