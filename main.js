// 기본 세팅
const express = require("express");
const server = express();
const qs = require("querystring");
const mysql = require('mysql');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
// 모듈 불러오기
const overlap = require("./overlapJS/overlap");
const repeatscript = require("./overlapJS/overlapscript");
const repeatcss = require('./overlapJS/overlapcss');
const fristpage = require('./fristpageJS/fristpage');
const fcss = require("./fristpageJS/fristpagecss");
const fscript = require("./fristpageJS/fristpagescript");
const profilebody = require('./myprofileJS/profilebody');
const profilescript = require('./myprofileJS/profilescript');
const indexbody = require('./indexJS/indexbody');
const myprofile = require('./myprofileJS/myprofile');
const myprofilecss = require('./myprofileJS/myprofilecss');
const userlogin = require('./loginJS/login');
const userregister = require('./register');
const matching = require('./matchingJS/matching');
const matchingchatting = require('./matchingJS/matchingprofile');

// db 설정
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'GoingOut'
});
db.connect();

//login,logout 버튼 구현
var loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`;
var logoutbutton = '';  
 
function logintrue(req,res){
  if(req.session.login){
    loginbutton = '';
    logoutbutton = `<li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="/logout_process">로그아웃</a></li>`;
  }else{
    loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
      <li><a class="dropdown-item" href="/register">회원가입</a></li>`;
    logoutbutton = ''
  }
}

// use 메서드 사용
server.use(bodyParser.urlencoded({ extended: false}));
server.use(express.static('assets'));
server.use(session({
  secret: 'q1321weff@45%$',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))


// 홍보페이지
server.get("/fristpage", (req, res) => {
  res.send(fristpage.index(fcss,fscript));
}); 

// 홈
server.get("/", (req, res) => {
  db.query('SELECT * FROM profile',function(err,profile){
    logintrue(req,res)
    res.send(overlap.repeat(repeatcss,indexbody(3),``,repeatscript,loginbutton,logoutbutton));
})
}); // 바디 설정하기


// 프로필 설정 
server.get("/profileFriend", (req, res) => {
  logintrue(req,res)
  res.send(overlap.repeat(repeatcss,profilebody.Friend,profilescript,repeatscript,loginbutton,logoutbutton));
});
server.post("/profileFriend_process",(req, res) => { 
  res.send();
});
server.get("/profileGroup", (req, res) => {
  logintrue(req,res)
  res.send(overlap.repeat(repeatcss,profilebody.Group,profilescript,repeatscript,loginbutton,logoutbutton));
});
server.post("/profileGroup_process",(req, res) => { 
  res.send();
});
server.get("/profileLove", (req, res) => {
  logintrue(req,res)
  if(req.session.useprofilelove){
    var yes = '재신청'
  }else{
    var yes = '신청완료'
  }
  res.send(overlap.repeat(repeatcss,profilebody.Love(yes),profilescript,repeatscript,loginbutton,logoutbutton));
});
server.post("/profileLove_process",(req, res) => { 
  var post = req.body
  if(req.session.useprofilelove){
    db.query('UPDATE profile SET age=?,campus=?,ideal=?,idealfrist=?,idealsecond=?,idealthird=?,mbti=?,mbtifrist=?,mbtisecond=?,mbtithird=?,introduce=?,meeting=?,movie=?,interests=?,youtube=? WHERE userid=?',
    [post.older,post.campus,post.idealtype,post.fristtype,post.secondtype,post.thirdtype,post.mbti, post.fristPrefermbti,post.secondPrefermbti,post.thirdPrefermbti,post.selfIntroduction,post.selfMeeting,post.movie,post.interests,post.youtube,req.session.userid],
    function(err,result){
      res.redirect('/');
    })
    return false;
  }else{
  db.query('INSERT INTO profile(userid,age,campus,ideal,idealfrist,idealsecond,idealthird,mbti,mbtifrist,mbtisecond,mbtithird,introduce,meeting,movie,interests,youtube) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  ,[req.session.userid,post.older,post.campus,post.idealtype,post.fristtype,post.secondtype,post.thirdtype,post.mbti, post.fristPrefermbti,post.secondPrefermbti,post.thirdPrefermbti,post.selfIntroduction,post.selfMeeting,post.movie,post.interests,post.youtube]
  ,function(err,result){
    res.redirect('/');
  })
}
});



// 내 프로필 보기
server.get("/myprofile", (req, res) => {
  logintrue(req,res)
  db.query('SELECT * FROM profile',function(err,profile){
    for(var i = 0; i < profile.length; i++){
      if(profile[i].userid === req.session.userid){
        res.send(myprofile.index(repeatcss,myprofilecss,myprofile.div(profile[i].age,profile[i].campus,profile[i].ideal,profile[i].idealfrist,
          profile[i].idealsecond,profile[i].idealthird,profile[i].mbti,profile[i].mbtifrist,profile[i].mbtisecond,profile[i].mbtithird,profile[i].introduce,
          profile[i].meeting,profile[i].movie,profile[i].interests,profile[i].youtube,req.session.userid),'',repeatscript,loginbutton,logoutbutton));
      }
      return false;
    }
    res.redirect('/profileLove');
  })
});


// 매칭
server.get("/matchingLove", (req, res) => {
  logintrue(req,res)
  res.send(overlap.repeat(repeatcss,matching.Love,``,repeatscript,loginbutton,logoutbutton));
});
server.get("/matchingLove_profile",(req,res) => {
  logintrue(req,res)
  db.query('SELECT * FROM profile',function(err,profile){
    for(var i = 0; i < profile.length; i++){
      if(profile[i].userid === req.session.userid){
        res.send(matchingchatting(profile[i].age,profile[i].campus,profile[i].ideal,profile[i].mbti))
        return false;
      }
    }
    res.send('who?');
  });
});
server.get("/matchingFreind", (req, res) => { 
  res.send();
});
server.get("/matchingGroup", (req, res) => { 
  res.send();
});


//회원가입
server.get("/register", (req, res) => {
  res.send(userregister(repeatcss,repeatscript));
});

server.post("/register_process",(req,res) =>{
  var post = req.body
  db.query('SELECT * FROM signup',function(err,result){
    for(var i = 0; i < result.length; i++){
      if(result[i].id === post.id){
        console.log('사용 중인 아이디입니다')
        res.redirect('/register');
      }
      return false;
    }
    if(post.password === post.checkpassword){
      db.query('INSERT INTO signup(name,id,password) VALUES(?,?,?)',[post.name, post.id,post.password],function(err2,result2){
        res.redirect('/login');
      });
    }else{
      res.redirect('/register');
    }
  })
});

//로그인
server.get("/login", (req, res) => {
  res.send(userlogin(repeatcss,repeatscript));
});

server.post("/login_process",(req,res) =>{
  var post = req.body
  loginId = post.id;
  loginpassword = post.password;
  db.query('SELECT * FROM signup',function(err2,result){
    db.query('SELECT * FROM profile',function(err,profile){
    for(var i = 0; i < result.length; i++){
      if(result[i].id === loginId && result[i].password === loginpassword){
        req.session.userid = result[i].id;
        req.session.userpassword = result[i].password;
        req.session.username = result[i].name;
        req.session.login = true;
        if(profile[i].userid === result[i].id){
          req.session.useprofilelove = true;
        }
        req.session.save(function(){
        res.redirect('/');
        });
        return false;
      }
    }
    res.redirect('/login');
  });
  });
});

server.get("/logout_process",(req,res) => {
  req.session.destroy(function(err){
    res.redirect('/');
  })
});

//게시판
server.get("/board", (req, res) => { 
  res.send();
});

//신고하기
server.get("/report", (req, res) => { 
  res.send();
});

server.listen(3000);