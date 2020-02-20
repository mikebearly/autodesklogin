

'use strict';

$(function() {
	$('.toast-body').html("Loading...")
	$('.toast').toast('show');

	$("#toast-cover").hide();

	$(".back-arrow").click(function(){
		$('#uInput').show();
		$('#pInput').hide();
		$('#createAccountPage').hide();

	});

  $("#nextButton").click(function(){
	  if($('#username').val().length > 0) {
			if($('#username').val()=="bearly" || $('#username').val()=="johnsmith") {
				$("#wuser").text($('#username').val());
				var $btn = $(this);
    		$("#nextButton").html('Verifying...');
				// simulating a timeout
		    setTimeout(function () {
					$('#uInput').hide();
					$('#pInput').show();
		    }, 2000);
			}
			else {
				$('#username').val("");
			}
		}
		if($('#username').val().length == 0 || $('#username').val()!="bearly"|| $('#username').val()!="johnsmith") {
				$("#myFormLogin").addClass('was-validated');
			}
  });

	$("#create-account").click(function(){
		if($('#ca-firstname').val().length > 0 &&
			$('#ca-lastname').val().length > 0 &&
			$('#ca-username').val().length > 0 &&
			$('#ca-retype-username').val().length > 0 &&
			$('#ca-password').val().length > 0 &&
			$('#ca-retype-password').val().length > 0 &&
			($('#ca-username').val() == $('#ca-retype-username').val()) &&
			($('#ca-password').val() == $('#ca-retype-password').val())) {
				$('#createAccountPage').hide();
				$(".footer").show();
				$('#LoginPage').show();
				$('#pInput').hide();
				$('.toast-body').html("Account created successfully")
				$('.toast').toast('show');

			}
			else {
				$('#ca-firstname').val("");
				$('#ca-lastname').val("");
				$('#ca-username').val("");
				$('#ca-retype-username').val("");
				$('#ca-password').val("");
				$('#ca-retype-password').val("");
			}
		$("#myFormRegistration").addClass('was-validated');
	});
});

function createAccount() {
	$('#myFormRegistration').trigger("reset");
	$('#createAccountPage').show();
	$(".footer").hide();
	$('#LoginPage').hide();
	$('#pInput').hide();
}

function Signin() {
	$('#createAccountPage').hide();
	$(".footer").hide();
	$('#LoginPage').show();
	$('#pInput').hide();
	$(".footer").show();
}

function passwordToSignin() {
	$("#nextButton").html('Next');
	$('#createAccountPage').hide();
	$(".footer").hide();
	$('#LoginPage').show();
	$('#pInput').hide();
	$(".footer").show();
}
