/*global $*/
$(document).ready(function(){

  let addZero = function(value){
    if (value < 10){
        value = "0"+value;
      }
    return value;
  };
   
   //htmlのidを取得
    const counter = document.getElementById("counter");
    const startbtn = document.getElementById("start");
    const stopbtn = document.getElementById("stop");
    const resetbtn = document.getElementById("reset");
   
   //グローバル変数
   let startTime;
   let elapsedTime;
   let timeToadd=0;
   let ID;
   
   startbtn.addEventListener("click",function(){
    // startbtnを押せなくする
      startbtn.disable = true;
    //スタート押下時の時刻を取得
      startTime = new Date();
    //１秒ごとにカウントアップを繰り返す
      ID =setInterval(countUp(),1000);
  
   },false);
   
    let countUp = function(){
    //今現在の時刻を取得
      let now = new Date();
    //スタート時からの経過時間を表示
      elapsedTime = now-startTime+timeToadd;
    //ミリ秒,秒,分を表示する
      let min = Math.floor(elapsedTime/100/60);
      let sec = Math.floor(elapsedTime/100);
      let mSec = Math.floor(elapsedTime%100);
      
      //let mSec=elapsedTime.getMilliseconds();
    //ミリ秒を３桁から２桁にする
      //mSec = Math.floor(mSec/10);
    //ミリ秒が１００になったら秒に繰り上げする
      //mSec = mSec-sec*100;
      
      //let sec =elapsedTime.getSeconds();
      //sec = sec-min*60;
      //let min =elapsedTime.getMinutes();
    //ゼロを加える
    min= addZero(min);
    sec= addZero(sec);
    mSec=addZero(mSec);
    
    //スタート押下時からの経過時間を表示
    counter.innerHTML= min + ":" + sec + ":" + mSec;
    };

    stopbtn.addEventListener("click",function(){
      clearInterval(ID);
      startbtn.disable(false);
      stopbtn.disable(true);
    //過去の経過時間。2回目以降この値が加算される。
      timeToadd += new Date() - startTime;
    },false);
    
    resetbtn.addEventListener("click",function(){
       clearInterval(ID);
       elapsedTime=0;
       timeToadd=0;
       counter.innerHTML = "00:00:00";
       startbtn.disable(false);
       stopbtn.disable(true);
       resetbtn.disable(true);
    },false);
    
});