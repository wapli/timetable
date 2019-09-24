upEventEles=document.querySelectorAll('[id^=js-upevent]');

upEventEles.forEach((upEveEle)=>{//すべてのid=js-upeventから始まるものに以下のものを実行

    let upPageNum;//この宣言は移動不可

    switch(upEveEle.id.length){//page数を取得
        case 11:
            upPageNum=parseInt(upEveEle.id[10],10);
            break;
        default:
            upPageNum=parseInt(upEveEle.id[10],10)*10+parseInt(upEveEle.id[11],10);
    }
    

    //吹き出しボタンを出現させる
    upEveEle.addEventListener("click",()=>{
        document.getElementById("js-upBalButTr"+upPageNum).style.display="";
        
        //吹き出し以外を触ると消えるように
        balButFlag=true;
        allEles.addEventListener("click",hideEle,true);//hideEle()とすると実行されてそれで終わりになるからつけちゃダメ（callback関数として登録されない？）

    });

    //「詳細」を押した際のイベント
    document.getElementById("js-upBalButLeft"+upPageNum).addEventListener("click",()=>{
        SelectPage(upPageNum);
        document.getElementById("js-upBalButTr"+upPageNum).style.display="none";
    });

    //お気に入りから削除できるようにする
    document.getElementById("js-upBalButRight"+upPageNum).addEventListener("click",()=>{
        hide(upPageNum);
        check[upPageNum]=0;
        balRightEles[upPageNum].textContent="お気に入り";
        balRightEles[upPageNum].style.width="100px";
    });
    
});