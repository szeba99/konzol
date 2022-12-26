const dark_div = document.getElementById("dark_div");
dark_div.scrollLeft -= 10000;
document.onkeydown = checkKey;
document.body.style.animation = "opacity_up 2s";

/*
__________________________________________
///////AUDIO

*/

var click = new Audio('click.mp3');

/*
__________________________________________
*/

var position = 0;
var min_position = 0;
var max_position = 2;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') 
    {
        // up arrow
    }
    else if (e.keyCode == '40') 
    {
        // down arrow
    }
    else if (e.keyCode == '37') 
    {
       // left arrow
       if (position > min_position && position < max_position+1)
        {
            dark_div.scrollLeft -= 300;
            position -= 1;
            click.play();
        }

    }
    else if (e.keyCode == '39') 
    {
       // right arrow
       if (position > min_position-1 && position < max_position)
       {
           dark_div.scrollLeft += 300;
           position += 1;
           click.play();
       }

    }

    else if (e.keyCode == '13') 
    {

        if (position == 0)
        {
            window.open("https://wadcmd.com/doom1.97be5d85.wad");
        }

        if (position == 1)
        {
            window.open("https://www.youtube.com");
        }

        if (position == 2)
        {
            window.open("https://jellymar.io/");
        }

        

    }

}



var buttons = document.getElementsByClassName
/* nem nem... egyesével kell definiálni a gombokat
listába kell őket rakni, hogy mindig a következő világítódjon ki
azért kell egyesével definiálni őket, mert mindnél egyéni, hogy mit is csinál
*/