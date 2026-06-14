const mainForm = document.querySelector("#main-form");
const submitBtn = document.querySelector("#submit-btn");

const errorMsgFirstName = document.querySelector("#error-msg-first-name");

const errorMsg = {
  standard: "This field is required",
  email: "Please enter a valid email address",
  query: "Please select a query type",
  consent: "To submit this form, please consent to being contacted",
};

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", () => {
  console.log("Hokus Pokus, Filiokus! 🪄🧙‍♂️");
});
