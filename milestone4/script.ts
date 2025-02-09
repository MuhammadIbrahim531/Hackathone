// get refrences to the form and display area

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

//  Handle form submission
form.addEventListener("submit",(event:Event)=>{
    event.preventDefault(); // prevent page reload

    // collect input values
    const name=(document.getElementById("name") as HTMLInputElement).value
    const email=(document.getElementById("email") as HTMLInputElement).value
    const phone=(document.getElementById("phone") as HTMLInputElement).value
    const education=(document.getElementById("education") as HTMLInputElement).value
    const experience=(document.getElementById("experience") as HTMLInputElement).value
    const skills=(document.getElementById("skills") as HTMLInputElement).value

    // genarate the resume content dynamically

    const resumeHTML = `
    
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>


    <h3>Education:</h3>
    <p contenteditable="true">${education}</span></p>

        <h3>Eexperience:</h3>
    <p contenteditable="true">${experience}</span></p>

    
     <h3>Skills:</h3>
     <p contenteditable="true">${skills}</span></p>

    `;

    // Display the Generate Resume
    if (resumeDisplayElement) {

        resumeDisplayElement.innerHTML = resumeHTML;
    
    }else{
        console.error("The resume display element is missing");
    }

});