//document.write("javascript");

function transfunc() {
    var inputText;
    var translatedText;
    //parse text into array
    inputText = document.getElementById("transText").value;
    //yandex translate input text, place that into array

    //take 50% of words in translated sentence, replace with english equivs
    //USE str.replace(othrWord, enfWord); //consider regular expressions?

    //print that into other text box
    if(inputText != null)
        console.log(inputText);
        //yandex magic
        //translatedText = inputText; //magic stand in
        let url = makeYandexRequest(inputText)
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myJSON = JSON.parse(this.responseText);
            console.log(myJSON);
            translatedText = myJSON.text;
            document.getElementById("transText2").innerHTML = translatedText;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function makeYandexRequest(inputText){
    let apikey = "trnsl.1.1.20190314T162628Z.048088276808b412.4d49ed47872430d29c1b2e5f9863d60c931381e7"
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate" + 
                "?key=" + apikey +
                "&text="+ inputText +
                "&lang=en-ru" +
                "&[format=plain]";
                //"& [options=<translation options>]" +
                //"& [callback=<name of the callback function>]"
    //onsole.log(url);
    return url;
}

document.addEventListener('DOMContentLoaded', function() {
    var translate = document.getElementById('transbutton');
    translate.addEventListener('click', function() {
        transfunc();
    });
});