$(function() {
	$('#enviar').click(function() {
		$.ajax({
			url : 'ajax',
			type : 'GET',
			data : {
				parametro1 : $('#parametro1').val(),
				parametro2 : $('#parametro2').val(),
				parametro3 : $('#parametro3').val()
			},
			success : function(data) {
				console.log('Success!');
			},
			error : function(error) {
				console.log('Error!');
			}
		});
	});
	$('#validation').click(function() {
		$.ajax({
			url : 'beanValidation',
			type : 'GET',
			data : {
				parametro1 : $('#parametro1valid').val(),
				parametro2 : $('#parametro2valid').val(),
				parametro3 : $('#parametro3valid').val()
			},
			success : function(data) {
				console.log('Success!');
			},
			error : function(error) {
				console.log('Error!');
			}
		});
	});
});