var i=0;
var judge=0;
var elementmain=document.getElementsByClassName("maintable");
var elementsub=document.getElementsByClassName("subtable");
let mainPinned=document.getElementsByClassName("mainPinned");
let subPinned=document.getElementsByClassName("subPinned");

function change_stage(){
        if (judge==0){
            
            for( var i=0;i<elementsub.length;i++){
                elementsub[i].style.display = "block";
            }
            for( var i=0;i<elementmain.length;i++){
                elementmain[i].style.display = "none";
            }
            subPinned[0].style.display="block";
            mainPinned[0].style.display="none";
            judge=1;
        }
    else{
            for( var i=0;i<elementmain.length;i++){
                elementmain[i].style.display = "block";
            }
            for( var i=0;i<elementsub.length;i++){
                elementsub[i].style.display = "none";
            }
            mainPinned[0].style.display="block";
            subPinned[0].style.display="none";
            judge=0;
        }
}
for( var i=0;i<elementsub.length;i++){
    elementsub[i].style.display = "none";
}

function changesytle(cssid,cssfile) {
document.getElementById(cssid).href = cssfile;
}
console.log(elementmain[0]);
/**
 * ここにメモした変更は後でHMTLのほうへ書いておく
 * ピン止めを囲むdivの要素を取得
 * それぞれblock,noneにする
 */