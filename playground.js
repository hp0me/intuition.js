var start = function(){
  //跳ねるボール
  var ball = make(v(0,0),v(2,0),v(0,0.044));
  ball.pong = true;

  //端で折り返す
  var obj = make(v(330,0),v(-1,0.3));
  obj.edge = true;
};

var update = function(){
  //なし
};


//以下、サンプルコードです。

/*基本1
var start = function(){
  var ball = make();
};
*/

/*基本2
var start = function(){
  var ball = make(v(50,50));
  make(v(150,150));
};
*/

/*基本3
var start = function(){
  var ball = make(v(50,50),v(1,0));
};
*/

/*基本4
var start = function(){
  var ball = make(v(50,50),v(0,0),v(0.03,0));
};
*/

/*基本5
var obj;
var start = function(){
  obj = make();
};

var update = function(){
  obj.pos.x += 1;
};
*/

/*基本6
var start = function(){
  var ball = make(v(50,50),v(5,0));
  ball.edge = true;
};
*/

/*基本7
var start = function(){
  var ball = make(v(10,50),v(0,0),v(0.05,0));
  ball.pong = true;
}
*/

/*オブジェクト１０００個
var start = function(){

  for(var i=0;i<1000;i++){
    var obj = make(
                v(rand(450),rand(300)),
                v(1+rand(1),1+rand(1)),
                v(0,0.0)
              );

    obj.gravity = 0.07;
    obj.pong = true;
  }
};

var update = function(){
  //なし
};

rand = function(num){
  return Math.random() * num;
}
*/


/*編み目
var start = function(){
  var y = 0;
  var x = 0;

  for(var i=0;i<100;i++){
    if(i % 5 == 0){
      y++;
      x = 0;
    }
    x++;

    var obj = make(v(x * 98 + y % 2 * 50, y * 30),v(1,1.5));

  obj.pong = true;
  }
};

var update = function(){
  //なし
};
*/


/*パーティクル風
var start = function(){
  for(var i=0;i<100;i++){
      var obj = make(v(0,0),v(i/17,i*0.03 + Math.random()*1.53));
  obj.pong = true;
  }
};

var update = function(){
  //なし
};
*/


//画像の差し替え
/*
var start = function(){
  var sprite = make(v(350,0));
  sprite.setImage("mandara.png");
};

var update = function(){
 //なし
};
*/



/*横切る何か
var num = 0.11;
var NUMBEROFTHINGS = 40;

var start = function(){
  for(var i=0;i<NUMBEROFTHINGS;i++){
    var densha = make(v(130,30));
    densha.setImage("circle.png");
  }

};

var update = function(){
  num *= 1.01;
  for(var i=0;i<NUMBEROFTHINGS;i++){
    _things[i].setScale(v(num/i - i*1.9,num -i*0.2));
  }
  if(num > 20000)num = 0.11;
};
*/

/*ぴんぽん
var start = function(){
  var obj = make(v(0,0),v(1,2.7));
  obj.edge = true;
};

var update = function(){
  //なし
};
*/

/*円軌道
var obj;
var degree = 0;
var rad = 0;
var center = v(450,100);
var r = 80;

var start = function(){
  obj = make();
  obj.edge = true;
};

var update = function(){
  degree += 1;
  rad = degree * Math.PI / 180;
  obj.pos.x = Math.cos(rad) * r + center.x;
  obj.pos.y = Math.sin(rad) * r + center.y;
};
*/


/*サイン
var obj;
var degree = 0;
var rad = 0;

var start = function(){
  obj = make();
  obj.edge = true;
};

var update = function(){
  obj.pos.x += 1;

  degree += 1;
  rad = degree * Math.PI / 180;
  obj.pos.y = Math.sin(rad) * 80 + 100;

};


*/

/*弾幕
var DANMAKUNUM = 30;
var DANMAKUDEGREEINC = 12;
var DANMAKUINTERVAL = 50;
var timerCurrent = 0;
var timerMax = DANMAKUINTERVAL;


var start = function() {

  for(var i =0; i<DANMAKUNUM;i++){
    make(v(200,180));
    _things[i].angle = i * DANMAKUDEGREEINC +45;
    _things[i].vel.x = Math.cos(Math.PI / 180 * _things[i].angle) * 1;
    _things[i].vel.y = Math.sin(Math.PI / 180 * _things[i].angle) * 1;
  }

}

var update = function(){
timerCurrent++;
if(timerCurrent >= timerMax){
  for(var i =0; i<DANMAKUNUM;i++){
    var bullet = make(v(200,180));
    bullet.angle = i * DANMAKUDEGREEINC +45;
    bullet.vel.x = Math.cos(Math.PI / 180 * bullet.angle) * 1;
    bullet.vel.y = Math.sin(Math.PI / 180 * bullet.angle) * 1;
  }
  timerCurrent = 0;
}
};
*/


