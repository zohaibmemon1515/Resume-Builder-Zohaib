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
