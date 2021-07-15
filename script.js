let name = document.getElementById("studentName");
let cardName = document.querySelector(" .card-body h5");
let roll = document.getElementById("rollNumber");
let CardRoll = document.getElementById("cardRoll");
let registration = document.getElementById("registrationNumber");
let cardRegistration = document.getElementById("cardRegistration");
let course = document.getElementById("course");
let cardCourse = document.getElementById("cardCourse");
let branch = document.getElementById("branch");
let cardBranch = document.getElementById("cardBranch");
let school = document.getElementById("school");
let cardSchool = document.getElementById("cardSchool");
name.addEventListener("input", () => liveCardUpdater(name, cardName));
roll.addEventListener("input", () => liveCardUpdater(roll, cardRoll));
registration.addEventListener("input", () => liveCardUpdater(registration, cardRegistration));
course.addEventListener("input", () => liveCardUpdater(course, cardCourse));
branch.addEventListener("input", () => liveCardUpdater(branch, cardBranch));
school.addEventListener("input", () => liveCardUpdater(school, cardSchool));
let fileUpload = document.getElementById("profilePic");
// fileUpload.addEventListener("click", (e) => console.log(e));


function liveCardUpdater(x, y) {
    let nameEntered = x.value;
    console.log(nameEntered);
    y.textContent = nameEntered;
};
var loadImage = (event) => {
    console.log("lol");
    let image = document.getElementById("cardImage");
    console.log(event);
    image.src = URL.createObjectURL(event.target.files[0]);
}