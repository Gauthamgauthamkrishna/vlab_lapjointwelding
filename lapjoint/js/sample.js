function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}


//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

//stop blinking arrow
function myStopFunction()
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}


//function to move to next canvas
function navNext()
{
	for(temp=0;temp<=6;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//magic function for animation in each canvas
function magic() {
  if(simsubscreennum == 1) {
    //Write code for canvas 1 animations

    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(550,400,-90);//specify the left top and deg of arrow
    document.getElementById("grinder").onclick = function() {
        document.getElementById("grinder").onclick = " "//To stop further click on pattern
        myStopFunction();//stops blinking arrow
        document.getElementById("grinder").style.animation = "movePattern 2.2s ease-out forwards ";//Since it runs for 1.2s
        setTimeout(function() {
            document.getElementById("grinder").style.visibility = "hidden";
            document.getElementById("brush").style.visibility = "visible";
            document.getElementById("brush").style.animation = "movebrush 1.2s ease-out forwards ";
            setTimeout(function() {
            document.getElementById("brush").style.visibility = "hidden";
            document.getElementById("nextButton").style.visibility = "visible";
        },1250);
    },3150)
  }

}  else if(simsubscreennum == 2) {

  myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
  animateArrowATPosition(210,250,-90);//specify the left top and deg of arrow
  document.getElementById("w2").onclick = function() {
    document.getElementById("w2").onclick =" "
    myStopFunction();
    document.getElementById("w1").style.animation = "movew1 1.2s ease-out forwards";
    document.getElementById("w2").style.animation = "movew2 1.2s   ease-out forwards";
      setTimeout(function() {
        document.getElementById("w1").style.visibility = "hidden";
        document.getElementById("w2").style.visibility = "hidden";
        document.getElementById("lj").style.visibility = "visible";
        setTimeout(function() {
           document.getElementById("nextButton").style.visibility = "visible";
          },1250);
       },250)
     }
   }else if(simsubscreennum == 3) {
       document.getElementById("lj").style.visibility = "hidden";
       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
       animateArrowATPosition(630,330,-90);//specify the left top and deg of arrow
       document.getElementById("mac").onclick = function() {
         document.getElementById("mac").onclick = " "
         myStopFunction();

              document.getElementById("knob").style.visibility = "visible";
              document.getElementById("dial").style.visibility = "visible";
              document.getElementById("dial").style.animation = "movedial 1.2s ease-out forwards";

              setTimeout(function() {
                document.getElementById("knob").style.visibility = "hidden";
                document.getElementById("dial").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
           },1250);
       }

  } else if(simsubscreennum == 4) {
      document.getElementById("lj").style.visibility = "hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(610,250,-90);//specify the left top and deg of arrow
      document.getElementById("electrode").onclick = function() {
        document.getElementById("electrode").onclick = " "
        myStopFunction();

             document.getElementById("spark").style.visibility = "visible";
             document.getElementById("spark").style.animation = "movespark 2.4s linear forwards";
             document.getElementById("electrode").style.animation = "moveelectrode 5.3s linear forwards";
             document.getElementById("weld").style.animation = "moveweld 2.5s linear forwards";

                setTimeout(function() {
                document.getElementById("nextButton").style.visibility = "visible";
          },1250);

      }

  }else if(simsubscreennum == 5) {

      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(610,210,-90);//specify the left top and deg of arrow
      document.getElementById("hammer").onclick = function() {
        document.getElementById("hammer").onclick = " "
        myStopFunction();
        document.getElementById("hammer").style.animation = "movehammer 5.3s linear forwards";
             setTimeout(function() {
               document.getElementById("dust").style.visibility = "hidden";


        },1500);


      }
    }
  }
