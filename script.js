
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

 var darkTheme = "
    * {
      padding: 0px;
      margin: 0px;
   }
body {
   background-color: black;
   width: 100%;
      height: 100%;
   }
header{
   background-color: Red;
   width:100%;
   height: 20%;
   text-align: center;
   font-size: 20px;
   color: White;
  }
  RedText{
     color: Red;
 }
 middletext{
  text-align: center;
  }
  button{
  background-color: Red;
  border: white;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font size: 16px;
  margin: 4px 2px;
  cursor: pointer;
     border-radius: 15px;
     border-width: 10px;
     border-style: solid;
  border-color: white;
  }
"
var theme = getCookie("theme")

if (theme == "dark") {
  document.getElementsByTagName('style')[0].remove();
  alert("removed old theme")
 var styleSheet = document.createElement("style")
 alert("Created new theme")
styleSheet.innerText = darkTheme
  alert("set css")
document.head.appendChild(styleSheet)
  alert("themeAdded")
}
