var retrievedObject = localStorage.getItem("success");
document.getElementById("display").innerHTML = localStorage.getItem("success");
// alert(retrievedObject);
let screen = document.getElementById("screen");
// select all the buttons
buttons = document.querySelectorAll("button");
let screenValue = "";
// let displayValue += screenValue;
// let displayValue = screenvalue ;

// putting the function in my screen id so that i can make the further calculations.First added for all loop and then applied an event listener to it to get the input of the particular number in it
for (item of buttons) {
  item.addEventListener("click", (e) => { 
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
       
      screen.value = eval(screenValue);
      // displayValue += screenValue;
      var today = new Date();
      let displayValue =
        "Time: " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        "<br>" +
        "Last calculation: " +
        screenValue +
        "=" +
        eval(screenValue);
      localStorage.setItem("success", displayValue);
      document.getElementById("display").innerHTML = localStorage.getItem(
        "success"
      );
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
