// called when input button is selected, calls functions to change css
$("input").click(function(){
     selectType("colors");
     selectType("activities");
     selectType("office");
     selectType("apparel");
 });

// changes CSS, called when an input button is selected
function selectType(type) {
    var selected = $(`input[name='${type}']:checked`);
    if (selected.length != 0) {
        unselected = $(`input[name='${type}']:not(:checked)`);
        selected.parent().parent().css({"background-color":"black","outline":"black solid 4px"});
        unselected.parent().parent().css({"background-color":"grey","outline":"none"});
        selected = null;
    }
}

// Suggested in lab2 assignment
$('#result-btn').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approachf would be to just choose the most common option - seems reasonable

    if (choices.length == 4){
        console.log(mode(choices));
        $("#full-phrase").text(getResultArray(mode(choices))[0]);
        $("#result-img").attr("src", getResultArray(mode(choices))[1]);
    } else{
        console.log("?s answered: " + choices.length);
        console.log(getResultArray("error"));
        $("#full-phrase").text(getResultArray("error")[0]);
    }
});

/*
 * Function to return full name & image
 * - takes keyword as input
 */
function getResultArray(choice) {
    let resultarray = [];
    var fullphrase;
    var img;
    console.log(choice);
    
    switch(choice){
        case "hanlon":
            fullphrase = "President Hanlon's Lawn";
            img = "https://th.bing.com/th?id=OIP.4rSZrp27bXiJZz8qde_LSQHaEo&pid=Api&rs=1";
            break;
        case "dartmouth-hall":
            fullphrase = "Dartmouth Hall";
            img = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dartmouth_College_campus_2007-06-23_Dartmouth_Hall_02.JPG/1920px-Dartmouth_College_campus_2007-06-23_Dartmouth_Hall_02.JPG";
            break;
        case "50yard":
            fullphrase = "The 50 yard line";
            img = "http://megasportsnews.com/wp-content/uploads/2014/10/Football-Field-50-yard-line-courtesy-Free-Extras.com_2.jpg";
            break;
        case "hop":
            fullphrase = "The Top of the Hop";
            img = "https://www.dartmouthalumnimagazine.com/sites/default/files/styles/photo_gallery/public/top-of-the-hop.jpg?itok=cHltOX4Q";
            break;

        case "bema":
            fullphrase = "BEMA";
            img = "http://farm8.staticflickr.com/7239/7178316688_fcde63a72e_z.jpg";
            break;
        case "stacks":
            fullphrase = "The Stacks";
            img = "https://www.library.dartmouth.edu/sites/default/files/media-images/Stacks.jpg";
            break;

        case "green":
            fullphrase = "The Green";
            img = "https://news.dartmouth.edu/sites/dart_news.prod/files/styles/slide/public/news/images/green-fall-orienteering-810.jpg?itok=z-ibrncS";
            break;

        case "error":
            fullphrase = "Please answer all questions!";
            img = null;
            break;
        default:
            fullphrase = "Something went wrong - please try again!";
            img = null;
            break;
    }
    resultarray[0] = fullphrase;
    resultarray[1] = img;
    return resultarray;
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

/*
 * Modal functionality
 * adapted from https://www.w3schools.com/howto/howto_css_modals.asp
 */ 
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