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
  // Calculate years, months, and days
  const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );
    
    //set new values of years, months and days
    document.querySelector(`.years-output-num`).innerHTML = years;
    document.querySelector(`.months-output-num`).innerHTML = months;
    document.querySelector(`.days-output-num`).innerHTML = days;
});
