function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(email);

  if (!test) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}

function validateEmailNoRegex(email) {
  // var email = document.getElementById("email").value;

  if (email == '') {
    alert('Please enter a valid email address');
    return false;
  }
  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }
  return true;
}
