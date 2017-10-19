(function(){

  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    ev.preventDefault();
  }

  getName.addEventListener("submit", PerformGreeting);
  
}());
