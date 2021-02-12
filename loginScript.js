$('#loginForm').on('submit',function(e){
	e.PreventDefault();
	var password=$('passInput').val();
	var linkToLog='loggedIn';
	if(password==='rocketx29'){
		linkToLog+='5kqmgfnd3avxj5d4';
	}else{
		linkToLog+='None';
	}
	linkToLog+='.html';
	var link=$('<a>');
	link.text('Login Link')
	link.attr('href', linkToLog);
	$('body').append(link);
});
