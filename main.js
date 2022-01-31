
 var songs = [
    "Do Gallan - Neha Kakkar.mp3",
    "Rabb_Wangu_Sikander_2_1.mp3",
     "Udaarian.mp3",
     "Ik_Saal-Mr_Mrs_Narula-(jattZone.com).mp3",
    ];

   
function sound(){
document.getElementById("audio").play();
}
function stop(){
    document.getElementById("audio").pause();
    }
   
    var i=0;
    function next(){
        document.getElementById("audio").src= songs[i];
        i++;
    }
    function prev(){
        document.getElementById("audio").src= songs[i];
        i--;
    }
    function onload(){
        document.getElementById("audio").play();
    }
   