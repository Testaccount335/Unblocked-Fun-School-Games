if (localStorage.setItem("theme") == "dark") {
  var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githubusercontent.com/Testaccount335/Unblocked-Fun-School-Games/main/themes/dark.css';
    link.media = 'all';
    head.appendChild(link);
} 
