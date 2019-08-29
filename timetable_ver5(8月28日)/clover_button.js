var star=document.getElementsByClassName('star');
var favorite=document.getElementsByClassName('fav_button');
var count=[];
for (let j = 0; j<favorite.length; j++) {
    count[j] = 0;
  }
  

function changesytle(cssid,cssfile) {
    document.getElementById(cssid).href = cssfile;
 }//色を変えるための関数です
 for(let i=0;i<favorite.length;i++){
    favorite[i].addEventListener('click', function(e) {//クラスでボタンを判断
       console.log(star[i]);
        console.log(i);
        favorite_change(star[i],i);


})}


 
function favorite_change(star,i){
    console.log(count[i]);
    console.log(star);
    if(count[i]===0){            
        star.style.color='#ff0000';
        count[i]=1;
    }
    else{
        star.style.color='#FFFFFF';
        count[i]=0;
    }
}

