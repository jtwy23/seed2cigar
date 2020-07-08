function sendMail(contactForm) {
    emailjs.send("gmail", "seed2cigar", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("contact_form").reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}