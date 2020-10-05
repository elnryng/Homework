import {section1Animation} from './section-1.js';
import{section2Animation} from './section-2.js'
// import {redBallAnimation} from './redBall.js';
// import {yellowBallAnimation} from './yellowBall.js';

section1Animation();
section2Animation();


var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick(){

    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);
