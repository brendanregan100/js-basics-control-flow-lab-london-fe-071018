// Write your code in this file!
function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return ("This one is on me!");
  }
  else if (distance > 2500){
    return ("No can do.");
  }  
  return ("I will gladly take your thirty bucks.");
}

function ternaryCheckCity(location){
  return location === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(value) {
  switch(value){
    case "generous":
      return "Thank you so much.";
        break;
    case "moderate":
      return "Thank you.";
        break;
    default:
      return "Bye.";
        break;
  }
}
