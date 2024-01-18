let button = document.querySelector(".calc-button");
button.addEventListener("click", () => {
  // get the 3 inputs
  let daysInput = document.getElementById("day").value;
  let monthsInput = document.getElementById("month").value;
  let yearsInput = document.getElementById("year").value;
  //create new date
  let birthdate = new Date(
    `${monthsInput}-${daysInput}-${yearsInput}`
  ).getTime();
  // Check if a valid fullDate is selected
  if (isNaN(birthdate)) {
    alert("Please enter a valid birthdate.");
    return;
  }
  //get date now
  let today = Date.now();
  //calc the full age
  let ageInMilliseconds = today - birthdate;
});
