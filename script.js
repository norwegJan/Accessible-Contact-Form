const mainForm = document.querySelector("#main-form");
const submitBtn = document.querySelector("#submit-btn");

const nameInputs = document.querySelectorAll(".name-input");
const emailInput = document.querySelector("#email");
const queryInputs = document.querySelectorAll(".query-input");
const messageInput = document.querySelector("#message");
const consentInput = document.querySelector("#consent");

const errorMsgFirstName = document.querySelector("#error-msg-first-name");

const errorMsg = {
  standard: "This field is required",
  email: "Please enter a valid email address",
  query: "Please select a query type",
  consent: "To submit this form, please consent to being contacted",
};

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValue = nameInputs[0].value;
  const lastNameValue = nameInputs[1].value;
  const emailValue = emailInput.value;
  const queryValue = getQuery();
  const messageValue = messageInput.value;
  const consentValue = getConsent();

  console.log(
    `Full name: ${firstNameValue} ${lastNameValue}
Email Address: ${emailValue}
Query Type: ${queryValue}
Message: ${messageValue}
Consent: ${consentValue}`,
  );
});

function isEmailValid() {}

function getQuery() {
  const queryArray = Array.from(queryInputs);
  const selectedQuery = queryArray.find((radio) => radio.checked);

  if (!selectedQuery) return null;
  return selectedQuery.value;
}

function getConsent() {
  if (!consentInput.checked) return "NO";
  return consentInput.value;
}

console.log("Hey 👋");
