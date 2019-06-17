

//need to run cgi python script on server with user input and return data to html to be displayed.

function runtest(){ 
    var xhr = new XMLHttpRequest();
    var text = 
    xhr.open("GET", "pythoncode.py?text=" + text, true);
    xhr.responseType = "JSON";
    xhr.onload = function(e) {
        var arrOfStrings = JSON.parse(xhr.response);
    }
    xhr.send();
    console.log("there was an attempt");
}

function runtest2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "xmlhttp_info.txt", true);
    xhttp.send();
  }