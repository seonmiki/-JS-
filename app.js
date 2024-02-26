const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

//first argument: information about the event that just happened
function onSubmit(event)
{
	event.preventDefault(); //stop default event
	console.log(event);
}

function handleLinkClick(event)
{
	event.preventDefault();
	console.log(event);
	// alert("clicked"); //막았다가 ok 누르면 실행됨
}
//onclick or pressEnter
loginForm.addEventListener("submit", onSubmit);
link.addEventListener("click", handleLinkClick);