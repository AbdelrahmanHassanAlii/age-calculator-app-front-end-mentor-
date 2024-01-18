let button = document.querySelector(".calc-button");
button.addEventListener("click", () => {
  let daysInput = document.getElementById("day").value;
  let monthsInput = document.getElementById("month").value;
  let yearsInput = document.getElementById("year").value;
  let fullDate = `${monthsInput}-${daysInput}-${yearsInput}`;
  console.log(new Date(fullDate));
});
