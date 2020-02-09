$(document).ready(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
      var response = JSON.parse(xhttp.responseText);
      console.log(response.section);
      var arrayExperience = response.section;
      var addIcon = "";

      addIcon += "<section class='resume-section p-3 p-lg-5 d-flex align-items-center' id='Skills'><div class='w-100'><h2 class='mb-5'>Skills</h2><div class='subheading mb-3'>Programming Languages &amp; Tools</div><ul class='list-inline dev-icons'>";
      for (k = 0; k < arrayExperience.logo.length; k++) {
        addIcon += "<li class='list-inline-item'><i class='p-2 " + arrayExperience.logo[k] + "'></i></li>";
      }
      addIcon += "</ul><div class='subheading mb-3'>Workflow</div><ul class='fa-ul mb-0'>";

      for (j = 0; j < arrayExperience.specf.length; j++) {
        addIcon += "<li><i class='fa-li fa fa-check'></i>" + arrayExperience.specf[j] + "</li>";
      }
      addIcon += "</ul></div></section>";

      document.getElementById("skills").innerHTML = addIcon;
    }
  };
  xhttp.open("GET", "./data/skills.json", true);
  xhttp.send();

});