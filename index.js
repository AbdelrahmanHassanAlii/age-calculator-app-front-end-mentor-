let button = document.querySelector(".calc-button");
button.addEventListener("click", () => {
  // get the 3 inputs
  let daysInput = document.getElementById("day").value;
  let monthsInput = document.getElementById("month").value;
  let yearsInput = document.getElementById("year").value;
  //create new date
  let fullDate = new Date(`${monthsInput}-${daysInput}-${yearsInput}`);
  // Check if a valid fullDate is selected
  if (isNaN(fullDate.getTime())) {
    alert("Please enter a valid birthdate.");
    return;
  }
  console.log(fullDate.getTime());
  //get date now
  let currentDate = Date.now();
  console.log(currentDate);
});
