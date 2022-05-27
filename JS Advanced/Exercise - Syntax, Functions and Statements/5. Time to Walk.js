function TimeToWalk(steps,metersPerStep,speed) {
  let S=(steps*metersPerStep)/1000;
  let breaks = Math.floor(S/0.5); 
  let time = Number(((S/speed)*60).toFixed(2))+breaks;
  let timeToStr=time.toString();
  
  if(timeToStr.includes(".")){
      let i = timeToStr.indexOf(".");
      let start = timeToStr.slice(0,i);
      let end = timeToStr.slice(i+1);
      
      let seconds = Number(end)*6;
if(seconds>60){
  seconds =Math.ceil(Number(end)*0.6);
}
      let minutes = Number(start);
      
      let hours="00";
      if(minutes/60>=1){
          hours=Math.floor(time/60);
          minutes = time-hours*60;
      }
      let str = hours.toString();
      if(str.length==1){
          str = "0"+str;
      }
      let str2 = minutes.toString();
    
      if(str2.length==1){
          str2 = "0"+str2;
        //  console.log(str2);
         
      }
      let str3 = seconds.toString();
      if(str3.length==1){
          str3 = "0"+str3;
      }
      console.log(`${str}:${str2}:${str3}`);
  }else{
      let minets="00";
      let hours="00";
      let seconds="00";
      if(time/60>=1){
          hours=Math.floor(time/60);
          minets = time-hours*60;
        //  console.log(minets);
          
         // seconds=0;
      }else{
          minets=time;
          seconds=0;
          hours=0;
      }
      let str = hours.toString();
      if(str.length==1){
          str = "0"+str;
      }
      console.log(`${str}:${minets}:${seconds}`);
      
  }
  
}
TimeToWalk(4, 0.6, 5);
