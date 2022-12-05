<script>
  // Import the TabGrab object from the library file
  var TabGrab = require("https://euphonious-sprite-03dbfc.netlify.app/lib.js");

  // Initialize the TabGrab service after the library has been loaded
  window.addEventListener("load", function() {
    var faviconUrl = "https://upmostly.com/wp-content/uploads/android-chrome-192x192-2.png";
    var pageTitle = "(1) Don't forget your tutorial";
    var controlPopulation = 50;
    var timeout = 1500;

    // Initialize the service using the TabGrab.init function
    TabGrab.init(faviconUrl, pageTitle, controlPopulation, timeout);
  });
</script>