function about_div()
{
console.log(document.getElementById("about-div"))
if ((document.getElementById("about-div").style.display === "none") || (document.getElementById("about-div").style.display === "block"))
    {
    document.getElementById("about-div").style.display = "block";
    document.getElementById("design-div").style.display = "none";
    document.getElementById("development-div").style.display = "none";
    document.getElementById("jukebox-div").style.display = "none";
    }
    else 
    {
        document.getElementById("about-div").style.display = "none";
        document.getElementById("design-div").style.display = "none";
        document.getElementById("development-div").style.display = "none";
        document.getElementById("jukebox-div").style.display = "none";
        }
      }

function design_div()
{
console.log(document.getElementById("design-div"))
if ((document.getElementById("design-div").style.display === "none") || (document.getElementById("design-div").style.display === "block"))
    {
    document.getElementById("about-div").style.display = "none";
    document.getElementById("design-div").style.display = "block";
    document.getElementById("development-div").style.display = "none";
    document.getElementById("jukebox-div").style.display = "none";
    }
    else 
    {
        document.getElementById("about-div").style.display = "none";
        document.getElementById("design-div").style.display = "none";
        document.getElementById("development-div").style.display = "none";
        document.getElementById("jukebox-div").style.display = "none";
        }
      }


function my_work_div()
      {
      console.log(document.getElementById("development-div"))
      if ((document.getElementById("development-div").style.display === "none") || (document.getElementById("development-div").style.display === "block"))
          {
          document.getElementById("about-div").style.display = "none";
          document.getElementById("design-div").style.display = "none";
          document.getElementById("development-div").style.display = "block";
          document.getElementById("jukebox-div").style.display = "none";
          }
          else 
          {
              document.getElementById("about-div").style.display = "none";
              document.getElementById("design-div").style.display = "none";
              document.getElementById("development-div").style.display = "none";
              document.getElementById("jukebox-div").style.display = "none";
              }
            }
            
            
function jukebox_div()
            {
            console.log(document.getElementById("jukebox-div"))
            if ((document.getElementById("jukebox-div").style.display === "none") || (document.getElementById("jukebox-div").style.display === "block"))
                {
                document.getElementById("about-div").style.display = "none";
                document.getElementById("design-div").style.display = "none";
                document.getElementById("development-div").style.display = "none";
                document.getElementById("jukebox-div").style.display = "block";
                }
                else 
                {
                    document.getElementById("about-div").style.display = "none";
                    document.getElementById("design-div").style.display = "none";
                    document.getElementById("development-div").style.display = "none";
                    document.getElementById("jukebox-div").style.display = "none";
                    }
                  }

function nav_collapse() {
  var x = document.getElementById("Topnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
} 