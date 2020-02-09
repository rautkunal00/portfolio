$(document).ready(function() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
      var response = JSON.parse(xhttp.responseText);
      console.log(response.nav);
      var arrayNavbar = response.nav;
      var addIcon = "";
  
      addIcon += "<nav class='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'><a class='navbar-brand js-scroll-trigger' href='#page-top'><span class='d-block d-lg-none'>Meghana Vishe</span><span class='d-none d-lg-block'><img class='img-fluid img-profile rounded-circle mx-auto mb-2' src='img/profile.jpg' alt=''></span></a><button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarSupportedContent'><ul class='navbar-nav'>";

      for(var i=0; i<arrayNavbar.length; i++){
        addIcon += "<li class='nav-item'><a class='nav-link js-scroll-trigger' href='" + arrayNavbar[i].u + "'>"+ arrayNavbar[i].n + "</a></li>";
      }
        addIcon += "</ul></div></nav>";  

        document.getElementById("sidenav").innerHTML = addIcon;
    }
  };
    xhttp.open("GET", "./data/sidenav.json", true);
    xhttp.send();


});


        
        

 