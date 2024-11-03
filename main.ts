const toggleSkillCheckbox = document.getElementById(
  "Toggle-Skill"
) as HTMLInputElement;
const skillSection = document.getElementById("Skill-Section") as HTMLElement;

toggleSkillCheckbox.addEventListener("change", function () {
  if (toggleSkillCheckbox.checked) {
    skillSection.style.display = "block";
  } else {
    skillSection.style.display = "none";
  }
});

function generateResume(e: Event): void {
  e.preventDefault();
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phonenumber") as HTMLInputElement;
  const profilepicture = document.getElementById("profilepicture")as HTMLInputElement

  const educationElement = document.getElementById("education") as HTMLTextAreaElement;
  const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
  const skillsElement = document.getElementById("skill") as HTMLTextAreaElement;

  const name = nameElement.value;
  const email = emailElement.value;
  const phone = phoneElement.value;
  const education = educationElement.value;
  const experience = experienceElement.value;
  const skills = skillsElement.value;

  const profilePicture = profilepicture.files?.[0];
  const profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : '';


  if (name && email && phone && education && experience && skills) {
    const resumeOutput = `
    <h2> Resume </h2>
    ${profilePictureURL ? `<img src= ${profilePictureURL} alt = "Profile Picture" class= "profilepicture">` : "" }
    <p><strong>Name:</strong>${name} </p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone Number:</strong>${phone}</p>

    <h3> Education </h3>
    <p>${education}</p>

    <h3> Experience </h3>
    <p>${experience}</p>

    <h3> Skills </h3>
    <p>${skills}</p>
`;

    const resumeOutputElement = document.getElementById(
      "ResumeOutput"
    ) as HTMLInputElement;
    if (resumeOutput) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.log("The Resume Output Element are Missing.");
    }
  }
}
