const app = "I don't do much."

function fatBastard(meal) {
  function whatsForDinner() {   // closure function
    if (meal === "Mini-me") {
      console.log("The wee man is in my belly!");
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }
  return whatsForDinner;
}
