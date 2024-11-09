// Selecting HTML elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const resumePreview = document.getElementById('resumePreview') as HTMLElement;
const submitButton = document.getElementById('submitBtn') as HTMLButtonElement;

// Function to update the resume preview
function updateResumePreview(): void {
  resumePreview.innerHTML = `
    <h3>${nameInput.value || 'Your Name'}</h3>
    <p><strong>Email:</strong> ${emailInput.value || 'example@email.com'}</p>
    <p><strong>Phone:</strong> ${phoneInput.value || '123-456-7890'}</p>
    <h4>Experience</h4>
    <p>${experienceInput.value || 'Your work experience here'}</p>
    <h4>Skills</h4>
    <p>${skillsInput.value || 'List your skills here'}</p>
  `;
}

// Function to handle form submission
function handleSubmit(): void {
  const resumeData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    experience: experienceInput.value,
    skills: skillsInput.value
  };

  // Here, we simply log the data to the console (or you can use alert to display it)
  console.log("Submitted Resume Data:", resumeData);
  alert(`Resume Submitted!\n\nName: ${resumeData.name}\nEmail: ${resumeData.email}\nPhone: ${resumeData.phone}\nExperience: ${resumeData.experience}\nSkills: ${resumeData.skills}`);
}

// Adding event listeners
[nameInput, emailInput, phoneInput, experienceInput, skillsInput].forEach((input) => {
  input.addEventListener('input', updateResumePreview);
});
submitButton.addEventListener('click', handleSubmit); // Submit button event listener

// Initialize preview with default values
updateResumePreview();
