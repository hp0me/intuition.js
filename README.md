##くわしくは↓のページをご覧ください</br>
http://hp0me.github.io/intuitionjs/

##About
・HTML5/Canvas上で動作するビジュアルプログラミングフレームワーク</br>
・独特なコーディングフローでCanvasの描画ルーティンワークをカット</br>
・プレイグラウンド用途（勉強、試し打ち、練習...etc）に特化</br>
・すべてのThing（基本オブジェクト）には位置・速度・加速度がある。</br>
・位置、速度、加速度はすべてベクトル（Vec2）で表現する

##■ Intutionフロー
・intuition() でお手軽オブジェクト生成・描画（引数なしでもサクっと(0,0)に●登場）</br>
・生成されたオブジェクトのすべては_thingsという変数に自動的に格納</br>
・毎フレームそれらのオブジェクトが位置・速度・加速度に応じて勝手に動く</br>
・オブジェクトはあまりに端にいったら（画面の見えないところから1000）自動的に消える

##■ カスタマイズ
・intuition(位置,速度,加速度)でそれぞれ位置・速度・加速度付きのオブジェクト生成</br>
・intuition(位置,速度)でそれぞれ位置・速度付きのオブジェクト生成</br>
・intuition(位置)で位置のみ付いたオブジェクト生成</br>
・画像がなくてもデフォルトの●が勝手にセット。ただし、obj.setImage("hoge.png")のようにセットもできる。</br>
・obj.pos.x , obj.vel.x , obj.acc.xといった具合にそれぞれのプロパティにアクセス可能</br>
・obj.scale.xといったようにすべてのThingにはVec2のサイズがあり、いじれる。</br>
・obj.edgeをtrueにすれば端に行った時に自動で反対側かが出てくる。</br>
・obj.pongをtrueにすれば端に行った時に自動で跳ね返る。

##Getting started
ファイルはindex.htmlとituition.jsとplayground.js。playground.js内にコードを書いていきましょう。</br>
start( )とupdate( )が基本です。詳しくはShowcaseをみて何となく掴みましょう。(todo)
