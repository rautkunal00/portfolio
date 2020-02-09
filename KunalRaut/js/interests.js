$(document).ready(function() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var response = JSON.parse(xhttp.responseText);
        console.log(response.section);
        var arrayInterests = response.section;
        var addIcon = "";

        addIcon += "<section class='resume-section p-3 p-lg-5 d-flex align-items-center' id='Interests'><div class='w-100'> <h2 class='mb-5'>Interests</h2>";

        for(var i=0; i<arrayInterests.length; i++){
          addIcon += "<p>" + arrayInterests[i].p1 + "</p>";
          addIcon += "<p class='mb-0'>" + arrayInterests[i].p2 + "</p>";
        }
        addIcon += "</div></section>";  

        document.getElementById("interests").innerHTML = addIcon;
    }
};
xhttp.open("GET", "./data/interests.json", true);
xhttp.send();
});
  
   
           
   
    
        

 