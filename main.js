canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

nasa_mars_image_array = ["mars 1.jpg","mars 2.jpg","mars 3.jpg","mars 4.jpg"];

random_number = Math.floor(Math.random() * 4);

console.log(random number);
rover_widht = 100;
rover_height = 90;

background_image = nasa_mars_image_array[random_number];
console.log("background_image =" + background_image);
rover_image = "rover.png";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() 
{ 
    background_imgTag = new Image(); //defining a variable with a 
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
    background_imgTag.src = background_image; // load image rover_imgTag = new Image(); //defining a variable with a new image 
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable 
    rover_imgTag.src = rover_image; // load image
 }
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.widht, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image, rover_x, rover_y, rover_widht, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37');
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39');
    {
        right();
        console.log("right");
    }
}
    function up() 
    { if(rover_y >=0) 
        { rover_y = rover_y - 10; console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } } 

    function down() 
    { if(rover_y <=500) 
        { rover_y =rover_y+ 10; console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } } 

    function left() 
    { if(rover_x >= 0) 
        { rover_x =rover_x - 10; console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } } 
        
    function right() 
    { if(rover_x <= 700) 
        { rover_x =rover_x + 10; console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }