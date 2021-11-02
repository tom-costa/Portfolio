
window.addEventListener("DOMContentLoaded", function() {

    // Define constants from form elements:
    
    const form = document.getElementById("my-form");
    const status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "  Thanks for the message!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // Handle form submission event:

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // Helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }