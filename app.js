const h1 = document.querySelector(".hello h1");

function handletTitleClick(){
	if ((event.button === 2) || (event.which === 3))
	{
		h1.innerText = "The mouse is here!";
		h1.style.color = "purple";
	}
}

function handleMouseEnter(){
	h1.innerText = "The mouse is here!";
	h1.style.color = "green";
}

function handleMouseLeave(){
	h1.innerText = "The mouse is gone!";
	h1.style.color = "skyblue";
}

function handleWindowResize(){
	// document.body.style.backgroundColor = "tomato";
	h1.innerText = "You just resized";
	h1.style.color = "purple";
}

// function handleWindowCopy(){
// 	alert("copier!");
// }

// function handleWindowOffline(){
// 	alert("SOS no WIFI");
// }

// function handleWindowOnline(){
// 	alert("ALL GOOD");
// }

h1.addEventListener("click", handletTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);