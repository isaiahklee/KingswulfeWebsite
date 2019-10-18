//document.write("javascript");
/**
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
*/

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
        
        <p>My name is Isaiah, and to get rid of any lingering doubt you might have, my middle name is Kingswulfe.
        </p>
        <br />
        <p>I decided to create this site to act as a portfolio of my work, as a central nexus for my online presence, for hosting professional  and personal projects, and as a place for users to log in for additional functionality as I create new webapps and projects. </p>
        <br />
        <p>I’ve tried to find that edge in both keeping the site optimally professional and understandable while still showing my personality, but I will continue to refine the balance over time.</p>
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
        <p>a Programmer, a creator, and a passionate learner.</p>
        <p>Someone who is always looking forward to the next opportunity to learn and improve things and themselves. </p>
        <br />
        <p>I am currently based in Madison Wisconsin and an Alumni of the UW Madison with a Bachelor's degree in computer science.</p>
        <br />
        <p>I have a broad range of interests which currently include:</p>
        <br />
        <p><strong>Programming:</strong> useful scripts, tools, websites and webapps, games, and whatever projects come along.</p>
        <br />
        <p><strong>Entrepreneurship:</strong> I am very interested in gaining experience in order to either help innovate a company internally, or to branch off and start my own ventures. Both of my parents are multitalented and run their own businesses and projects, and I greatly admire ambition and entrepreneurship. </p>
        <br />
        <p><strong>Digital art and media:</strong> drawing, painting, photos and photo manipulation, the creation of novel and aesthetic things and the joy of the creative process really appeals to me. </p>
        <br />
        <p><strong>Music:</strong> My father is a musician and a music teacher, and I’ve always had a deep interest in various instruments and the creation and performance of music across the world. </p>
        <br />
        <p><strong>Writing and Narrative Design:</strong> I enjoy creating sci-fi and fictional settings and stories. Places to test out new ideas and further explore the human condition.</p>
        <br />
        <p><strong>Linguistics and Various Languages and Conlangs including:</strong> English, Spanish, German, Japanese, Chinese, Toki Pona, and more as yet unstudied.
        Right now I am only truly fluent in english but I am working on gaining spanish fluency. 
        One of my dreams is to be able to fluently speak the top ten most commonly spoken languages on earth, and I aim to achieve that before I die.
        </p>
        <p></p>
        <p></p>
        `;
    }
    if(sect == "education"){
        switchElement.innerHTML = `
        <p>Graduate of the University of Wisconsin Madison with a bachelors of science in computer science.</p>
        <br />
        <p>During my time at the University of Wisconsin I had coursework on:</p>
        <br />
        <p><strong>Software Engineering</strong> - In which I organized and supported a large and diverse team in designing a webapp; going back and forth with a real customer, gathering user stories and constant feedback on our AGILE design and implementation.</p>
        <br />
        <p><strong>Operating Systems</strong> - In which we explored and added functionality to the xv6 operating system such as schedulers, locks and race conditions, and anti-corruption handlers in case of crashes.</p>
        <br />
        <p><strong>Database creation and management</strong> - Where we learned the mathematical underpinnings of how databases function in order to better construct tricky searches most optimally.</p>
        <br />
        <p><strong>Computer Networking and Advanced Networking </strong>- Creating software to manage network switches, routers, and more in C. </p>
        <br />
        <p><strong>Basics of Artificial Intelligence and Machine learning</strong> - creating a neural network which takes user preferences and sorts movie recommendations based on them.</p>
        `;
    }
    if(sect == "projects"){
        switchElement.innerHTML = `
        <p>I have several projects hosted on this site, and I shall describe them below:</p>
        <br />
        <p><strong>The Website Itself:</strong>  I decided to create a website to act as a central nexus of my online presence, to allow me to host my projects in a public space, but also to act as a digital resume and portfolio. </p>
<br />
<p> <strong>Translate:</strong>  I was interested in integrating API calls into websites, and in using the computational resources freely available online for certain projects, So I Integrated an API yandex translate call in the hopes that I can further use this simple functionality to create a more complex project to help people study languages which I’ve titled langmash. </p>
<br />
<p><strong>Snake:</strong>	  I’ve always wanted to make a functional game of snake, tetris, and some other old games. To play around with them and see how they work. I want to ultimately try and integrate novel ideas and functionalities into them. </p>
<br />
<p><strong>Ray Stroke:</strong>	Basic ray tracing setup like original doom/wolfenstein. Interesting to see how games have always been illusions built on top of a scaffold of programming and logic. </p>
<br />
<p><strong>Log-In SQL:</strong> I wanted there to be account functionality on my website. For people to be able to create accounts and confirm them through email. 1. So I can experiment with implementing security, and 2. So I can add additional functionality to users who have logged in, seperate people into user groups, and share access to certain projects with certain groups. </p>
<br />
<p><strong>WARNING:</strong> running into python difficulties as server python is version 2.6.6 from 2010 and doesn’t support a lot of the modules required for the scraper. Currently working on either having the script run and it’s data stream in from another source, or creating a python 3 virtual env in the server where the script can safely run. </p>
<p><strong>Webscraper:</strong> The webscraper comes from a desire to make bots that go out and gather a lot of info from the web. I am really interested in how search engines make functional spiders/bots/web-crawlers, not to mention the countless other companies and individuals stripping info off the web with automated bots. </p>
        `;
    
    }
    if(sect == "skills"){
        switchElement.innerHTML = `
        <a href='docs/resume.pdf'>Link to resume</a>
        <br></br>
        
        <p><strong>Technical Skills</strong></p>
        <p>Firm understanding of Frontend/Backend dichotomy in Model-View-Controller setup in real world environments</p>
        <p>Experience working in an AGILE team, gathering user stories, and performing weekly sprints</p>
        <p>Experience writing documentation to the degree that another team would feel comfortable taking over the project</p>
        <br />
        <p><strong>Applications & Tools</strong></p>
        <p>Eclipse IDE,  VSCode,  Command Shells and Terminals,  Vim,  Windows and Linux environments,  BASH/Git version controllers, Photoshop and InDesign</p>
        <br />
        <p><strong>Languages</strong></p>
        <p>Familier:  JavaScript,  Python,  C,  Java,  HTML</p>
        <p>Some Experience:  SQL,  CSS,  PHP,  React,  Node.js,  Express.js</p>
        <br />
        <p><strong>Leadership</strong></p>
        <p>Ability to show initiative and leadership in organizing and executing with a dynamic and diverse team</p>
        <p>Relentlessly pushing for optimization, improvement, and simplification to avoid edge cases and bugs</p>
        <p>Skilled in helping team members improve their abilities and overcome obstacles</p>

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
                                                &nbsp&nbsp&nbsp&nbsp <a href = "mailto: Isaiahklee0@gmail.com">Isaiahklee0@gmail.com</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Website Email:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp <a href = "mailto: isaiahlee@kingswulfe.com">isaiahlee@kingswulfe.com</a>
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
                                            &nbsp&nbsp&nbsp&nbsp <a href = https://www.linkedin.com/in/isaiah-lee-b05304127/>https://www.linkedin.com/in/isaiah-lee-b05304127/</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Handshake:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp <a href = https://app.joinhandshake.com/users/10625858>https://app.joinhandshake.com/users/10625858</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Github:
                                            </td>
                                            <td>
                                            &nbsp&nbsp&nbsp&nbsp <a href = https://github.com/isaiahklee>https://github.com/isaiahklee</a>
                                            </td>
                                        </tr>
                                    </table>
                                    `;
    }
}
switchSection("home"); //this runs on page load