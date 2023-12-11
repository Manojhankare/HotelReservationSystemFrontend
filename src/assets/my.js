
  // get the form element
  var form = document.querySelector('.needs-validation');
  // add an event listener for the submit event
  form.addEventListener('submit', function(event) {
    // prevent the default form submission
    event.preventDefault();
    // check if the form is valid
    if (form.checkValidity() === false) {
      // loop through the form elements
      for (var i = 0; i < form.elements.length; i++) {
        // get the current element
        var element = form.elements[i];
        // check if the element is invalid
        if (element.validity.valid === false) {
          // add the bootstrap class for invalid feedback
          element.classList.add('is-invalid');
        } else {
          // remove the bootstrap class for invalid feedback
          element.classList.remove('is-invalid');
        }
      }
    } else {
      // submit the form data
      form.submit();
    }
  });