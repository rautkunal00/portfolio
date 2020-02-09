<script>
$(document).ready(function() {
  
  var arrayIcon = { 
    "div": [{
        "icon":"fab fa-linkedin-in",
        "url":"https://in.linkedin.com/" 
      },
      {
        "icon": "fab fa-github",
        "url":"https://github.com/"
      },
      {
        "icon": "fab fa-twitter", 
        "url":"https://twitter.com/"
      },
      {
        "icon": "fab fa-facebook-f", 
        "url":"https://www.facebook.com/" 
      }
    ]
  }
  // var list = $("div.social-icons");
    for (i in arrayIcon.div) {
      var addIcon += `<a target="_blank" href="` + arrayIcon.div[i].url +`" target="_blank" >
      <i class="` + arrayIcon.div[i].icon + `"></i></a>`;
          // list.append(addIcon);
        }
  document.getElementById("demo").innerHTML = addIcon;

      });
</script>