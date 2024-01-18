let button = document.querySelector(".calc-button");
button.addEventListener("click", () => {
  // get the 3 inputs
  let daysInput = document.getElementById("day").value;
  let monthsInput = document.getElementById("month").value;
  let yearsInput = document.getElementById("year").value;
  if (daysInput === ``) {
    document.querySelector(`.for-day`).innerHTML = `This field is required`;
    document.querySelector(`.for-day`).style.color = `hsl(0, 100%, 67%)`;
    document.querySelector(`#day`).style.color = `hsl(0, 100%, 67%)`;
    document.querySelector(
      'label[for="day"]'
    ).style.color = `hsl(0, 100%, 67%)`;
  }
  if (monthsInput === ``) {
    document.querySelector(`.for-month`).innerHTML = `This field is required`;
    document.querySelector(`.for-month`).style.color = `hsl(0, 100%, 67%)`;
    document.querySelector(
      'label[for="month"]'
    ).style.color = `hsl(0, 100%, 67%)`;
  }
  if (yearsInput === ``) {
    document.querySelector(`.for-year`).innerHTML = `This field is required`;
    document.querySelector(`.for-year`).style.color = `hsl(0, 100%, 67%)`;
    document.querySelector(
      'label[for="year"]'
    ).style.color = `hsl(0, 100%, 67%)`;
  }
  //create new date
  let birthdate = new Date(
    `${monthsInput}-${daysInput}-${yearsInput}`
  ).getTime();
  // Check if a valid fullDate is selected
  if (isNaN(birthdate)) {
    //   alert("Please enter a valid birthdate.");
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
