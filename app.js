//Grab the values from form input

const principal = document.getElementById("principal");
const rateOfInterest = document.getElementById("roi");
const years = document.getElementById("years");
const amount = document.getElementById('amount')

//Image element
const loading = document.querySelector("img");

//Result element
const result = document.querySelector(".result");
const resultHolder = document.getElementById("amount");

//Error element
const error = document.querySelector(".error-msg");

//Container element
const container = document.querySelector(".container");

//Submit button element
const submit = document.querySelector('.submit');

//Clear Button element
const clear = document.querySelector('.clear');

//Event Handler for submit button
const submitButton = document.querySelector("button");
submitButton.addEventListener("click", function (e) {
  //Show loading
  loading.style.display = "block";

  setTimeout(calculateInterest, 2000);
  e.preventDefault();
});

//Event handler for Clear button
clear.addEventListener('click', function(e){
  principal.value = "";
  rateOfInterest.value = "";
  years.value = "";
  amount.value = ''


  //Show submit button
  submit.style.display = "block";

  //hide clear button
  clear.style.display = 'none';

  //Hide Amount div
  result.style.display = 'none';
    
  e.preventDefault();
})

function calculateInterest() {
  const principalValue = parseFloat(principal.value);
  const rateOfInterestValue = parseFloat(rateOfInterest.value);
  const yearsValue = parseFloat(years.value);
  const rateOfInterestDecimal = rateOfInterestValue / 100;

  const amount =
    principalValue * Math.pow(1 + rateOfInterestDecimal / 1, yearsValue);
  resultHolder.value = amount.toFixed(4 );

  if (isFinite(amount)) {
    //Hide loading
    loading.style.display = "none";

    //Show result
    result.style.display = "block";

    //show clear button
    clear.style.display = 'block'

    //Hide submit button
    submit.style.display = 'none'

    
  } else {
    showError("Please enter all the fields");
  }
}

function showError(error) {
  //Hide loading
  loading.style.display = "none";

  //hide result
  result.style.display = "none";

  //create an error div
  const errorDiv = document.createElement("div");

  //Add class to div
  errorDiv.className = "error-msg";

  //Append text node
  errorDiv.appendChild(document.createTextNode(error));

  //AppendChild
  container.insertBefore(errorDiv, container.firstChild);

  //clearError
  setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.error-msg').remove();
}
