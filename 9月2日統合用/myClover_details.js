var eventObje=document.querySelectorAll('[id^=js-event]');
var upEventObje=document.querySelectorAll('[id^=js-upevent]');
var detailLists=document.querySelectorAll('[id^=details]'); 

/**
 * 
 * @param {Int} pageNum 押された場所の番号　-1ならすべてのstyle.displayをnoneに。
 */
function SelectPage(pageNum){
    console.log("SelectPage関数が動きました");
    console.log("pagenum:"+pageNum.toString());
    if(pageNum!=-1){
        detailLists[pageNum].style.display='block';
    }else{
        detailLists.forEach((currentValue)=>{
            currentValue.style.display='none';
        })
    }
}

eventObje.forEach((eveEle)=>{
    eveEle.addEventListener("click",(event)=>{
        let eventId_details=event.target.id;
        let pageNum;
        switch(eventId_details.indexOf("js-event")){//押したとこの番号を取得　例えばjs-event1なら1を取得
            case 0://idがjs-eventから始まる
                if(eventId_details.length===9){
                    pageNum=parseInt(eventId_details[8],10);
                }else{
                    pageNum=parseInt(eventId_details[8],10)*10+parseInt(eventId_details[9],10);
                }
                break;
            default://idがperformerから始まる
            if(eventId_details.length===10){
                pageNum=parseInt(eventId_details[9],10);
            }else{
                pageNum=parseInt(eventId_details[9],10)*10+parseInt(eventId_details[10],10);
            }
                
        }
        SelectPage(pageNum);

    })
})


upEventObje.forEach((upEveEle)=>{//すべてのid=js-upeventから始まるものに以下のものを実行

    upEveEle.addEventListener("click",(event)=>{
        let upEventId_details=event.target.id;
        let upPageNum;
        //毎回宣言するのは気持ち悪いですが、ブロックスコープということでここに宣言します。
        switch(upEventId_details.indexOf("js-upevent")){//押したとこの番号を取得　例えばjs-upevent1なら1を取得
            case 0://idがjs-upeventから始まる
                if(upEventId_details.length===11){
                    upPageNum=parseInt(upEventId_details[10],10);
                }else{
                    upPageNum=parseInt(upEventId_details[10],10)*10+parseInt(upEventId_details[11],10);
                }
                break;
            default://idがupperformerから始まる
            if(upEventId_details.length===12){
                upPageNum=parseInt(upEventId_details[11],10);
            }else{
                upPageNum=parseInt(upEventId_details[11],10)*10+parseInt(upEventId_details[12],10);
            }
                
        }
        SelectPage(upPageNum);

    })
})