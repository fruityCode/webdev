const userForm = document.querySelector('.user_form');

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const ageField = document.getElementById('age_input');
  const genderField = document.getElementById('gender_input');
  const serumCreatinineField = document.getElementById('sc_input');
  const ethnicityField = document.getElementById('ethnicity_input');

  const age = ageField.value;
  const gender = genderField.value;
  const serumCreatinine = serumCreatinineField.value;
  const ethnicity = ethnicityField.value;

  const egfr = calculateEGFR(age, gender, serumCreatinine, ethnicity).toFixed(2);
  let resultText;
  if (egfr >= 90) {
    resultText = "Your estimated Glomerular Filtration Rate (eGFR) is " + egfr + ". " + "This value is in normal range.";
  } else if (egfr >= 60 && egfr <= 89) {
    resultText = "Your estimated Glomerular Filtration Rate (eGFR) is " + egfr + ". " + "This value is in normal range.";
  } else if (egfr >= 30 && egfr <= 59) {
    resultText = "Your estimated Glomerular Filtration Rate (eGFR) is " + egfr + ". " + "This means you have moderate kidney damage.";
  } else if (egfr >= 15 && egfr <= 29) {
    resultText = "Your estimated Glomerular Filtration Rate (eGFR) is " + egfr + ". " + "This means you have severe kidney damage.";
  } else if (egfr < 15) {
    resultText = "Your estimated Glomerular Filtration Rate (eGFR) is " + egfr + ". " + "This means your kidneys are close to failure or have already failed.";
  }
  const resultParagraph = document.getElementById("result");
  resultParagraph.innerText = resultText;

  userForm.reset();
})

function getDoctors() {
  const url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=kidney&location=ca-berkley&limit=5&user_key=PMAK-6121e7816c13a9003ba6f5f9-05bf2aa9d4a2ef452d1f942c39e3f1ac6b';

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
      // Expected xhttp.responseText to return a list of doctors who work with kidney patients and are located close to the patient.
      // The API did not function properly and keeps returning a 404 error.
      // The idea was to take the list of doctors returned from the API and render a suggested list of doctors to the user.
      // Due to error of the API, this functionality is yet to be implemented.
    }
  }
  xhttp.send();
}
function calculateEGFR(age, gender, serumCreatinine, ethnicity) {
  if (ethnicity == 'black') {
    if (gender == 'male') {
      if (serumCreatinine <= 0.9) {
        return 163 * ((serumCreatinine / 0.9) ** -0.411) * ((0.993)**age);
      } else {
        return 163 * ((serumCreatinine / 0.9) ** -1.209) * ((0.993)**age);
      }
    } else {
      if (serumCreatinine <= 0.7) {
        return 166 * ((serumCreatinine / 0.7) ** -0.329) * ((0.993)**age);
      } else {
        return 166 * ((serumCreatinine / 0.7) ** -1.209) * ((0.993)**age);
      }
    }
  } else {
    if (gender == 'male') {
      if (serumCreatinine <= 0.9) {
        return 141 * ((serumCreatinine / 0.9) ** -0.411) * ((0.993)**age);
      } else {
        return 141 * ((serumCreatinine / 0.9) ** -1.209) * ((0.993)**age);
      }
    } else {
      if (serumCreatinine <= 0.7) {
        return 144 * ((serumCreatinine / 0.7) ** -0.329) * ((0.993)**age);
      } else {
        return 144 * ((serumCreatinine / 0.7) ** -1.209) * ((0.993)**age);
      }
    }
  }
}