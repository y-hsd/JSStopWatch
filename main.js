/*global $*/
$(document).ready(function(){
   
  //htmlのidを取得
  const counter = document.getElementById("counter");
  const startbtn = document.getElementById("start");
  const stopbtn = document.getElementById("stop");
  const resetbtn = document.getElementById("reset");
   
   //グローバル変数
   let startTime=0;
   let elapsedTime=0;
   let timeToadd=0;
   let ID;
  
   
  function updateTimeText(){
    let m = Math.floor(elapsedTime / 60000);
    m= m.toString().padStart(2,"0");
    let s = Math.floor((elapsedTime/1000)%60);
    s= s.toString().padStart(2,"0");
    let ms = Math.floor(elapsedTime%1000);
    ms = ms.toString().padStart(3,"0");
    counter.textContent= m + ":" + s + ":" + ms;
  }
    
  function countUp(){
    elapsedTime = new Date().getTime()-startTime+timeToadd;
    updateTimeText();
  }
  
   
  startbtn.addEventListener("click",function(){
    // startbtnを押せなくする
    startbtn.setAttribute("disabled",true);
    //stopbtnを押せるようにする
    stopbtn.removeAttribute("disabled");
    //resetbtnを押せないようにする
    resetbtn.setAttribute("disabled",true);
    //スタート押下時の時刻を取得
    startTime = new Date().getTime();
    //m秒ごとにカウントアップを繰り返す
    ID=setInterval(countUp,10);
  },false);
   
  
  stopbtn.addEventListener("click",function(){
    clearInterval(ID);
    startbtn.removeAttribute("disabled");
    stopbtn.setAttribute("disabled",true);
    resetbtn.removeAttribute("disabled");
    //stopbtnを押すまでの経過時間をtimeToaddに代入。
    //初回startbtn押下時は初期値０、2回目以降代入された値がupdateTimeText関数で加算される。
    timeToadd += new Date().getTime() - startTime;
  },false);
    
  
  resetbtn.addEventListener("click",function(){
    clearInterval(ID);
    elapsedTime=0;
    timeToadd=0;
    counter.textContent="00:00:000";
    startbtn.removeAttribute("disabled");
    stopbtn.setAttribute("disable",true);
    resetbtn.setAttribute("disabled",true);
  },false);
    
});