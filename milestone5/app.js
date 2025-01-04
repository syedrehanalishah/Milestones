var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experince = document.getElementById('experince').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experince: experince,
        skills: skills
    };
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable And Dynamically Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable = \"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span contenteditable = \"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contenteditable = \"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(education, "</p>\n\n     <h3>Experince</h3>\n    <p contenteditable = \"true\">").concat(experince, "</p>\n\n     <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n");
    // display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the sharable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experince').value = resumeData.experince;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
