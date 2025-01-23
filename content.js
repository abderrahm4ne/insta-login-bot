
function fillFormField(fieldName, value) {
  const field = document.getElementsByName(fieldName)[0];
  if (field) {
      field.value = value;
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
      field.dispatchEvent(new Event('blur', { bubbles: true }));
      console.log(`${fieldName} filled.`);
  } else {
      console.log(`${fieldName} cannot be found!`);
  }
}

fillFormField('username', 'your-username'); // username here
fillFormField('password', 'your-password'); // passwrod here


function submitForm(){
  let submitButton = document.getElementsByClassName(' _acan _acap _acas _aj1- _ap30')[0];

  if(submitButton){
    submitButton.click();
    console.log('form submitted');
  }
  else{
    console.log('did not access to the form submit button  ');
  }
}

submitForm();