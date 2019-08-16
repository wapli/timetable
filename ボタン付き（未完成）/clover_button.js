var count=0;
var a=document.getElementsByClassName('favorite');
function changesytle(cssid,cssfile) {
    document.getElementById(cssid).href = cssfile;
 }//色を変えるための関数です
 

function favorite_change(
){
    var element=document.getElementById('star');
    console.log(element);
    if(count===0){            
        element.style.color='#ff0000'
        count=1;
    }
    else{
        element.style.color='#FFFFFF';
        count=0;
    }
}

