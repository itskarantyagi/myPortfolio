
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function nav_view() {
//     var x = document.getElementById("nav");
//     if (x.className === "nav") {
//       x.className += " responsive";
//     } else {
//       x.className = "nav";
//     }
//   } 


//   function nav_content(option_id){
//       if (option_id == "about-me"){
//         var contentdiv = document.getElementById("content-area");
//         contentdiv.InnerHtml  = "Timeline.html";
//       }
//   }


window.load = function() {
  var about = document.getElementById("about");
  about.onclick=function(){
    document.getElementById("content").innerHTML = "Timeline.html";
  }
}