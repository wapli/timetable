var button=document.querySelectorAll('[id^=fav_button]');//idがfav_buttonであるものをget
var num;    //お気に入りボタンの番号
var eventId;    //お気に入りボタンの番号　引数
var str=[];     //表示する文字の配列
var table=[];   //イベントごとのidを格納する配列
var table2=[];
var check=[];   //お気に入りしているか、していないかの判断。1はお気に入り済み。０は未登録.
var eventnum;//buttonに追加したeventの関数で使用


var table=document.querySelectorAll("[id^=line]");
var momtable=document.querySelectorAll("[id^=t]");


for(var i=0;i<table.length;i++){
    
    str[i]=table[i].innerHTML;
    check[i]=0;
        
}

button.forEach((button)=>{
    button.addEventListener("click",function(){

        console.log("ピン止めしたり外したりする関数が実行されました")
        eventId=event.target.id;
        
        switch(eventId.length){//targetによるidの違いを吸収、最後の数字をeventnumに格納
            case 5:
                eventnum=parseInt(eventId[4],10);
                break;
            case 6:
                eventnum=parseInt(eventId[4],10)*10+parseInt(eventId[5],10);
                break;
            case 11:
                eventnum=parseInt(eventId[10],10);
                break;
            case 12:
                eventnum=parseInt(eventId[10],10)*10+parseInt(eventId[11],10);
                break;
            default:
                console.log("eventIdの数字部分を取得できませんでした");
                return;
                
        }
        

        if(check[eventnum]==0){
            
            check[eventnum]=1;
            sort(eventnum);

        }else{
            
            hide(eventnum);
            check[eventnum]=0;
        
        }
    
    
    });
    
});


function sort(num){//上にピン止めする関数です　num.toString

    console.log("sort関数が実行されました");
    document.querySelector('#t'+num.toString()).insertAdjacentHTML('afterbegin',str[num.toString()]);
    momtable[num.toString()].setAttribute("border","3");//id:t0のtableタグの属性borderの値を変更

    document.getElementById('fav_button'+num.toString()).setAttribute("id","upfav_button"+num.toString());
    //上に持って行ったやつのid:fav_buttonのやつをupfav_buttonに変更
    /*この動作は、同名のidが複数ある場合にhtmlファイルのうち一番上にあるidに対して反応する仕様を利用しています
    本来は同名のidになることを避けるべきですが、今のところこの方法しか思いつきませんでした。*/
    document.getElementById('upfav_button'+num.toString()).addEventListener("click",function(){hide(num.toString());},false);
    
}


function hide(num){

    console.log("hide関数が実行されました");
    document.querySelector('#t'+num.toString()).innerHTML="";
    momtable[num.toString()].setAttribute("border","0");
}
/*
・前回のミーティングの時のtimetable_ver2からの変更（覚えている限り）

(mainstage_val2.html):htmlのbuttonタグにidを追加。
1:queryselectorallの対象をbuttonのidに。(ボタン全体に対してaddeven)
31:上にピン止めするfunction内のevent.targetはクリックする場所によって
   値が変わるのでそれに対応するためswitch文を追加
70:sort関数を簡潔に。
83:hide関数を簡潔に。hide関数が実装されたことによりボタンを押しても複数回その要素が表示されるバグもなくなった
なんだったら時間順ですし、翔先輩さすがっす！！


・気になっていること
jsのidについて調べているときに頻繁に「id名は一つだけ」というものが出てきました。
今はhtmlの要素をまるまる上のテーブルに持って行っていますがidを変えたほうがいいのかもしれません
おそらくこれが原因でcssが変な対応をしているんだと思います

今スマホ移行のことを考えるのは順番が違うと思いますが、event.targetのところとか対応するか心配です
変更を少し覚悟してます（？）


*/

//メモ　htmlファイルはphpまたは外部ファイル読み込みでめっちゃきれいにできるな
//優先度は劇低い、phpは環境ガガガ