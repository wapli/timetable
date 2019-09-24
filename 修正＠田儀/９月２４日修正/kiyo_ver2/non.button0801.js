
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

function romu1(){
  var a=document.getElementById("romu");
  console.log(a.style.left);
  console.log("aa");
  
}
var name_st;
function mogi_show(name){
  if(name==name_st){
    var a=document.getElementsByClassName(name);
      for(var i=0; i<a.length;i++){
        a[i].style.display="none";
      }
  }
  else{
    var b=document.getElementsByClassName(name_st);
    for(var i=0; i<b.length;i++){
      b[i].style.display="none";
    }
      var c=document.getElementsByClassName(name);
      for(var i=0; i<c.length;i++){
        c[i].style.display="block";
      }
    name_st=name;
    }
}
/*
document.addEventListener("DOMContentLoaded", function(){
document.querySelector('.aaa')
  .addEventListener('click', function() {
    if(document.querySelector('.bbb').classList.contains('li-open')){
      document.querySelector('.bbb').classList.remove('li-open');
      document.querySelector('.bbb').classList.add('li-close');
      console.log(document.querySelector('.bbb'));
    }
    else{
      document.queryS elector('.bbb').classList.remove('li-close');
      document.querySelector('.bbb').classList.add('li-open');
      console.log(document.querySelector('.bbb'));
    }
   
  });
});
*/

$(function() {
  // clickイベントでクリックすると発動
  $('.ai').click(function heart() {
    // クリックした要素をthisで取得してclassの追加または削除
    $(this).toggleClass('heart2'); 
  }); 
});