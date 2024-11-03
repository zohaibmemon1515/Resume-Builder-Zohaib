var toggleSkillCheckbox = document.getElementById("Toggle-Skill");
var skillSection = document.getElementById("Skill-Section");
toggleSkillCheckbox.addEventListener("change", function () {
    if (toggleSkillCheckbox.checked) {
        skillSection.style.display = "block";
    }
    else {
        skillSection.style.display = "none";
    }
});
function generateResume(e) {
    var _a;
    e.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phonenumber");
    var profilepicture = document.getElementById("profilepicture");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skill");
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value;
    var profilePicture = (_a = profilepicture.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : '';
    if (name && email && phone && education && experience && skills) {
        var resumeOutput = "\n    <h2> Resume </h2>\n    ".concat(profilePictureURL ? "<img src= ".concat(profilePictureURL, " alt = \"Profile Picture\" class= \"profilepicture\">") : "", "\n    <p><strong>Name:</strong>").concat(name, " </p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone Number:</strong>").concat(phone, "</p>\n\n    <h3> Education </h3>\n    <p>").concat(education, "</p>\n\n    <h3> Experience </h3>\n    <p>").concat(experience, "</p>\n\n    <h3> Skills </h3>\n    <p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById("ResumeOutput");
        if (resumeOutput) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.log("The Resume Output Element are Missing.");
        }
    }
}
