$(document).ready(function(){
  var sLen = 25;
  var bLen = 5;
  var slenTmp = 25;
  var blenTmp = 5;
  var bInt;
  var nInt;
  var x;
  var y;
  var counter = 00;
  var onOff = false;
  var onOff2 = true;
  
  $('#sOp').html(sLen);
  $('#bOp').html(bLen);
  $('#op').html(sLen);
  $('#tmtt').html('Session');
  
  //Session Length btn config
  $('#slm').click(function(){
    if (onOff === true) {
      console.log('Stop the timer to set the time!');
    }
    else if (onOff === false && onOff2 === true){
      if(sLen === 1){
        
        console.log('Invalid Input');
    }else {
      sLen--;
      $('#sOp').html(sLen);
      $('#op').html(sLen);
      $('#opsec').html('');
    }
    slenTmp = sLen;
      counter = 0;
    }
    else if (onOff === false && onOff2 === false){
      console.log(sLen);
      if(sLen === 1){
      console.log('Invalid Input');
    }else {
      sLen--;
      $('#sOp').html(sLen);
      //$('#op').html(sLen);
      //$('#opsec').html('');
    }
    
    slenTmp = sLen;
    }
    
  });
  $('#slp').click(function(){
    if (onOff === true) {
      console.log('Stop the timer to set the time!');
    }
    else if (onOff === false && onOff2 === true){
      sLen++;
      $('#sOp').html(sLen);
      $('#op').html(sLen);
      $('#opsec').html('');
      slenTmp = sLen;
      counter = 0;
    }
    else if (onOff === false && onOff2 === false){
      sLen++;
      $('#sOp').html(sLen);
      slenTmp = sLen;
    }
  });
  //Break Length btn config
  $('#blm').click(function(){
    if (onOff === true){
      console.log('Stop the timer to set the time!');
    }
    else if (onOff === false && onOff2 === true){
      if(bLen === 1){
        console.log('Invalid Input');
      }else {
        bLen--;
        $('#bOp').html(bLen);
      }
    blenTmp = bLen;
    }
    else if (onOff === false && onOff2 === false){
      if(bLen === 1){
        console.log('Invalid Input');
      }else {
        bLen--;
        $('#bOp').html(bLen);
        $('#op').html(bLen);
        $('#opsec').html('');
      }
    blenTmp = bLen;
      counter = 0;
    }
  });
  $('#blp').click(function(){
    if (onOff === true){
      console.log('Stop the timer to set the time!');
    }
    else if (onOff === false && onOff2 === true){
      bLen++;
      $('#bOp').html(bLen);
      blenTmp = bLen;
      //counter = 0;
    }
    else if (onOff === false && onOff2 === false){
      bLen++;
      $('#bOp').html(bLen);
      $('#op').html(bLen);
      $('#opsec').html('');
      blenTmp = bLen;
      counter = 0;
    }
  });
  
  $('#tm').click(function(){
    if (onOff === false) {
      if (onOff2 === true){
        countDown();  
      }else if (onOff2 === false){
        breakDown();        
      }
      onOff = true;
    }
    else if (onOff === true) {
      if (onOff2 === true) {
      stop(nInt);  
      }else if (onOff2 === false){
        stop(bInt);
      }
      onOff = false;
    }
    //console.log('onOff2: '+onOff2);
    //console.log(sLen);
  });
  
  function countDown(){
    $('#tm, #sl').css('color', '#A8E10B')
    stop(y);
    $('#tmtt').html('Session');
    if (counter < 10) {
      $('#opsec').html(':0'+ counter);  
    }else{
      $('#opsec').html(':'+counter);
    }
    
    if (slenTmp < 10) {
      $('#op').html('0'+slenTmp);
    }else{
      $('#op').html(slenTmp);
      
    }
    nInt = nInt = setInterval(update, 1000);
    onOff2 = true;
  }
  //console.log(counter);
  function update(){
    //counter--;
    if (counter === 0) {
      counter = 60;
      slenTmp--;
      //console.log(slenTmp);
      if (slenTmp < 10) {
        $('#op').html('0'+slenTmp);    
      } else{
        $('#op').html(slenTmp);    
      }
    }
    counter--;
    if (counter < 10) {
      $('#opsec').html(':0'+counter);  
    }else{
      $('#opsec').html(':'+counter);  
    }
    if (slenTmp === 0 && counter === 0) {
      stop(nInt);
      slenTmp = sLen;
      x = setInterval(breakDown, 1000);
      //breakDown();
    }
  }
  
  function breakDown(){
    $('#tm, #bl').css('color', '#FDE400')
    stop(x);
    $('#tmtt').html('Break');
    if (counter < 10) {
      $('#opsec').html(':0'+ counter);  
    }else{
      $('#opsec').html(':'+ counter);  
    }
    if (blenTmp < 10) {
      $('#op').html('0'+blenTmp);
    }else{
      $('#op').html(blenTmp);
    }
    bInt = setInterval(bUpdate, 1000);
    onOff2 = false;
  }
  function bUpdate(){
    if (counter === 0) {
      counter = 60;
      blenTmp--;
      if (blenTmp < 10) {
        $('#op').html('0'+blenTmp);    
      } else{
        $('#op').html(blenTmp);    
      }
    }
    counter--;
    if (counter < 10) {
      $('#opsec').html(':0'+counter);  
    }else{
      $('#opsec').html(':'+counter);  
    }
    if (blenTmp === 0 && counter === 0) {
      stop(bInt);
      blenTmp = bLen;
      y = setInterval(countDown, 1000);
    }
  }
  
  function stop(input){
    clearInterval(input);
  }
  function funLog(){
    console.log(sLen);  
  }
//console.log(onOff);  
});