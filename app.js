const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

function onSubmit(event)
{
	event.preventDefault(); //stop default event
	console.log(event);
}
//onclick or pressEnter
loginForm.addEventListener("submit", onSubmit);