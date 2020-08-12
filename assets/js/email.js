// Sending email function

// Variables
const form = document.getElementById("contact");
const fname = document.getElementById("fname");
const ask_question = document.getElementById("ask_question");
const errorMessage = document.getElementById ("errorMessage");

function sendMail(contact_form) {

  let messages = [];

  let nofname = (fname.value === null || fname.value === "");

// If the field is blank error message shows
  if (nofname) {
    messages.push("A name is required");
  }

// If the field has numbers error message shows
  if (!nofname) {
      if (!RegExp('^[a-zA-Z_ ]+\\S').test(fname.value))
      messages.push("Name cannot contain numbers or multiple spaces"); 
  }

  // ^[A-Za-z ]+$
  
  let noQuestion = (ask_question.value === null || ask_question.value === "");

// If the field is blank error message shows
  if (noQuestion) {
      messages.push("You must enter a message");
  }

// If the field is less than 10 characters error message shows
  if (!noQuestion) {
      if (ask_question.value.length < 25) {
          messages.push ("Message too short, minimum 25 characters");
      }
  }
  
// Clears previous error messages
    $("#errorMessage").empty();

  if (messages.length === 0) {
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

    } else {
        for (i = 0; i < messages.length; i++) {
            errorMessage.innerHTML = errorMessage.innerHTML + messages [i] + '<br>';
        }

    return false;
    }
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