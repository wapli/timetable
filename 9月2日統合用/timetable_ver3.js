var button=document.querySelectorAll('[id^=fav_button]');//idがfav_buttonであるものをget
var num;    //お気に入りボタンの番号
var eventId;    //お気に入りボタンの番号　引数
var str=[];     //表示する文字の配列
var table=[];   //イベントごとのidを格納する配列
var check=[];   //お気に入りしているか、していないかの判断。1はお気に入り済み。０は未登録.
var eventnum;//buttonに追加したeventの関数で使用]
let tagEle;
/**
 * 任意の属性を持ったタグを作ります
 * 
 * @param {String} tag 作りたいタグ
 * @param  {...String} atr 属性,属性値　
 * @returns {HTMLElement} tagEle
 */
const creEle = (tag, ...atr) => {
    tagEle=document.createElement(tag);
    if(atr.length%2===0){
        for(let i=0;i<atr.length;i+=2){tagEle.setAttribute(atr[i],atr[i+1]);}
        return tagEle;
    }else{
        console.log("creEle関数の引数が正しくありません");
    }
};




var table=document.querySelectorAll("[id^=line]");
var momtable=document.querySelectorAll("[id^=t]");


for(var i=0;i<table.length;i++){
    
    str[i]=table[i].innerHTML;
    check[i]=0;
        
}

button.forEach((button)=>{
    button.addEventListener("click",function(event){

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

    /*
    document.querySelector('#t'+num.toString()).insertAdjacentHTML('afterbegin',str[num.toString()]);
    momtable[num.toString()].setAttribute("border","3");//id:t0のtableタグの属性borderの値を変更
    
    document.getElementById('fav_button'+num.toString()).setAttribute("id","upfav_button"+num.toString());
    */
    //上に持って行ったやつのid:fav_buttonのやつをupfav_buttonに変更
    /*この動作は、同名のidが複数ある場合にhtmlファイルのうち一番上にあるidに対して反応する仕様を利用しています
    本来は同名のidになることを避けるべきですが、今のところこの方法しか思いつきませんでした。*/
    /*
    document.getElementById('upfav_button'+num.toString()).addEventListener("click",function(){hide(num.toString()),check[num.toString()]=0;},false);

    document.getElementsByTagName('head')[0].appendChild(creEle("script","src","clover_details.js"));
    
    */

   const Stnum=num.toString();
   const uptableEle=document.getElementById('t'+Stnum);
   const headEle=document.getElementsByTagName('head')[0];

   uptableEle.insertAdjacentHTML('afterbegin',str[Stnum]);
   momtable[Stnum].setAttribute("border","3");
   document.getElementById('performer'+Stnum).setAttribute("id","upperformer"+Stnum);
   document.getElementById('fav_button'+Stnum).setAttribute("id","upfav_button"+Stnum);
   document.getElementById('star'+Stnum).setAttribute("id","upstar"+Stnum);
   document.getElementById('js-time'+Stnum).setAttribute("id","js-uptime"+Stnum);
   document.getElementById('js-event'+Stnum).setAttribute("id","js-upevent"+Stnum);
   document.getElementById("js-uptime"+Stnum).parentNode.className="line";
   document.getElementById("js-uptime"+Stnum).parentNode.id="upline"+Stnum;

    /**
     * 上のid:fav_buttonと同じで、同名のidが作成されるのを防ぐためidを変えました。
     *  この動作は、同名のidが複数ある場合にhtmlファイルのうち一番上にあるidに対して反応する仕様を利用しています
     * 本来は同名のidになることを避けるべきですが、今のところこの方法しか思いつきませんでした。
     * 
     * idなどが複雑になってきたので、ピン止めのtableに挿入される要素を書いておきます。
     * 例えば０番目のボタン（id:fav_button0）が押された場合、以下の要素がid:t0のtableに追加されます
     * 
     *<tbody>
     *<tr class='line' id='upline0'>
     *<th class="time9 time" id="js-time0">09:00<br>-<br>9:30</th>  
     *  <th class="event" id="js-upevent0">
     *      <div class="performer" id="upperformer0">
     *          開会式                                      
     *      </div>
     *      <th class="favorite">
     *          <button class="fav_button" id="upfav_button0">            
     *              <div  class="star" id="upstar0">★</div>
     *          </button>
     *      </th>
     *  </th>
     *</tr>
     *</tbody>
    */

   document.getElementById('upfav_button'+Stnum).addEventListener("click",function(){hide(num.toString()),check[num.toString()]=0;},false);
    //ボタンでhide関数を呼び出せるように.

   headEle.appendChild(creEle("script","src","myClover_details.js"));

    /**
     * 選択した要素を上に持って行ったときに詳細ページを開けるようにするためにclover_details.jsを再度読み込みします。
     * もう一度タグを作ることで読み込ませています。しかしこれだと押した分だけタグが生成されてしまいます
     * jquery(中身はAjax)でも実行できそうです。この方法で処理が重すぎる場合はそちらを試してもいいかもしれません
     * 問題なければこのままでいいと思います。
     * 
    */


}


function hide(num){

    console.log("hide関数が実行されました");
    document.querySelector('#t'+num.toString()).innerHTML="";
    momtable[num.toString()].setAttribute("border","0");

    /*myじゃなければいらない
    star[num].style.color='#FFFFFF';
    colCount[num]=0
    */
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

8月23日の深夜にプッシュして以降の変更

ピン止めしたり外したりする関数のfunction(){} => function(event){}
ボタンを押したときの動作の修正
上にピン止めしたものでも詳細ページを開けるように。
idが一つになるように調整
queryselectorallにはtrタグの部分が含まれないので追加する
creEle関数作ってみた
作ってみた感想＝＞この関数いる？作る苦労と返り値のめんどくささがなんとも。
まあ練習と思って。てか数回しか呼び出されないならいらんかも？（無理に使わなくていいのに使ってる感ある。）
3行を省略するかって話

*/

