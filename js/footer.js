//copyright year updater
function cpyYear(){
    var cpyText = document.getElementById('footer-copyright-text');
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    cpyText.innerHTML = "Copyright © " + year + " <b>Isaiah Kingswulfe Lee</b>. All Rights Reserved.";
}
cpyYear();