var eventObje=document.getElementsByClassName('event');
var detailLists=document.querySelectorAll('[id^=details');
/**詳細ページの表示/非表示を行う
 * 
 * @param {Int} pageNum 押された場所の番号　-1ならすべてのstyle.displayをnoneに。
 */
const SelectPage=(pageNum)=>{
    if(pageNum!=-1){
        detailLists[pageNum].style.display='block';
    }else{
        detailLists.forEach((currentValue)=>{
            currentValue.style.display='none';
        })
    }
}


for(let i=0;i<eventObje.length;i++){
    
    eventObje[i].addEventListener('click',()=>{
        SelectPage(i);
    })
}