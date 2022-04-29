(function(){
  
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
      startTime = Date.now();
    //１秒ごとにカウントアップを繰り返す
      ID =setInterval(countUp(),1000);
  
   },false);
   
    let countUp = function(){
    //今現在の時刻を取得
      let now = Date.now();
    //スタート時からの経過時間を表示
      elapsedTime = now.getTime()-startTime.getTime()+timeToadd;
    //ミリ秒を表示する
      let mSec=elapsedTime.getMilliseconds();
    //ミリ秒を３桁から２桁にする
      mSec = Math.floor(mSec/10);
    //ミリ秒が１００になったら秒に繰り上げする
      mSec = mSec-sec*100;
      
      let sec =elapsedTime.getSeconds();
      sec = sec-min*60;
      let min =elapsedTime.getMinutes();
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
      timeToadd += Date.now() - startTime;
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
    
    

   //function start(){
     // startbtnを押せなくする
     //startbtn.disable = true;
     // 0に１加える
     //time ++;
     
     //時間表記にする(floorは四捨五入切捨て)
     //let min = Math.floor(time/100/60);
     //let sec = Math.floor(time/100);
     //let mSec = Math.floor(time%100);
     
     //頭に０をつける
     //if (min<10) min= "0"+ min;
     //if (sec>=60) sec %= 60;
     //if (sec<10) sec= "0"+ sec;
     //if (mSec<10) mSec= "0"+mSec;
     
     //htmlのcounterクラスの表記を変える
     //counter.innerHTML = min + ":" + sec + ":" + mSec;
     
     //繰り返す
     //id = setInterval(start,1000);
   //}
      //function stop(){
       //clearInterval(start);
       //startbtn.disable(false);
   //}
   
   //function reset(){
       //clearInterval(id);
       //time = 0;
       //counter.innerHTML = "00:00:00";
       //startbtn.disable(false);
   //}
   
   
   //startbtn.addEventListener("click",start,false);
   //stopbtn.addEventListener("click",start,false);
   //resetbtn.addEventListener("click",start,false);
   
   //スタート押下
       //start.addEventListener("click",function(){
       //スタート押下時の時刻を取得
       //startTime = Date.now();
       //経過時間を取得
        //elapsedTime += new Date() - startTime;
        //１秒ごとにカウントアップを繰り返す
        //setInterval(countUp(),1000);
        //文字列に直して頭に０をつける
        //const m = elapsedTime.getMinutes().toString().padStart(2,"0");
        //const s = elapsedTime.getSeconds().toString().padStart(2,"0");
        //const ms = elapsedTime.getMilliseconds().toString().padStart(2,"0");
        //HTMLでcounterクラスを文字列で書き換える
        //$(".counter").HTML(`${m}:${s}:${ms}`);
        
   //});
       
    //function countUp(){
      //elapsedTime ++;
    //}
    
  //});
      