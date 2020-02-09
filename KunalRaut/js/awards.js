     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log(xhttp.responseText);
             var response = JSON.parse(xhttp.responseText);
             console.log(response.section);
             var arrayAwards = response.section;
             var addIcon = "";
  
            //  for (i in arrayExperience.section) {
            //   addIcon += "<li><i class='fa-li fa fa-check'></i>" + arrayExperience.h3 + "</li>";
            //     }
            addIcon += "<section class='resume-section p-3 p-lg-5 d-flex align-items-center' id='Awards'><div class='w-100'><h2 class='mb-5'>Awards &amp; Certifications</h2><ul class='fa-ul mb-0'>";

             for(var i=0; i<arrayAwards.length; i++){
              addIcon += "<li><i class='fa-li fa fa-trophy text-warning'></i>" + arrayAwards[i] + "</li>";

            }
            addIcon += "</ul></div></section>";  

            document.getElementById("awards").innerHTML = addIcon;
        }
     };
     xhttp.open("GET", "./data/awards.json", true);
     xhttp.send();


        

 