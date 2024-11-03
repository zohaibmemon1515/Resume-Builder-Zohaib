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
    var profilepicture = document.getElementById("profilepicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phonenumber");
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
        var resumeOutput = "\n    <h2> Resume </h2>\n    ".concat(profilePictureURL ? "<img src= ".concat(profilePictureURL, " alt = \"Profile Picture\" class= \"profilepicture\">") : "", "\n    <p><strong>Name:</strong> <span id = \"edit-name\" class = \"editable\">").concat(name, "</span></p>\n    <p><strong>Email:</strong><span id = \"edit-email\" class = \"editable\">").concat(email, "</span></p>\n    <p><strong>Phone Number:</strong><span id = \"edit-phone\" class = \"editable\">").concat(phone, "</span></p>\n\n    <h3> Education </h3>\n    <p id = \"edit-eduaction\" class = \"editable\">").concat(education, "</p>\n\n    <h3> Experience </h3>\n    <p id = \"edit-experience\" class = \"editable\">").concat(experience, "</p>\n\n    <h3> Skills </h3>\n    <p id = \"edit-skills\" class = \"editable\">").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById("ResumeOutput");
        if (resumeOutput) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeeditable();
        }
        else {
            console.log("The Resume Output Element are Missing.");
        }
    }
}
function makeeditable() {
    var editableelements = document.querySelectorAll(".editable");
    editableelements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentelement = element;
            var currentValue = currentelement.textContent || "";
            if (currentelement.tagName === "P" || currentelement.tagName === "SPAN") {
                var Input_1 = document.createElement("input");
                Input_1.type = "text";
                Input_1.value = currentValue;
                Input_1.classList.add("editing-Input");
                Input_1.addEventListener("blur", function () {
                    currentelement.textContent = Input_1.value;
                    currentelement.style.display = "inline";
                    Input_1.remove();
                });
                currentelement.style.display = "none";
                (_a = currentelement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(Input_1, currentelement);
                Input_1.focus();
            }
        });
    });
}
