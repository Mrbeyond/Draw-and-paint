rec=false; crc=false; up=false; ryt=false;lef=false; don=false; lin=false;
var cav=document.getElementById('mycanvas');
var draw=cav.getContext('2d');

function loader(){if (screen.width<450) {cav.width=screen.width} }

  function downn(event) {
   x = event.offsetX;
   y = event.offsetY;
   p.innerHTML= " Mousedown point is: "+x + " ," + y ;
  console.log( x + " ," + y ); }
 
function upp(event) {
   w = event.offsetX;
   h = event.offsetY;
    p.innerHTML= "Mousedown point is: "+x+", "+y+" &nbsp, Mouseup point is: "+w +", " +h ;
   console.log( w + ", " + h );
   draw.lineWidth=3;
if (ryt){ cright()};
if (don){ cdown()};
if (crc){ circ()};
 if (rec){ rect()};
if (lin){ line()};
if (up){ cup()};
if (lef){ cleft()}; }

function line(){
draw.strokeStyle = color.value;
draw.beginPath();
draw.moveTo(x,y);
draw.lineTo(w,h);
draw.stroke(); }

function circ(){
draw.strokeStyle = color.value;
d= Math.sqrt( ((w-x)**2)+((h-y)**2))
draw.beginPath();
draw.arc(((x+w)/2),((y+h)/2), (d/2),0, 2*Math.PI,false);
draw.stroke(); }

 function cup(){
 	draw.strokeStyle = color.value;
 	c1=y+100; c2=h+100;
 	if (y>346) { c1=c1-50; c2=c2-50;}
 	draw.beginPath();
 	draw.moveTo(x,y);
 	draw.bezierCurveTo(x,c1,w,c2,w,h) ;
 	draw.stroke();   }

 function cdown(){
 	draw.strokeStyle = color.value;
 	c1=y-100; c2=h-100;
 	if (y<100) { c1=c1+50; c2=c2+50;}
 	draw.beginPath();
 	draw.moveTo(x,y);
 	draw.bezierCurveTo(x,c1,w,c2,w,h) ;
 	draw.stroke();   }

 function cright(){
 	draw.strokeStyle = color.value;
 	c1=x-100; c2=w-100;
 	if (x<100){ c1=c1+50; c2=c2+50;}
 	draw.beginPath();
 	draw.moveTo(x,y);
 	draw.bezierCurveTo(c1,y,c2,h,w,h) ;
	draw.stroke();  }

function cleft(){
 	draw.strokeStyle = color.value;
 	c1=x+100; c2=w+100;
 	if (x>524){ c1=c1-50; c2=c2-50.}
 	draw.beginPath();
 	draw.moveTo(x,y);
 	draw.bezierCurveTo(c1,y,c2,h,w,h) ;
	draw.stroke();	}

function rect(){
draw.strokeStyle = color.value;
if (w>=x){  w= w-x} else{if(w<x){ w=-(x-w)}};
if (h>=y){  h= h-y} else{if(h<y){h=-(y-h)}};
draw.strokeRect(x,y,w,h); } 

function see(event) {
aa= event.offsetX;
bb= event.offsetY;
 demo.innerHTML = aa + " , " + bb;
}