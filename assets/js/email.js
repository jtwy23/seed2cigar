// Sending email function
function sendMail(contact_form) {
    emailjs.send("gmail", "seed2cigar", {
        "from_name": contact_form.from_name.value,
        "from_email": contact_form.from_email.value,
        "ask_question": contact_form.ask_question.value
    })
    .then(
        function(response) {
            document.getElementById("contact_form").reset();
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}

// Get the modal box
var modal = document.getElementById("myModal");

// Get the button that opens the modal box
var btn = document.getElementById("modalBox");

// Get the <span> element that closes the modal box
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal box
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal box
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal box, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

