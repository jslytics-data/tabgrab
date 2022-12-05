<script>
  // Include the library file
  var script = document.createElement("script");
  script.src = "https://euphonious-sprite-03dbfc.netlify.app/lib.js";
  document.head.appendChild(script);

  // Initialize the TabGrab service after the library has been loaded
  script.onload = function() {
    var faviconUrl = "https://upmostly.com/wp-content/uploads/android-chrome-192x192-2.png";
    var pageTitle = "(1) Don't forget your tutorial";
    var controlPopulation = 50;
    var timeout = 1500;

    TabGrab.init(faviconUrl, pageTitle, controlPopulation, timeout);
  }
</script>