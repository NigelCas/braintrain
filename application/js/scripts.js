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
	
	var setLocalStorage, getLocalStorage, signIn, bookingStepOne;
	
	
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
			
	
	$("#bookingStep1").click( function(e) 
	{
		setLocalStorage('booking-from',$("#txt-from-name").val());
		setLocalStorage('booking-to',$("#txt-to-name").val());
		setLocalStorage('booking-date',$("#txt-date").val());
		setLocalStorage('booking-train','Liverpool Express');
		setLocalStorage('booking-time','8.30 AM');
	});
	
	$(function() {
		$('#paywithpaypal').hide();
		$('#payment').change(function()
		{
			if($(this).val() == "paypal")
			{
				$('#paywithcard').hide();
				$('#paywithpaypal').show();
				setLocalStorage('booking-payment','PayPal');
			}
			else
			{
				$('#paywithcard').show();
				$('#paywithpaypal').hide();
				setLocalStorage('booking-payment','Credit/Debit Card');
			}
		});
	});
	

		$('#bookingconfirm').click(function(e)
		{
			console.log(getLocalStorage('emailFav'));
			sendMail('splinterfirex@gmail.com', 
			'<h3> Booking Confirmation Via BrainTrain </h3> <h5> Train Details </h5> <ul> <li> From : '+getLocalStorage('booking-from')+'</li> <li> To :'+getLocalStorage('booking-to')+'</li> <li> Date :'+getLocalStorage('booking-date')+' | 8.30 AM</li> <li> Train :'+getLocalStorage('booking-train')+'</li> </ul> <ul> <li> Payment Mode : '+getLocalStorage('booking-payment')+'</li> </ul>'
			);
		});
	
			
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
	
	
	
	$("#londoneye").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-londoneye");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'londoneye', value:someElementToString};
		setLocalStorage('fav_1',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		 
	});
	
	$("#tussauds").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-tussauds");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'tussauds', value:someElementToString };
		setLocalStorage('fav_2',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		 
	});

	$("#buckingham").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-buckingham");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'buckingham', value:someElementToString };
		setLocalStorage('fav_3',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		  
	});	
	
	$("#kingscross").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-kingscross");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'kingscross', value:someElementToString };
		setLocalStorage('fav_4',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);

	});	


	$("#towerlondon").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-towerlondon");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'towerlondon', value:someElementToString };
		setLocalStorage('fav_5',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		 
	});	

	$("#westminster").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-westminster");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'westminster', value:someElementToString };
		setLocalStorage('fav_6',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		 
	});		
	
	$("#pauls").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-pauls");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'pauls', value:someElementToString };
		setLocalStorage('fav_7',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		 
	});

	$("#towerbridge").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-towerbridge");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'towerbridge', value:someElementToString };
		setLocalStorage('fav_8',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		  
	});	
	
	$("#shard").click( function(e) 
	{
		//e.preventDefault(); 
		var someElement = document.getElementById("li-shard");
		var someElementToString;

		if (someElement.outerHTML)
			someElementToString = someElement.outerHTML;
		else if (XMLSerializer)
			someElementToString = new XMLSerializer().serializeToString(someElement); 
			
		var favourite = { name:'shard', value:someElementToString };
		setLocalStorage('fav_9',favourite);
		 
		//console.log(getLocalStorage('fav_1').value);
		 
	});
	
	
	$( document ).ready(function() 
	{	
		var email_favlist = '<h3> User Favourites POIs At Thier Destinations </h3> <ul> ';
	
		var list='';
		for (var i = 1; i<=9; i++)
		{	
			if(getLocalStorage('fav_'+i) != null && getLocalStorage('fav_'+i) != undefined)
			{
			   email_favlist += '<li>'+getLocalStorage('fav_'+i).name+'</li>';
			   list += getLocalStorage('fav_'+i).value;
			}
		}
		
		email_favlist += '</ul>';
		$("#favul").html(list);
		setLocalStorage('emailFav',email_favlist);

	});
	
	
	$(document).ready(function() {
		$('#contactForm').submit(function() 
		{
			console.log(getLocalStorage('emailFav'));
			sendMail($('#fav-email').val(),getLocalStorage('emailFav'));
		})
	});
	
	(function(){
			emailjs.init("user_ihkjfydLSzXSeBsgxIznS");
	})();
	
	function sendMail(toemail,message){	
		emailjs.send("gmail", "test123", {"send_to":toemail,"from_name":"Brain Train","to_name":"Player","message_html":message})
		.then(function(response) {
			alert("Email Sent successfully!");
		   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
		}, function(err) {
			alert("Failed");
		   console.log("FAILED. error=", err);
		});
				
	}
	
	$(function() {
		$('#emailsb').hide();
		$('#slider-flip-m').change(function()
		{
			if($(this).val() == "on")
				$('#emailsb').show();
			else
				$('#emailsb').hide();
		});
	});
	

	
});












