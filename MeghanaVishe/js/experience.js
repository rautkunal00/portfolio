$(document).ready(function() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log(xhttp.responseText);
             var response = JSON.parse(xhttp.responseText);
             console.log(response.section);
             var arrayExperience = response.section;
             var addIcon = "";

            addIcon += "<section class='resume-section p-3 p-lg-5 d-flex justify-content-center' id='Experience'><div class='w-100'><h2 class='mb-5'>Experience</h2>";

             for(var i=0; i<arrayExperience.length; i++){
              addIcon += "<div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'><div class='resume-content'><h3 class='mb-0'>" + arrayExperience[i].h3 + "</h3>";
              addIcon += "<div class='subheading mb-3'>" + arrayExperience[i].subheading + "</div>";
              addIcon += "<p>" + arrayExperience[i].p +  "</p></div>";
              addIcon += "<div class='resume-date text-md-right'><span class='text-primary'>" + arrayExperience[i].span +  "</span></div></div>";

            }
            addIcon += "</div></section>";  

             document.getElementById("experience").innerHTML = addIcon;
            }
     };
     xhttp.open("GET", "./data/experience.json", true);
     xhttp.send();

        });