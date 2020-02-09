$(document).ready(function() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.responseText);
    var response = JSON.parse(xhttp.responseText);
    console.log(response.sub);
        var arraySubject = response.sub;
        var addIcon = "";

        addIcon += "<div class='container-fluid p-0'><section class='resume-section p-3 p-lg-5 d-flex align-items-center' id='About'><div class='w-100'><h1 class='mb-0'>"+response.Fname+" <span class='text-primary'>"+response.Lname+"</span></h1><div class='subheading mb-5'>"+response.Address+"&nbsp;&nbsp;&nbsp;<a href='mailto:"+response.Email+"'>"+response.Email+"</a></div><p class='lead mb-5'>"+response.sub[0].p+"</p><div class='social-icons'>";


        for(var i=0; i<arraySubject.length; i++){
        addIcon += "<a target='_blank' href=" + arraySubject[i].url + "><i class='" + arraySubject[i].icon + "'></i></a>";

      }
      addIcon += "</div></div></section>";  

      document.getElementById("about").innerHTML = addIcon;
  }
};
xhttp.open("GET", "./data/about.json", true);
xhttp.send();

});


        

 