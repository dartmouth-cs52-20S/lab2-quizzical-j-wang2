
// Suggested in lab2 assignment
$('#result-btn').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable

    console.log(mode(choices));
    console.log(getResultSentence(mode(choices)))
    $("#full-phrase").text(getResultSentence(mode(choices)));
    $("#result-img").html()
});

function getResultSentence(choice) {
    console.log("choice" + choice);
    var fullphrase;
    
    switch(choice){
        case "hanlon":
            fullphrase = "President Hanlon's Lawn";
            break;
        case "dartmouth-hall":
            fullphrase = "Dartmouth Hall";
            break;
        case "50yard":
            fullphrase = "The 50 yard line";
            break;
        case "hop":
            fullphrase = "The Top of the Hop";
            break;

        case "bema":
            fullphrase = "BEMA";
            break;
        case "stacks":
            fullphrase = "The Stacks";
            break;

        case "green":
            fullphrase = "The Green";
            break;

        default:
            fullphrase = "Something went wrong - please try again!";
            break;
    }
    return fullphrase;
}


// adapted from https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
// method returns the most common element in an array
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

// 
// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("result-modal");

// Get the button that opens the modal
var btn = document.getElementById("result-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}