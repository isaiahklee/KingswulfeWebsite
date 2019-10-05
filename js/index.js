//document.write("javascript");

function funky() {
    alert("ouch!");
}

function submit(username, password) {
    console.log(username, password);
}

function playSound() {
   // alert("On Press of "  + tuneName);
    var audio = new Audio("sound/oof.mp3");
    audio.play();
    console.log(audio.volume);
   // var pro = prompt("Lik dis if you cri evrtim:", ""); //note, prompt halts other code from executing until done. 
   // console.log(pro);
}

//object testing 
function Fridge(food, age) {
    this.food = food;
    this.age = age;
    this.isGood = isGood;
}
myFridge = {food:"pizza", age:2, isGood:isGood};
function isGood() {
    var ret = true;
    if(this.age > 3){
        ret = false;
    }
    return ret;
}
function checkFridge(){
    var fridge = new Fridge("cheese", 1999);
   // Document.write(fridge.foods + fridge.age);
    console.log(fridge.food + fridge.age);
    console.log(myFridge.food + myFridge.age);
    console.log(fridge.isGood());
    console.log(myFridge.isGood());
}

//html replacement
function switchSection(sect){
    let switchElement = document.getElementById("inserted-html");
    if(sect == "home"){
        switchElement.innerHTML = `
        <p>Hello and welcome to my website!</p>
        <p>My name is Isaiah, and to answer a likely initial question, my middle name is Kingswulfe. 
        Hence the domain name.
        </p>
        <p>I decided to create this site to act as a portfolio of my work and as a central nexus for my online presence; for hosting professional projects and as a place for users to log in for additional functionality as I create new things. I’ve tried to find that edge in both keeping it optimally professional and understandable while still showing my personality, but I will continue to refine the balance over time.</p>
        <br />
        <p>If you’re interested in my projects, I’ve created this website itself from scratch using:</p>
        <p>HTML, CSS and SASS, JavaScript and JQuery, PHP, and SQL</p>
        <p>As well as certain pages hosting specific projects in JS, Python, and more.</p>
        <br />
        <p>So welcome,</p>
        <p>And feel free to check it all out!</p>
        <p></p>
        `;
    }
    if(sect == "about"){
        switchElement.innerHTML = `
        <p>I am Isaiah Kingswulfe Lee,</p>
        <p>A Programmer, a creator, and an artist.</p>
        <p>Someone who is always looking forward to the next opportunity to learn something, and improve things and themselves. 
        </p>
        <p>Currently based in Madison Wisconsin and an Alumni of the UW Madison with a Bachelor's degree in computer science.</p>
        <p>I have a broad range of interests which currently include:</p>
        <p>Programming: useful scripts, tools, websites and webapps, games, and whatever projects come along.</p>
        <p>Digital art and media - drawing, painting, photos and photo manipulation, etc.</p>
        <p></p>
        `;
    }
    if(sect == "education"){
        switchElement.innerHTML = "<p>Graduate of the University of Wisconsin Madison with a bachelors of science in computer science.</p>";
    }
    if(sect == "projects"){
        switchElement.innerHTML = "<p>TODO - Descriptions of projects</p>";
    }
    if(sect == "skills"){
        switchElement.innerHTML = `
        <a href='docs/resume.pdf'>Link to resume</a>
        <br></br>
        <p>Languages:</P>
        <p>JavaScript  &nbsp&nbsp&nbsp   Python   &nbsp&nbsp&nbsp  HTML/CSS(SASS)/PHP   &nbsp&nbsp&nbsp  C   &nbsp&nbsp&nbsp  Java  &nbsp&nbsp&nbsp   MySQL</P>     
        <br></br>
        <p>Apps and Tools:</P>
        <p>Eclipse  &nbsp&nbsp&nbsp  Terminal  &nbsp&nbsp&nbsp  Visual-Studio-Code  &nbsp&nbsp&nbsp  Vim  &nbsp&nbsp&nbsp  Photoshop  &nbsp&nbsp&nbsp  Linux  &nbsp&nbsp&nbsp  BASH/Git</P>
        `;
    }
    if(sect == "contact"){
        switchElement.innerHTML = `
                                    <table>
                                        <tr>
                                            <td>
                                                Professional Email:
                                            </td>
                                            <td>
                                                &nbsp&nbsp&nbsp&nbsp Isaiahklee0@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Website Email:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp isaiahlee@kingswulfe.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Phone:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp Please Contact me via email for my number.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Linked-in:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp https://www.linkedin.com/in/isaiah-lee-b05304127/
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Handshake:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp https://app.joinhandshake.com/users/10625858
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Github:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp https://github.com/isaiahklee
                                            </td>
                                        </tr>
                                    </table>
                                    `;
    }
}
switchSection("home"); //this runs on page load