const h1 = document.querySelector(".hello h1");

function handletTitleClick(){
	h1.classList.toggle("clicked");
	// const clickedClass = "cliked";
	// if (h1.classList.contains(clickedClass))
	// 	h1.classList.remove(clickedClass);
	// else
	// 	h1.classList.add(clickedClass);
}

h1.addEventListener("click", handletTitleClick);

function handleWindowResize() {
	const ViewportWidth = window.innerWidth;
  
	if (ViewportWidth <= 500) {
	  document.body.classList.toggle("small");
	} else if (ViewportWidth <= 700) {
	  document.body.classList.toggle("middle");
	} else {
	  document.body.classList.toggle("large");
	}
  }
  
  window.addEventListener("resize", handleWindowResize);
  