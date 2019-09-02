const star=document.getElementsByClassName('star');
const favEle=document.querySelectorAll('[id^=fav_button');
let colCount=[];//0:ピン止めされていない　1:ピン止めされてる
/**
 * 星の色を変える関数
 * @param {Int} index 
 */
const changeColor=(index)=>{
    if(colCount[index]===0){
        star[index].style.color='#ff0000';
        colCount[index]=1;
    }else{
        star[index].style.color='#FFFFFF';
        colCount[index]=0;
    }
}

for(let i=0;i<favEle.length;i++){colCount[i]=0;}

favEle.forEach((ele,index)=>{
    
    favEle[index].addEventListener('click',function(){
        changeColor(index);
    })
    
})