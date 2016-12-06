$(document).ready(function () {
    $('#formBody').validate({ 
	
        rules: {
            Name: {
                required: true
            },
            Email: {
                required: true,
                email: true
            },
			Message: {
				required: true
			}
        },
		messages: {
			Name: "What's your name?",
			Email: {
				required: "What's your email?",
				email: "Your email doesn't seem to be valid"
			},
			Message: "Say something"
		}
		
    });
});
