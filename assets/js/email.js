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
            modal.style.display = "block";
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

// Get the <span> element that closes the modal box
var span = document.getElementsByClassName("close")[0];

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

// test
const form = document.getElementById("contact");
const fname = document.getElementById("fname");
const email = document.getElementById("email")
const ask_question = document.getElementById("ask_question");
const errorMessage = document.getElementById ("errorMessage");

form.addEventListener("submit", (e) => {

  let messages = []

  if (fname.value === "" || fname.value == null) {
    messages.push("A name is required")
  };

  if (email.value === "" || email.value == null) {
      messages.push("A valid email address is required")
  };

  if (ask_question.value === "" || ask_question == null) {
      messages.push("You must enter valid text")
  };

  if (messages.length < 0) {
    e.preventDefault()
    errorMessage.innerText = messages.join(', ')
  };

});




// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
