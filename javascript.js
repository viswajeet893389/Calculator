let screen = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let buttonValue = "";
for(item of buttons){
  item.addEventListener('click', function(e){
    let buttonText = e.target.innerHTML;

    if(buttonText=='C'){
      buttonValue="";
      screen.value = buttonValue;
    } else if(buttonText == '='){
      screen.value = eval(buttonValue);
    } else if(buttonText == 'x'){
      let myArr = Array.from(buttonValue);
      buttonValue = buttonValue.substr(0, buttonValue.length-1);
      screen.value = buttonValue;
    }else{
      buttonValue += buttonText;
      screen.value = buttonValue;
    }

  })
}
