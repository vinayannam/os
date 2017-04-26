
var $letters = $('#demo span'),tl = new TimelineMax();
var $box1 = $('.box1')
var $box2 = $('.box2')
var $box3 = $('.box3')
var $box4 = $('.box4')
var $box5 = $('.box5')

tl.staggerFrom($letters,0.25, {
    opacity: 0,
    y: 200,
    ease: Back.easeOut
  },
  0.08
).staggerTo($letters,0.25, {
    opacity: 0,
    x: -200,
    ease: Back.easeOut
  },
  0.08, '+=1')
.staggerFrom($box1,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08,'+=1')
.staggerFrom($box2,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08)
.staggerFrom($box3,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerFrom($box4,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08)
.staggerFrom($box5,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08);


$box1.click(function(){
    
    var t1 = new TimelineMax();
    t1.staggerTo($box2,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($box3,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($box4,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($box5,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08);
    
  $box1.toggleClass('box1-active');
    
    var t2 = new TimelineMax();
    t2.staggerTo($('body'),0.25, {
        css:{backgroundColor:$box1.css('background-color')},
    ease: Back.easeOut
  },
  0.08,'+=1.5').staggerTo($box1,0.25, {
        opacity:0, 
        css:{
            fontSize:50,
            y:300
        },
    ease: Back.easeOut
  },
  0.08).staggerTo($box1,0.25, {
        onComplete:ffs,
    ease: Back.easeOut
  },
  0.08,'+=1.5');

});


$box2.click(function(){
    
    var t3 = new TimelineMax();
    t3.staggerTo($box1,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($box3,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($box4,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($box5,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08);
    
  $box2.toggleClass('box2-active');
    
    var t4 = new TimelineMax();
    
    t4.staggerTo($('body'),0.25, {
        css:{backgroundColor:$box2.css('background-color')},
    ease: Back.easeOut
  },
  0.08,'+=1.5').staggerTo($box2,0.25, {
        opacity:0, 
        css:{
            fontSize:50,
            y:300
        },
    ease: Back.easeOut
  },
  0.08).staggerTo($box1,0.25, {
        onComplete:sjf,
    ease: Back.easeOut
  },
  0.08,'+=1.5');
});

$box3.click(function(){
    
    var t1 = new TimelineMax();
    t1
.staggerTo($box1,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box2,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box4,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box5,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08);
  $box3.toggleClass('box3-active');
    var t2 = new TimelineMax();
    t2.staggerTo($('body'),0.25, {
        css:{backgroundColor:$box3.css('background-color')},
    ease: Back.easeOut
  },
  0.08,'+=1.5').staggerTo($box3,0.25, {
        opacity:0, 
        css:{
            fontSize:50,
            y:300
        },
    ease: Back.easeOut
  },
  0.08).staggerTo($box1,0.25, {
        onComplete:ps,
    ease: Back.easeOut
  },
  0.08,'+=1.5');
});

$box4.click(function(){
    
    var t1 = new TimelineMax();
    t1
.staggerTo($box1,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box2,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box3,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box5,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08);
  $box4.toggleClass('box4-active');
    var t2 = new TimelineMax();
    t2.staggerTo($('body'),0.25, {
        css:{backgroundColor:$box4.css('background-color')},
    ease: Back.easeOut
  },
  0.08,'+=1.5').staggerTo($box4,0.25, {
        opacity:0, 
        css:{
            fontSize:50,
            y:300
        },
    ease: Back.easeOut
  },
  0.08).staggerTo($box1,0.25, {
        onComplete:srt,
    ease: Back.easeOut
  },
  0.08,'+=1.5');;
});

$box5.click(function(){
    
    var t1 = new TimelineMax();
    t1
.staggerTo($box1,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box2,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box3,0.25, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08)
.staggerTo($box4,0.25, {
    opacity: 0,
    x: -1000,
    ease: Back.easeOut
  },
  0.08);
  $box5.toggleClass('box5-active');
    var t2 = new TimelineMax();
    t2.staggerTo($('body'),0.25, {
        css:{backgroundColor:$box5.css('background-color')},
    ease: Back.easeOut
  },
  0.08,'+=1.5').staggerTo($box5,0.25, {
        opacity:0, 
        css:{
            fontSize:50,
            y:300
        },
    ease: Back.easeOut
  },
  0.08).staggerTo($box1,0.25, {
        onComplete:rr,
    ease: Back.easeOut
  },
  0.08,'+=1.5');;
});

var ffsp1b=0,ffsp2b=0,ffsp3b=0,ffsp4b=0;


function ffs(){
    $('.all').remove();
    TweenLite.set(".ffs", {opacity:100,transition: "all 2s ease"});

var num2 = 0;

var num4 = 0;

var num6 = 0;

var num8 = 0;



var drawNumber = function(){

    $('.bt1').text('Burst time: '+num2);

    $('.bt2').text('Burst time: '+num4);

    $('.bt3').text('Burst time: '+num6);

    $('.bt4').text('Burst time: '+num8);

    ffsp1b = num2;
    ffsp2b = num4;
    ffsp3b = num6;
    ffsp4b = num8;
}




$("#num2").on('mousemove change', function(){
  num2 = $(this).val();
  drawNumber();
});

$("#num4").on('mousemove change', function(){
  num4 = $(this).val();
  drawNumber();
});

$("#num6").on('mousemove change', function(){
  num6 = $(this).val();
  drawNumber();
});

$("#num8").on('mousemove change', function(){
  num8 = $(this).val();
  drawNumber();
});
    
    $('.ffsb').click(function(){
        var t = new TimelineMax();
        
        t.staggerTo($('.md1'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.md2'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.md3'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08)
        .staggerTo($('.md4'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.game'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.ffsb'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.ffs'),0.5, {
    
            onComplete:ffsgame,
            ease: Back.easeOut
  },
  0.08);
 });
    
    }  
function ffsgame(){
    $('.ffs').remove();
    TweenLite.set(".ffsgame", {opacity:100,transition: "all 2s ease"}); 
    TweenLite.set(".wrap", {marginTop: 0,transition: "all 2s ease"});
  var n=4,burst = [ffsp1b,ffsp2b,ffsp3b,ffsp4b],
      wt = [0,0,0,0],i=0,j=0,t=0, fb1 = $('.fb1'),fb2 = $('.fb2'),fb3 = $('.fb3'),fb4 = $('.fb4'),avwt=0,avtat=0,tat = [0,0,0,0];
 
    //calculating waiting time
    
    
    
    for(i=1;i<n;i++)
    {
        wt[i]=0;
        for(j=0;j<i;j++)
            
            
            wt[i] = wt[i] + Number(burst[j]);
        
    }
    for(i=0;i<n;i++)
    {
        tat[i]=Number(burst[i]) + wt[i];
        avwt = avwt + wt[i];
        avtat = avtat +tat[i];
    }
    
    avwt=avwt/n;
    avtat=avtat/n;
    var t = new TimelineMax();
    
    t.staggerTo(fb1,Number(burst[0]),{marginLeft:screen.width-80,ease:Linear.easeNone},0,"+=2").staggerTo(fb2,Number(burst[1]),{marginLeft:screen.width-80,ease:Linear.easeNone}).staggerTo(fb3,Number(burst[2]),{marginLeft:screen.width-80,ease:Linear.easeNone}).staggerTo(fb4,Number(burst[3]),{marginLeft:screen.width-80,ease:Linear.easeNone});
    
    $('.fb1').click(function(){
  ffsdetails();
});
    
    var ffsdetails = function(){

   $('.fp1').text('Average waiting time: '+avwt);
    $('.fp2').text('Average turn around time: '+avtat);
   $('.fb1 p').text(wt[0]);
    $('.fb2 p').text(wt[1]);
        $('.fb3 p').text(wt[2]);
    $('.fb4 p').text(wt[3]);
}
}


var sjfp1b=0,sjfp2b=0,sjfp3b=0,sjfp4b=0;

function sjf(){
    $('.all').remove();
    $('.ffs').remove();
    $('.ffsgame').remove();
    TweenLite.set(".sjf", {opacity:100,transition: "all 2s ease"});

var num2 = 0;

var num4 = 0;

var num6 = 0;

var num8 = 0;



var drawNumber = function(){

    $('.bt1').text('Burst time: '+num2);

    $('.bt2').text('Burst time: '+num4);

    $('.bt3').text('Burst time: '+num6);

    $('.bt4').text('Burst time: '+num8);

    sjfp1b = num2;
    sjfp2b = num4;
    sjfp3b = num6;
    sjfp4b = num8;
}




$("#num2").on('mousemove change', function(){
  num2 = $(this).val();
  drawNumber();
});

$("#num4").on('mousemove change', function(){
  num4 = $(this).val();
  drawNumber();
});

$("#num6").on('mousemove change', function(){
  num6 = $(this).val();
  drawNumber();
});

$("#num8").on('mousemove change', function(){
  num8 = $(this).val();
  drawNumber();
});
    
    $('.sjfb').click(function(){
        var t = new TimelineMax();
        
        t.staggerTo($('.sjfmd1'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.sjfmd2'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.sjfmd3'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08)
        .staggerTo($('.sjfmd4'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.sjfplayer'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.sjfb'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.sjf'),0.5, {
    
            onComplete:sjfgame,
            ease: Back.easeOut
  },
  0.08);
 });
    
    }  
function sjfgame(){
    $('.sjf').remove();
    TweenLite.set(".sjfgame", {opacity:100,transition: "all 2s ease"}); 
    TweenLite.set(".sjfwrap", {marginTop: 0,transition: "all 2s ease"});
  var n=4,burst = [sjfp1b,sjfp2b,sjfp3b,sjfp4b],
      wt = [0,0,0,0],i=0,j=0,t=0, fb1 = $('.sjfb1'),fb2 = $('.sjfb2'),fb3 = $('.sjfb3'),fb4 = $('.sjfb4'),avwt=0,avtat=0,tat = [0,0,0,0],temp=0,pos=0,total = 0,fb = [fb1,fb2,fb3,fb4];
 
     var t = new TimelineMax();
    
     for(i=0;i<n;i++)
    {
        pos=i;
        for(j=0;j<n;j++)
        {
            if(Number(burst[j])<Number(burst[pos])){
                pos=j;
        }
            
            
            
        }
        if(i==0){
            t.delay(2);
        }
 
        t.add(TweenMax.staggerTo(fb[pos],Number(burst[pos]),{marginLeft:screen.width-80,ease:Linear.easeNone},0));
        wt[pos]= total;
        total = total + Number(burst[pos]);
        tat[pos]=Number(burst[pos])+wt[pos]; 
        burst[pos] = Number(9999);
    }
    
    
    

    avwt=total/n;
    total = 0;
        for(i=0;i<n;i++)
    {
        total= total + tat[i];
    }
    avtat=total/n;
    $('.sjfb1').click(function(){
  sjfdetails();
});
    
    var sjfdetails = function(){

   $('.sjfp1').text('Average waiting time: '+avwt);
    $('.sjfp2').text('Average turn around time: '+avtat);
   $('.sjfb1 p').text(wt[0]);
    $('.sjfb2 p').text(wt[1]);
    $('.sjfb3 p').text(wt[2]);
    $('.sjfb4 p').text(wt[3]);
}
}

var psp1b=0,psp2b=0,psp3b=0,psp4b=0,psp1a=0,psp2a=0,psp3a=0,psp4a=0
,psp1p=0,psp2p=0,psp3p=0,psp4p=0;
function ps(){
    $('.all').remove();
    $('.ffs').remove();
    $('.ffsgame').remove();
    $('.sjf').remove();
    $('.sjfgame').remove();
    TweenLite.set(".ps", {opacity:100,transition: "all 2s ease"});
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var num9 = 0;
var num10 = 0;
var num11 = 0;
var num12 = 0;
var drawNumber = function(){

    $('.bt1').text('Burst time: '+num1);
    $('.at1').text('Arrival time: '+num2);
    $('.pt1').text('Priority: '+num3);
    $('.bt2').text('Burst time: '+num4);
    $('.at2').text('Arrival time: '+num5);
    $('.pt2').text('Priority: '+num6);
    $('.bt3').text('Burst time: '+num7);
    $('.at3').text('Arrival time: '+num8);
    $('.pt3').text('Priority: '+num9);
    $('.bt4').text('Burst time: '+num10);
    $('.at4').text('Arrival time: '+num11);
    $('.pt4').text('Priority: '+num12);

    psp1b = num1;
    psp1a = num2;
    psp1p = num3;
    psp2b = num4;
    psp2a = num5;
    psp2p = num6;
    psp3b = num7;
    psp3a = num8;
    psp3p = num9;
    psp4b = num10;
    psp4a = num11;
    psp4p = num12;
}


$("#num1").on('mousemove change', function(){
  num1 = $(this).val();
  drawNumber();
});

$("#num2").on('mousemove change', function(){
  num2 = $(this).val();
  drawNumber();
});

$("#num3").on('mousemove change', function(){
  num3 = $(this).val();
  drawNumber();
});

$("#num4").on('mousemove change', function(){
  num4 = $(this).val();
  drawNumber();
});
$("#num5").on('mousemove change', function(){
  num5 = $(this).val();
  drawNumber();
});

$("#num6").on('mousemove change', function(){
  num6 = $(this).val();
  drawNumber();
});

$("#num7").on('mousemove change', function(){
  num7 = $(this).val();
  drawNumber();
});

$("#num8").on('mousemove change', function(){
  num8 = $(this).val();
  drawNumber();
});
$("#num9").on('mousemove change', function(){
  num9 = $(this).val();
  drawNumber();
});

$("#num10").on('mousemove change', function(){
  num10 = $(this).val();
  drawNumber();
});

$("#num11").on('mousemove change', function(){
  num11 = $(this).val();
  drawNumber();
});

$("#num12").on('mousemove change', function(){
  num12 = $(this).val();
  drawNumber();
});
    
    $('.psb').click(function(){
        var t = new TimelineMax();
        
        t.staggerTo($('.psmd1'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.psmd2'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.psmd3'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08)
        .staggerTo($('.psmd4'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.psplayer'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.psb'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.ps'),0.5, {
    
            onComplete:psgame,
            ease: Back.easeOut
  },
  0.08);
 });
    
    }  
function psgame(){
    $('.ps').remove();
    TweenLite.set(".psgame", {opacity:100,transition: "all 2s ease"}); 
    TweenLite.set(".pswrap", {marginLeft:-80});
    TweenLite.set(".pswrap", {marginTop: 0,transition: "all 2s ease"});
  var n=4,
      ttime = 0,
      remain=4,
      wt = [0,0,0,0],
      burst = [psp1b,psp2b,psp3b,psp4b],
      at = [psp1a,psp2a,psp3a,psp4a],
      atd = [psp1a,psp2a,psp3a,psp4a],
      pt = [psp1p,psp2p,psp3p,psp4p,11],
      rt = [0,0,0,0],
      i=0,
      j=0,
      fb1 = $('.psb1'),
      fb2 = $('.psb2'),
      fb3 = $('.psb3'),
      fb4 = $('.psb4'),
      avwt=0,
      avtat=0,
      pos=0,
      f = 0;
    
    var fb = [fb1,fb2,fb3,fb4];
    var psw = [$('.psw1'),$('.psw2'),$('.psw3'),$('.psw4')];
 
     var t = new TimelineMax();
    
    for(i=0;i<n;i++)
  {
    rt[i]= Number(burst[i]);
  }
    
    
    for(ttime=0;remain!==0;ttime++)
    {
        for(i=0;i<n;i++)
    {
      if(at[i]==ttime)
        {
        t.add(TweenMax.staggerTo(psw[i],0.001,{marginLeft:0,ease:Linear.easeNone},0));
        }
       
    }
        
        pos=4;
        
        for(i=0;i<n;i++)
    {
        
            
        
      if(at[i]<=ttime && Number(pt[i])<Number(pt[pos]) && Number(rt[i])>0)
      {
         
    pos=i;
    
       
    }
    }
    

        if(f===0){
            t.delay(2);
            f = 1;
        }
        t.add(TweenMax.staggerTo(fb[pos],1,{marginLeft:((screen.width-80)/Number(burst[pos]))*((Number(burst[pos])-Number(rt[pos]))+1),ease:Linear.easeNone},0));
        
    rt[pos] = rt[pos]-1;
        
    if(Number(rt[pos]===0))
    {
      remain = remain -1;
      wt[pos] = ttime+1-Number(at[pos])-Number(burst[pos]);
      avtat=avtat+ttime+1-at[pos];
      avwt=avwt+wt[pos];
    } 
   
    }
    
    avwt=avwt/n;
    avtat=avtat/n;
    $('.psb1').click(function(){
  psdetails();
});
    
    var psdetails = function(){

   $('.psp1').text('Average waiting time: '+avwt);
    $('.psp2').text('Average turn around time: '+avtat);
   $('.psb1 p').text(wt[0]);
    $('.psb2 p').text(wt[1]);
    $('.psb3 p').text(wt[2]);
    $('.psb4 p').text(wt[3]);
}
}

var srtp1b=0,srtp2b=0,srtp3b=0,srtp4b=0,srtp1a=0,srtp2a=0,srtp3a=0,srtp4a=0;
function srt(){
    $('.all').remove();
    $('.ffs').remove();
    $('.ffsgame').remove();
    $('.sjf').remove();
    $('.sjfgame').remove();
    $('.ps').remove();
    $('.psgame').remove();
    
    TweenLite.set(".srt", {opacity:100,transition: "all 2s ease"});
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;

var drawNumber = function(){

    $('.bt1').text('Burst time: '+num1);
    $('.at1').text('Arrival time: '+num2);

    $('.bt2').text('Burst time: '+num3);
    $('.at2').text('Arrival time: '+num4);

    $('.bt3').text('Burst time: '+num5);
    $('.at3').text('Arrival time: '+num6);

    $('.bt4').text('Burst time: '+num7);
    $('.at4').text('Arrival time: '+num8);


    srtp1b = num1;
    srtp1a = num2;

    srtp2b = num3;
    srtp2a = num4;

    srtp3b = num5;
    srtp3a = num6;

    srtp4b = num7;
    srtp4a = num8;

}


$("#num1").on('mousemove change', function(){
  num1 = $(this).val();
  drawNumber();
});

$("#num2").on('mousemove change', function(){
  num2 = $(this).val();
  drawNumber();
});

$("#num3").on('mousemove change', function(){
  num3 = $(this).val();
  drawNumber();
});

$("#num4").on('mousemove change', function(){
  num4 = $(this).val();
  drawNumber();
});
$("#num5").on('mousemove change', function(){
  num5 = $(this).val();
  drawNumber();
});

$("#num6").on('mousemove change', function(){
  num6 = $(this).val();
  drawNumber();
});

$("#num7").on('mousemove change', function(){
  num7 = $(this).val();
  drawNumber();
});

$("#num8").on('mousemove change', function(){
  num8 = $(this).val();
  drawNumber();
});

    
    $('.srtb').click(function(){
        var t = new TimelineMax();
        
        t.staggerTo($('.srtmd1'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.srtmd2'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.srtmd3'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08)
        .staggerTo($('.srtmd4'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.srtplayer'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.srtb'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.srt'),0.5, {
    
            onComplete:srtgame,
            ease: Back.easeOut
  },
  0.08);
 });
    
    }  
function srtgame(){
    $('.srt').remove();
    TweenLite.set(".srtgame", {opacity:100,transition: "all 2s ease"}); 
     TweenLite.set(".srtwrap", {marginLeft:-80});
    TweenLite.set(".srtwrap", {marginTop: 0,transition: "all 2s ease"});
  var n=4,
      ttime = 0,
      remain=4,
      wt = [0,0,0,0],
      burst = [srtp1b,srtp2b,srtp3b,srtp4b],
      at = [srtp1a,srtp2a,srtp3a,srtp4a],
      rt = [0,0,0,0,9999],
      i=0,
      j=0,
      f=0,
      fb1 = $('.srtb1'),
      fb2 = $('.srtb2'),
      fb3 = $('.srtb3'),
      fb4 = $('.srtb4'),
      avwt=0,
      avtat=0,
      pos=0;
    
    var fb = [fb1,fb2,fb3,fb4];
    var psw = [$('.srtw1'),$('.srtw2'),$('.srtw3'),$('.srtw4')];
 
     var t = new TimelineMax();
    
    for(i=0;i<n;i++)
  {
    rt[i]= Number(burst[i]);
  }
    
    
    
    for(ttime=0;remain!==0;ttime++)
    {
        for(i=0;i<n;i++)
    {
      if(at[i]==ttime)
        {
        t.add(TweenMax.staggerTo(psw[i],0.001,{marginLeft:0,ease:Linear.easeNone},0));
        }
       
    }
        
        pos=4;
        
        for(i=0;i<n;i++)
    {
     
      if(at[i]<=ttime  && rt[i]<rt[pos] && Number(rt[i])>0)
      {
         
    pos=i;
    
    }
    }
    
        if(f===0){
            t.delay(2);
            f = 1;
        }
        t.add(TweenMax.staggerTo(fb[pos],1,{marginLeft:((screen.width-80)/Number(burst[pos]))*((Number(burst[pos])-Number(rt[pos]))+1),ease:Linear.easeNone},0));
        
    rt[pos] = rt[pos]-1;
        
    if(Number(rt[pos]===0))
    {
      remain = remain -1;
      wt[pos] = ttime+1-Number(at[pos])-Number(burst[pos]);
      avtat=avtat+ttime+1-at[pos];
      avwt=avwt+wt[pos];
    } 
   
    }
    
    avwt=avwt/n;
    avtat=avtat/n;
    $('.srtb1').click(function(){
  srtdetails();
});
    
    var srtdetails = function(){
   $('.srtp1').text('Average waiting time: '+avwt);
    $('.srtp2').text('Average turn around time: '+avtat);
   $('.srtb1 p').text(wt[0]);
    $('.srtb2 p').text(wt[1]);
    $('.srtb3 p').text(wt[2]);
    $('.srtb4 p').text(wt[3]);
}
}

var rrp1b=0,rrp2b=0,rrp3b=0,rrp4b=0,rrp1a=0,rrp2a=0,rrp3a=0,rrp4a=0;
function rr(){
    $('.all').remove();
    $('.ffs').remove();
    $('.ffsgame').remove();
    $('.sjf').remove();
    $('.sjfgame').remove();
    $('.ps').remove();
    $('.psgame').remove();
    $('.srt').remove();
    $('.srtgame').remove();
    
    TweenLite.set(".rr", {opacity:100,transition: "all 2s ease"});
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;

var drawNumber = function(){

    $('.bt1').text('Burst time: '+num1);
    $('.at1').text('Arrival time: '+num2);

    $('.bt2').text('Burst time: '+num3);
    $('.at2').text('Arrival time: '+num4);

    $('.bt3').text('Burst time: '+num5);
    $('.at3').text('Arrival time: '+num6);

    $('.bt4').text('Burst time: '+num7);
    $('.at4').text('Arrival time: '+num8);


    rrp1b = num1;
    rrp1a = num2;

    rrp2b = num3;
    rrp2a = num4;

    rrp3b = num5;
    rrp3a = num6;

    rrp4b = num7;
    rrp4a = num8;

}


$("#num1").on('mousemove change', function(){
  num1 = $(this).val();
  drawNumber();
});

$("#num2").on('mousemove change', function(){
  num2 = $(this).val();
  drawNumber();
});

$("#num3").on('mousemove change', function(){
  num3 = $(this).val();
  drawNumber();
});

$("#num4").on('mousemove change', function(){
  num4 = $(this).val();
  drawNumber();
});
$("#num5").on('mousemove change', function(){
  num5 = $(this).val();
  drawNumber();
});

$("#num6").on('mousemove change', function(){
  num6 = $(this).val();
  drawNumber();
});

$("#num7").on('mousemove change', function(){
  num7 = $(this).val();
  drawNumber();
});

$("#num8").on('mousemove change', function(){
  num8 = $(this).val();
  drawNumber();
});

    
    $('.rrb').click(function(){
        var t = new TimelineMax();
        
        t.staggerTo($('.rrmd1'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.rrmd2'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.rrmd3'),0.5, {
    opacity: 0,
    y: -1000,
    ease: Back.easeOut
  },
  0.08)
        .staggerTo($('.rrmd4'),0.5, {
    opacity: 0,
    y: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.rrplayer'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.rrb'),0.5, {
    opacity: 0,
    x: 1000,
    ease: Back.easeOut
  },
  0.08).staggerTo($('.rr'),0.5, {
    
            onComplete:rrgame,
            ease: Back.easeOut
  },
  0.08);
 });
    
    }  
function rrgame(){
    $('.rr').remove();
    TweenLite.set(".rrgame", {opacity:100,transition: "all 2s ease"}); 
     TweenLite.set(".rrwrap", {marginLeft:-80});
    TweenLite.set(".rrwrap", {marginTop: 0,transition: "all 2s ease"});
  var n=4,
      ttime = 0,
      remain=4,
      wt = [0,0,0,0],
      burst = [rrp1b,rrp2b,rrp3b,rrp4b],
      at = [rrp1a,rrp2a,rrp3a,rrp4a],
      rt = [0,0,0,0],
      i=0,
      j=0,
      f=0,
      fb1 = $('.rrb1'),
      fb2 = $('.rrb2'),
      fb3 = $('.rrb3'),
      fb4 = $('.rrb4'),
      avwt=0,
      avtat=0,
      pos=0,
      ts = 2,flag = 0;
    
    var fb = [fb1,fb2,fb3,fb4];
    var psw = [$('.rrw1'),$('.rrw2'),$('.rrw3'),$('.rrw4')];
 
     var t = new TimelineMax();
    
    for(i=0;i<n;i++)
  {
    rt[i]= Number(burst[i]);
  }
    
    
    
    for(ttime=0,i=0;remain!==0;)
    {
        
        for(j=0;j<n;j++)
    {
      if(at[j]<=ttime)
        {
        t.add(TweenMax.staggerTo(psw[j],0.001,{marginLeft:0,ease:Linear.easeNone},0));
        }
    }
        if(rt[i]<=ts && rt[i]>0)
    {
      ttime= ttime + Number(rt[i]);
      rt[i]=0;
      flag=1;
        if(f===0){
            t.delay(2);
            f = 1;
        }
        t.add(TweenMax.staggerTo(fb[i],1,{marginLeft:((screen.width-80)/Number(burst[i]))*((Number(burst[i])-Number(rt[i]))),ease:Linear.easeNone},0));
    }
    else if(rt[i]>0)
    {
        t.add(TweenMax.staggerTo(fb[i],2,{marginLeft:((screen.width-80)/Number(burst[i]))*((Number(burst[i])-Number(rt[i]))+2),ease:Linear.easeNone},0));
      rt[i]= Number(rt[i])-ts;
      ttime = ttime+ts;
    }
    if(rt[i]===0 && flag==1)
    {
      remain = remain-1;
      wt[i] = ttime-Number(at[i])-Number(burst[i]);
      avwt = avwt + wt[i];
      avtat= avtat + ttime-Number(at[i]);
      flag=0;
    }
    if(i==n-1){
      i=0;
    }
    else if(at[i+1]<=ttime){
      i = i+1;
}
    else{
        i=0;
    }
      
    }
    
    avwt=avwt/n;
    avtat=avtat/n;
    $('.rrb1').click(function(){
  rrdetails();
});
    
    var rrdetails = function(){
   $('.rrp1').text('Average waiting time: '+avwt);
    $('.rrp2').text('Average turn around time: '+avtat);
   $('.rrb1 p').text(wt[0]);
    $('.rrb2 p').text(wt[1]);
    $('.rrb3 p').text(wt[2]);
    $('.rrb4 p').text(wt[3]);
}
}