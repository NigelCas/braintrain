$(function() {
    $('a.favlink').on('click', function(){
        $(this).toggleClass('active')
   });   
});


$( document ).on( "pagecreate", function() {
	$( ".photopopup" ).on({
		popupbeforeposition: function() {
			var maxHeight = $( window ).height() - 60 + "px";
			$( ".photopopup img" ).css( "max-height", maxHeight );
		}
	});
});


$(function() {
	
	var setLocalStorage, getLocalStorage, signIn;
	
	
	$.mobile.transitionFallbacks.slideout = "none";
	
	setLocalStorage = function(key, value) {
		
		// Put the object into storage
		localStorage.setItem(key, JSON.stringify(value));
		
	}
	
	getLocalStorage = function(key) {
				
		// Retrieve the object from storage
		var retrievedObject = JSON.parse(localStorage.getItem(key));

		console.log('retrievedObject: '+key+' : ',retrievedObject);	
		return retrievedObject;
	}
	
	signIn = function(username, password){
		
		setLocalStorage('username',username);
		setLocalStorage('password',password);
		
		window.location='Home.html'
	}
			
			// validate signup form on keyup and submit
			$("#signinForm").validate({
				rules: {
					loginemail: {
						required: true,
						minlength: 5
					},
					loginpassword: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					loginemail: {
						required: "Please enter a email",
						minlength: "Your username must consist of at least 5 characters"
					},
					loginpassword: {
						required: "Please provide a password",
						minlength: "Your password must be at least 5 characters long"
					},
				},
				errorPlacement: function (error, element) {
					error.appendTo(element.parent().prev());
				},
				submitHandler: function (form) {
					signIn($("#loginemail").val(), $("#loginpassword").val());
					return false; 
				}
		});
		
	$("#btn-logged-user").html(getLocalStorage('username'));
	
});