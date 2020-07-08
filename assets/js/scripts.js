// Start of Accordion 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// End of Accordion

// Start of Alphabetical Nav List
let createArrayAtoZ = _ => {
            return Array 
               .apply(null, {length: 26}) 
               .map((x, i) => String.fromCharCode(65 + i));
        }

        let jumptoAnchor = anchor => {
            window.location.href = "#" + anchor;
        }

        let createNavigationList = _ => {
            const abcChars = createArrayAtoZ();
            const navigationEntries = abcChars.reduce(createDivForCharElement, ''); 
            $('#nav').append(navigationEntries);

            const lettersActive = ['A', 'C', 'G', 'M', 'X'];
            lettersActive.forEach(letter => { 
               changeItemState(letter); 
               addListEntries(letter); 
            });
        }

        let changeItemState = character => {
            const characterElement = $('#nav').find('.CharacterElement[data-filter="' + character + '"]');
            $(characterElement).click(() => jumptoAnchor(character));
            characterElement.removeClass('Inactive');
        }

        let createDivForCharElement = (block, charToAdd) => { 
            return block + "<div id='CharacterElement' class='CharacterElement Inactive' data-filter='" + charToAdd + "'>" + charToAdd + "</div>"; 
        }

        let addListEntries = letter => {
            $('#AppComponent').append("<div class='AppElement' id='" + letter + "'>" + letter + "</div>");
        }
// End of Alphabetical Nav List