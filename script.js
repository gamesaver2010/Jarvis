document.getElementById("whole").innerHTML = ' <div id="leftmenu"> <div id="date_time"> <div id="date" class="semi_arc e4"> <div class="semi_arc_2 e4_1"> <div class="counterspin4"></div> </div> <div style="font-size: 40px; margin-top: 25px;" id="dayofmoth">04</div> <div style="font-size: 25px;" id="month">January</div> </div> <div id="time" class="arc e1"> <div style="font-size: 23px; margin-left: -10px; margin-top: 23px;" id="timeother">23:41</div> <div style="font-size: 15px; margin-left: 40px; margin-top: -30px; display; inline;color:transparent">31</div> <div style="font-size: 17px; margin-top: 10px;" id="veganteacher">Tuesday</div> </div> </div> <p class="title">Performance</p> <div class="hline title_underline"></div> <span class="menuitem entypo-gauge" style="font-size: 30px; margin-left: 10px;"> <p id="cpu" class="caption" style="font-size: 20px;">CPU Usage: 19%</p> </span> <br/> <span class="menuitem entypo-chart-area" style="font-size: 30px; margin-left: 10px;"> <p id="ram" class="caption" style="font-size: 20px;">Physical Memory: 28%</p> </span> <br/> <span class="menuitem entypo-chart-pie" style="font-size: 30px; margin-left: 10px;"> <p id="proc" class="caption" style="font-size: 20px;">Processes: 73</p> </span> <p class="title">Shortcuts</p> <div class="hline title,,_underline"></div> <div class="menu"> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">User</p> </button> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">Documents</p> </button> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">Computer</p> </button> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">Control Panel</p> </button> <hr style="border-color: transparent; margin: 0;"/> <div class="hline" style="margin-top: 5px; margin-bottom: 5px;"></div> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">Custom Path 1</p> </button> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">Custom Path 2</p> </button> <button class="menuitem"> <span class="entypo-right-open"/> <p class="caption">Custom Path 3</p> </button> </div> <p class="title">Social</p> <div class="hline title_underline"></div> <div class="app_icon entypo-facebook-squared"></div> <div class="app_icon entypo-twitter"></div> <div class="app_icon entypo-gplus"></div> <div class="app_icon entypo-skype"></div> <div class="app_icon entypo-tumblr"></div> <div class="app_icon entypo-pinterest"></div> <div class="app_icon entypo-soundcloud"></div> <div class="app_icon entypo-stumbleupon"></div> </div><!-- Right Menu --><div id="rightmenu"> <p class="title" style="text-align: left; margin-left: 10px;">Notes</p> <div id="particle10" class="hline"></div> <div id="particle11" class="hline"></div> <div id="particle12" class="vline"></div> <textarea id="note_input" rows="12" cols="44">For the maximum viewing experience, please view this pen in full screen where the code is displayed to the side of the display. To Complete: - Right Menu (this side of the screen) - Make this note restricted to 11 rows - Fill in empty space below - Weather widget next to date/time - Place quick access taskbar down bottom - Fill in space at the top</textarea></div><!-- Arc Reactor --><div id="arc_container"> <div class="arc_reactor"> <div class="case_container"> <div class="e7"> <div class="semi_arc_3 e5_1"> <div class="semi_arc_3 e5_2"> <div class="semi_arc_3 e5_3"> <div class="semi_arc_3 e5_4"></div> </div> </div> </div> <div class="core2"></div> </div> </div> </div></div><!-- Particles --><!-- Left Menu Particles --><div id="didnotknow"><canvas id="particle1" width="20" height="500"></canvas><canvas id="particle1_1" width="40" height="510"></canvas> <canvas id="particle1_2" width="40" height="510"></canvas> <div id="particle3" class="vline"/><div id="particle4" class="vline"/><div id="particle5" class="vline"/><div id="particle6" class="vline"/><div id="particle7" class="vline"/><div id="particle8" class="vline"/><div id="particle9" class="vline"/></div>'

var canvas = document.getElementById('particle1');var context = canvas.getContext('2d');context.beginPath();context.moveTo(0, 0);context.lineTo(0, 70);context.lineTo(10, 85);context.lineTo(10, 135);context.lineTo(0, 150);context.lineTo(0, 480);context.lineTo(5, 490);context.lineTo(10, 490);context.lineTo(20, 490);context.lineTo(20, 250);context.lineTo(10, 235);context.lineTo(10, 185);context.lineTo(20, 170);context.lineTo(20, 40);context.lineTo(10, 30);context.lineTo(10, 20);context.closePath();context.lineWidth = 1;context.fillStyle = 'rgba(2,254,255,0.3)';context.fill();context.strokeStyle = 'transparent';context.stroke();var canvas = document.getElementById('particle1_1');var context = canvas.getContext('2d');context.beginPath();context.lineTo(0, 0);context.lineTo(10, 15);context.lineTo(10, 65);context.lineTo(0, 80);context.lineTo(0, 0);context.closePath();context.lineWidth = 1;context.fillStyle = 'rgba(2,254,255,0.3)';context.fill();context.strokeStyle = 'transparent';context.stroke();var canvas = document.getElementById('particle1_2');var context = canvas.getContext('2d');context.beginPath();context.lineTo(10, 80);context.lineTo(0, 65);context.lineTo(0, 15);context.lineTo(10, 0);context.lineTo(10, 80);context.closePath();context.lineWidth = 1;context.fillStyle = 'rgba(2,254,255,0.3)';context.fill();context.strokeStyle = 'transparent';context.stroke();



function display_ct7() {
var x = new Date()
var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
hours = x.getHours( ) % 12;
hours = hours ? hours : 12;
hours=hours.toString().length==1? 0+hours.toString() : hours;

var minutes=x.getMinutes().toString()
minutes=minutes.length==1 ? 0+minutes : minutes;

var seconds=x.getSeconds().toString()
seconds=seconds.length==1 ? 0+seconds : seconds;

var month=(x.getMonth() +1).toString();
month=month.length==1 ? 0+month : month;

var dt=x.getDate().toString();
dt=dt.length==1 ? 0+dt : dt;

var x1=month + "/" + dt + "/" + x.getFullYear(); 
x1 = hours + ":" +  minutes;
	document.getElementById("timeother").innerHTML = x1;
display_c7();
 }
 function display_c7(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct7()',refresh)
}
display_c7()


const date = new Date();


// 👇️ Sat
document.getElementById("veganteacher").innerHTML = 
  date.toLocaleDateString('en-US', {
    weekday: 'long',
  })




var otherdate = date.getMonth() // (January gives 0)
// expected output: 6

if (otherdate = 5){
	document.getElementById("month").innerHTML = "June"
} else if (otherdate = 6){
	document.getElementById("month").innerHTML = "July"
} else if (otherdate = 7){
	document.getElementById("month").innerHTML = "August"
} else if (otherdate = 8){
	document.getElementById("month").innerHTML = "September"
} else if (otherdate = 9){
	document.getElementById("month").innerHTML = "October"
} else if (otherdate = 10){
	document.getElementById("month").innerHTML = "November"
} else if (otherdate = 11){
	document.getElementById("month").innerHTML = "December"
} else if (otherdate = 0){
	document.getElementById("month").innerHTML = "January"
} else if (otherdate = 1){
	document.getElementById("month").innerHTML = "February"
} else if (otherdate = 2){
	document.getElementById("month").innerHTML = "March"
} else if (otherdate = 3){
	document.getElementById("month").innerHTML = "April"
} else if (otherdate = 4){
	document.getElementById("month").innerHTML = "May"
}

document.getElementById("dayofmoth").innerHTML = date.getDate()

function battery(){
navigator.getBattery().then(function(battery) {

    var level = battery.level * 100 + "%";
document.getElementById("cpu").innerHTML = "Bettery: " + level;
});
	var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('battery()',refresh)
}
battery()
const memory = navigator.deviceMemory
document.getElementById("ram").innerHTML = "Memory: " + memory + " ram";

	if (navigator.cookieEnabled = true){
		document.getElementById("proc").innerHTML = "Cookies: Enabled";
	} else if (navigator.cookieEnabled = false){
		document.getElementById("proc").innerHTML = "Cookies: Not Enabled";
	}
