window.onload = function() {
    const name = "John Doe";
    const email = "john.doe@example.com";
    const phone = "+1234567890";
    const profilePic = "profile.jpg"; // image source
  
    // Set personal details
    document.getElementById("name")!.textContent = `Name: ${name}`;
    document.getElementById("email")!.textContent = `Email: ${email}`;
    document.getElementById("phone")!.textContent = `Phone: ${phone}`;
    document.getElementById("profilePic")!.setAttribute("src", profilePic);
  
    // Add experience and education dynamically
    const experiences = ["Software Developer at ABC Corp", "Intern at XYZ Ltd"];
    const education = ["B.Sc. in Computer Science from ABC University"];
  
    const experienceList = document.getElementById("experienceList")!;
    experiences.forEach(experience => {
      const li = document.createElement("li");
      li.textContent = experience;
      experienceList.appendChild(li);
    });
  
    const educationList = document.getElementById("educationList")!;
    education.forEach(edu => {
      const li = document.createElement("li");
      li.textContent = edu;
      educationList.appendChild(li);
    });
  };
  