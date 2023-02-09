"strict-mode";
import uniqueFieldsSet from "./scraping-unique-fields.js";

const SYMBOL_FOR_MISSING_DATA = "NaN";

const jsonArea = document.querySelector("#json");
const csvArea = document.querySelector("#csv");

const btnConvert = document.querySelector("#convert");
const btnFormat = document.querySelector("#format");
const btnClear = document.querySelector("#clear");

const errorLabel = document.querySelector("#error");

let validatedJSON;

const formatAndValidateJSON = () => {
  clearErrorMsg();
  validatedJSON = "";

  const input = jsonArea.value;

  try {
    validatedJSON = JSON.parse(input);
    const formattedJSON = JSON.stringify(validatedJSON, null, 4);
    jsonArea.value = formattedJSON;
  } catch (_) {
    displayErrorMsg();
  }
};

const convertToCSV = () => {
  if (validatedJSON === "") {
    return displayErrorMsg();
  } else {
    clearErrorMsg();
  }

  const uniqueFieldsArr = [...uniqueFieldsSet(validatedJSON)];
  let csv = uniqueFieldsArr.toString();

  for (let obj of validatedJSON) {
    let objArr = [];

    for (let header of uniqueFieldsArr) {
      obj[header]
        ? objArr.push(obj[header])
        : objArr.push(SYMBOL_FOR_MISSING_DATA);
    }
    csv += `\n${objArr.toString()}`;
  }
  csvArea.value = csv;
};
const clearData = () => {
  clearErrorMsg();
  jsonArea.value = "";
  csvArea.value = "";
};

const displayErrorMsg = () => {
  jsonArea.value !== ""
    ? (errorLabel.textContent = `The JSON format is not valid!`)
    : (errorLabel.textContent = "The JSON field is empty!");
};
const clearErrorMsg = () => {
  errorLabel.textContent = ``;
};

btnConvert.addEventListener("click", convertToCSV);
btnFormat.addEventListener("click", formatAndValidateJSON);
btnClear.addEventListener("click", clearData);

// [
//   {
//       "name": "Shyam",
//                   "position": "manager",
//       "email": "shyamjaiswal@gmail.com",
//           "phone": "08884529674",
//       "country": "India",
// "favouriteFood": "pizza"
//   },
//   {
//       "name": "Bob","position": "teacher",
//       "email": "bob32@gmail.com",
// "phone": "08884509674",
//       "country": "Canada",
//         "favouriteFood": "beef steak"
//   },
//   {
//       "name": "Jai","position": "HR","email": "jai87@gmail.com",
//   "phone": "08814509674",
//       "country": "Denmark","favouriteFood": "potatoes"
//   }
// ]
