'use strict';

var code = prompt("Enter the code to be executed");

try
{
	eval(code);
}
catch(ex)
{
	alert(ex);
}