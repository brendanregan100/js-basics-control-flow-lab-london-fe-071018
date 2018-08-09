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

switch switchOnCharmFromTip(value){
    case "generous":
      value = "Thank you so much.";
        break;
    case "moderate":
      value = "Thank you.";
        break;
    default:
      value = "Bye.";
        break;
}  
