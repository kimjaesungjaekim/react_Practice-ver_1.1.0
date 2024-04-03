/*
Node.js 기초 가이드 설명서
var express = require('express'); : node_modules 폴더에 있는 미리 구현한 라우팅 모듈을 가져온다.
var app = express(); : 새로운 라우터 객체를 만든다. 이 라우터 객체의 이름을 app으로 설정한다.

app.get('/', function(req, res) {   : 라우터 객체 app에서 get 함수를 이용해서 로직을 구현한다.
  res.send('hello world');            첫번째 parameter인 '/' 는 요청이 수행되는 주소 이다.
});                                   두번째 parameter인 function(req.res)는 콜백 함수이다.
                                      콜백함수란 다른 함수의 인자로서 활용되는 함수이며, 어떤 이벤트에 의해서 호출된다.
                                      여기서 req 는 요청객체이고, res는 응답 객체이다.
                                      res.send()는 클라이언트에 문자열로 응답하기 위한 함수이다.
                                      여기서 res.send('hello world')라고 했기 때문에, 화면에 hello world로 출력 되었다.


 Express 가이드 : https://expressjs.com/ko/guide/routing.html
 참고 블로그 : https://brunch.co.kr/@topherlee/27
*/


var express = require('express');
var app = express();

/*
Express는 HTTP 메소드에 해당하는 다음과 같은 라우팅 메소드를 지원합니다. 
get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, 
proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, 
patch, search 및 connect.
*/

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(4000);    // ex: localhost:4000  - 4000번 포트에서 연결을 들어라 !

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
  });