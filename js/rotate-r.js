// Get Time
function rotate_r() {
  var d = new Date();
  var n = (d.getMinutes()) * (-6); // Turn 'R' 6 degrees anticlockwise in every minute
  document.getElementById("rot").style.transform = "rotate(" + n + "deg)"; //Display 'R'
}

// Refresh 'R' By Time On Screen
setInterval('rotate_r()', 1000)
