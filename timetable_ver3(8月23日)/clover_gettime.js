var jikan= new Date();

var now_hour = jikan.getHours();
var now_minute = jikan.getMinutes();
var now_second = jikan.getSeconds();

console.log(now_hour+"時",+now_minute+"分"+now_second+"秒");

if(now_hour==9&&now_minute<30){
    var line=document.getElementById('line0');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==9&&now_minute>30){
    var line=document.getElementById('line1');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==10&&now_minute<30){
    var line=document.getElementById('line2');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==10&&now_minute>30){
    var line=document.getElementById('line3');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==11&&now_minute<30){
    var line=document.getElementById('line4');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==11&&now_minute>30){
    var line=document.getElementById('line5');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==12&&now_minute<30){
    var line=document.getElementById('line6');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==12&&now_minute>30){
    var line=document.getElementById('line7');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==13&&now_minute<30){
    var line=document.getElementById('line8');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==13&&now_minute>30){
    var line=document.getElementById('line9');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==14&&now_minute<30){
    var line=document.getElementById('line10');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==14&&now_minute>30){
    var line=document.getElementById('line11');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==15&&now_minute<30){
    var line=document.getElementById('line12');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==15&&now_minute>30){
    var line=document.getElementById('line13');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==16&&now_minute<30){
    var line=document.getElementById('line14');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==16&&now_minute>30){
    var line=document.getElementById('line15');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==17&&now_minute<30){
    var line=document.getElementById('line16');
    line.style.backgroundColor='#FFD700';
}
else if(now_hour==17&&now_minute>30&&now_minute<60){
    var line=document.getElementById('line17');
    line.style.backgroundColor='#FFD700';
}
else {
    document.write("クローバー祭は終了しました");
}

