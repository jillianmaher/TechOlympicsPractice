
//VARIABLES
var heading;
heading = document.getElementById('colourValue');
var buttons = document.getElementsByClassName('colourButton');

//MAIN
heading.innerHTML = 'Hello world!';
setButtonColour(buttons[0], 0, 0, 255);


//FUNCTIONS
function setButtonColour(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}
