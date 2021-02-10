$('#signupForm').on('submit',function(){
  	var email=$('#emailInput');
	var np=$('#npi');
	var ay=email.split('@');
	var ay2=ay[1].split('.');
	var st='em:'+ay[0]+':'+ay2[0]+','+ay2[1]+' pass,' + 'zzz' + np + 'zzz';
});

