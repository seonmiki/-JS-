const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//first argument: information about the event that just happened
function onSubmit(event)
{
	event.preventDefault(); //stop default event
	loginForm.classList.add("hidden");
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings();
}

function paintGreetings(){
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null)
{
	//show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	//onclick or pressEnter
	loginForm.addEventListener("submit", onSubmit);
}
else
{
	//show the greetings
	paintGreetings();
}
