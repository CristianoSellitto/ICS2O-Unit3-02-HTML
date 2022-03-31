// Cristiano
// ICS2O-Unit3-02-HTML
// March 31 2022

'use strict'
/**
 * Calculates the volume of a pyramid using length, width and height the user provides in number fields.
 */
function calculate() {
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)
  const answer = (length * width * height) / 3

  document.getElementById("output").innerHTML = "<br><p>The volume of this pyramid is " + answer + "cm³</p>"
}
