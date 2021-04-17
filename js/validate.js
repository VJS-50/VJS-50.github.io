function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');

  var form = document.getElementById("addObsForm");

  var lat = form["lat"].value;
  var lng = form["lng"].value;

  var latValid, lngValid;

  if (lat < -90 || 90 < lat || isNaN(lat) === true) {
    latValid = false;
    document.getElementById("latInvalid").style.display = "inline";
  } else latValid = true;

  if (lng < -180 || 180 < lng || isNaN(lng) === true) {
    lngValid = false;
    document.getElementById("lngInvalid").style.display = "inline";
  } else lngValid = true;

  if (latValid == true && lngValid == true) {
    document.getElementById("latInvalid").style.display = "none";
    document.getElementById("lngInvalid").style.display = "none";
    return true;
  } else {
    return false;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
