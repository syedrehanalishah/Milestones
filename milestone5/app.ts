const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
let downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

form.addEventListener('submit',(event:Event) => {
    event.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value 
    const education = (document.getElementById('education') as HTMLInputElement).value 
    const experince = (document.getElementById('experince') as HTMLInputElement).value 
    const skills = (document.getElementById('skills') as HTMLInputElement).value 


    const resumeData = {
        name,
        email,
        phone,
        education,
        experince,
        skills
    };

    // generate the resume content dynamically

    const resumeHTML = `
    <h2><b>Editable And Dynamically Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable = "true">${name}</span></p>
     <p><b>Email:</b><span contenteditable = "true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable = "true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable = "true">${education}</p>

     <h3>Experince</h3>
    <p contenteditable = "true">${experince}</p>

     <h3>Skills</h3>
    <p contenteditable = "true">${skills}</p>
`;
// display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;

// Generate a shareable URL with the username only
const shareableURL= 
`${window.location.origin}?username=${encodeURIComponent(username)}`;

// Display the sharable link
shareableLinkContainer.style.display ='block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});

downloadPdfButton.addEventListener('click', ()=> {
    window.print();
});
window.addEventListener('DOMContentLoaded', () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    

    if(username){
        const savedResumeData = localStorage.getItem(username);
        if(savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value=username;
            (document.getElementById('name') as HTMLInputElement).value=resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value=resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value=resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value=resumeData.education;
            (document.getElementById('experince') as HTMLTextAreaElement).value=resumeData.experince;
            (document.getElementById('skills') as HTMLTextAreaElement).value=resumeData.skills;

        }
    }
})