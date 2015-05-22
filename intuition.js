//(function( window, undefined ) {

//Canvasを取得
var canvas,ctx;
canvas = document.getElementById('playground');
ctx = canvas.getContext ('2d');

//_thingsは生成したすべてのオブジェクトを入れる配列
var _things = [];

//todo
var COLLISION_ON = 0;

//ベクトルオブジェクト
var Vec2 = function(x,y){
  this.x = x;
  this.y = y;
}

//ベクトル足し算
Vec2.prototype.add = function(target){
  this.x += target.x;
  this.y += target.y;
};

//ベクトル引き算
Vec2.prototype.sub = function(target){
  this.x -= target.x;
  this.y -= target.y;
};

//ベクトル生成
var v = function(x,y){
  var res = new Vec2(x,y);
  return res;
}

//画面サイズ取得&Canvasに適応
var winSize = v(0,0);
winSize.x = ctx.canvas.clientWidth;
winSize.y = ctx.canvas.clientHeight;


//オブジェクト生成 (位置,速度,加速度)
var make = function(pos,vel,acc){

  //引数可変
  for(var i=0;i<3;i++){
    if(arguments[i] == null){
      arguments[i] = v(0,0);
    }
  }
  //生成
  var thing = new Thing(arguments[0],arguments[1],arguments[2]);
  _things.push(thing);
  return thing;
}



//基本オブジェクト (位置,速度,加速度)
var Thing = function(pos,vel,acc){

  //位置
  this.pos = pos;

  //速度
  this.vel = vel;

  //加速度
  this.acc = acc;

  //HTML5 imageをnew
  this.image = new Image();
  this.image.src = "images/thing.png";

  //角度
  this.angle = 0;

  //1で100%
  this.width = 1;
  this.height = 1;

  //衝突判定用(todo)
  this.colliderTag = "thing";
  this.tag = "thing";

  //trueなら端から折り返す
  this.edge = false;

  //trueなら端からバウンド
  this.pong = false;

  //0じゃなければ重力がかかる（y方向）
  this.gravity = 0;
}


//画像をセットする
Thing.prototype.setImage = function(path){
  this.image.src = path;
}

//衝突判定（todo）
Thing.prototype.collisionCheck = function(target){
  if(
    Math.abs(this.pos.x - target.pos.x) < this.image.width/2 + target.image.width/2 //横の判定
    &&
    Math.abs(this.pos.y - target.pos.y) < this.image.height/2 + target.image.height/2 //縦の判定
    &&
    target.tag == this.colliderTag
  ){
    this.onCollisionEnter();
  }
};

//衝突判定（todo）
Thing.prototype.onCollisionEnter = function(target){
};

//端に来た時（折り返し）
Thing.prototype.onEdge = function(){
    if(this.pos.x > winSize.x)this.pos.x =0;
    if(this.pos.x < 0)this.pos.x = winSize.x;
    if(this.pos.y > winSize.y)this.pos.y =0;
    if(this.pos.y < 0)this.pos.y = winSize.y;
};

//端に来た時（バウンド）
Thing.prototype.onPong = function(){
    if(this.pos.x > winSize.x)this.vel.x *= -1;
    if(this.pos.x < 0)this.vel.x *= -1;
    if(this.pos.y > winSize.y)this.vel.y *= -1;
    if(this.pos.y < 0)this.vel.y *= -1;
};

//サイズをセット（Vec2）
Thing.prototype.setScale = function(scale){
    this.width = scale.x;
    this.height = scale.y;
};


//メインループの準備
var startOnceFlg = 0;
setInterval ('draw()', 1);

//メインループ
var draw = function() {

  //最初の一回だけstartを呼びたい
  if(startOnceFlg == 0){
    startOnceFlg = 1;
    if(typeof start == "function")start();
  }

  if(typeof update == "function"){
    update();
  }

  //Canvasをクリア
  ctx.clearRect (0 , 0 , winSize.x , winSize.y);

  //生成されたオブジェクトの分だけループ
  for(var i = 0 ; i<_things.length; i++){

    //meに入れておく（参照）
    var me = _things[i];

    //速度に加速度を足し、位置に速度を足し、描画
    me.vel.add(me.acc);
    me.pos.add(me.vel);
    ctx.drawImage(me.image , me.pos.x , me.pos.y,me.image.width * me.width,me.image.height * me.height);

    //あまりに端にいきすぎた場合、削除（-1000まで）
    var winOffs = -1000;
    if(me.pos.x < winOffs || me.pos.x > winSize.x - winOffs || me.pos.y < winOffs || me.pos.y > winSize.y - winOffs){
      delete me;
      _things.splice(i,1);
    }

    //衝突判定（todo）
    if(COLLISION_ON == 1){
      for(var j = 0 ; j<_things.length; j++){
        if(i == j)continue;
        me.collisionCheck(_things[j]);
      }
    }

    //端で折り返す
    if(me.edge == true){
      me.onEdge();
    }

    //端でバウンド
    if(me.pong == true){
      me.onPong();
    }

    //重力
    if(me.gravity != 0){
      me.vel.y += me.gravity;
    }
  }

};


//})( window );
