/*global $*/
$(document).ready(function(){
   
  //htmlのidを取得
  const counter = document.getElementById("counter");
  const startbtn = document.getElementById("start");
  const stopbtn = document.getElementById("stop");
  const resetbtn = document.getElementById("reset");
   
   //グローバル変数
   let startTime=0;
   let elapsedTime;
   let timeToadd=0;
   let ID;

   
  function updateTimeText(){
    const now = new Date(new Date() - startTime + elapsedTime + timeToadd);
    const m = now.getMinutes().toString().padStart(2,"0");
    const s = now.getSeconds().toString().padStart(2,"0");
    const ms =now.getMilliseconds().toString().padStart(3,"0");
    counter.textContent= m + ":" + s + ":" + ms;
  }
    
  function countUp(){
    const now = new Date();
    elapsedTime = now-startTime+timeToadd;
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
    startTime = new Date();
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
    timeToadd += new Date() - startTime;
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