
var i=0;
var judge=0;
var elementmain=document.getElementsByClassName("maintable");
var elementsub=document.getElementsByClassName("subtable");

function change_stage(){
    if (judge==0){
        
for( var i=0;i<elementsub.length;i++){
    elementsub[i].style.display = "block";
}
for( var i=0;i<elementmain.length;i++){
    elementmain[i].style.display = "none";
}
judge=1;
}
else{
    location.reload(true);
for( var i=0;i<elementmain.length;i++){
    elementmain[i].style.display = "block";
}
for( var i=0;i<elementsub.length;i++){
    elementsub[i].style.display = "none";
}
judge=0;
}
}
for( var i=0;i<elementsub.length;i++){
    elementsub[i].style.display = "none";
}

function changesytle(cssid,cssfile) {
document.getElementById(cssid).href = cssfile;
}
