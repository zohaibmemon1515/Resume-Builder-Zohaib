const toggleSkillCheckbox = document.getElementById("Toggle-Skill") as HTMLInputElement;
const skillSection = document.getElementById("Skill-Section") as HTMLElement;


toggleSkillCheckbox.addEventListener("change", function () {
    if (toggleSkillCheckbox.checked) {
        skillSection.style.display = "block"; 
    } else {
        skillSection.style.display = "none";  
    }
});

