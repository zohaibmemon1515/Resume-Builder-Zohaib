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
  const profilepicture = document.getElementById("profilepicture")as HTMLInputElement;
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById(
    "phonenumber"
  ) as HTMLInputElement;
  const educationElement = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const experienceElement = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
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
    <p><strong>Name:</strong> <span id = "edit-name" class = "editable">${name}</span></p>
    <p><strong>Email:</strong><span id = "edit-email" class = "editable">${email}</span></p>
    <p><strong>Phone Number:</strong><span id = "edit-phone" class = "editable">${phone}</span></p>

    <h3> Education </h3>
    <p id = "edit-eduaction" class = "editable">${education}</p>

    <h3> Experience </h3>
    <p id = "edit-experience" class = "editable">${experience}</p>

    <h3> Skills </h3>
    <p id = "edit-skills" class = "editable">${skills}</p>
`;

    const resumeOutputElement = document.getElementById(
      "ResumeOutput"
    ) as HTMLInputElement;
    if (resumeOutput) {
      resumeOutputElement.innerHTML = resumeOutput;
      makeeditable();
    } else {
      console.log("The Resume Output Element are Missing.");
    }
  }
}

function makeeditable (){
  const editableelements = document.querySelectorAll(".editable")
  editableelements.forEach(element => {
    element.addEventListener("click" , function(){
      const currentelement = element as HTMLElement;
      const currentValue = currentelement.textContent || "" ;


      if(currentelement.tagName === "P" || currentelement.tagName === "SPAN"){
        const Input = document.createElement("input")
        Input.type = "text"
        Input.value = currentValue
        Input.classList.add("editing-Input")

        Input.addEventListener("blur",function(){
          currentelement.textContent = Input.value
          currentelement.style.display = "inline"
          Input.remove()
        })





        currentelement.style.display = "none"
        currentelement.parentNode?.insertBefore(Input,currentelement)
        Input.focus()
      }
    })
  })
}