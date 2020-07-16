function sendMail(contact_form) {
    debugger;
    emailjs.send("gmail", "seed2cigar", {
        "from_name": contact_form.from_name_value,
        "from_email": contact_form.from_email_value,
        "ask_question": contact_form.ask_question_value
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

