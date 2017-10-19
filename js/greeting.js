(function(){

  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let getHeader = document.getElementById("my-header");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
	getHeader.innerHTML = userName.value + "i";
	
	
    ev.preventDefault();
	return false;
  }

  getName.addEventListener("submit", PerformGreeting);
  
  
  if (typeof event == "undefined") {
	  getName.onsubmit = PerformGreeting
  } else {
	  getName.addEventListener("submit", PerformGreeting);
  }
  
  
}());
