exports.div = function(a,b,c,d,e,f,g,h,i,j,k,l,n,m,o,id){
    return `
    <div id="layoutSidenav_content">
    <main>
        <div class="container-fluid px-4">
                <div id='container'>
                    <div id='box-left'>
                        연애매칭 프로필<br>
                        <br>
                        <br>
                        사용자 아이디 : ${id}
                        <br>
                        <br>
                        <br>
                        선호하는 나이 : ${a}<br>
                        <br>
                        <br>
                        선호하는 캠퍼스 : ${b}<br>
                        <br>
                        <br>
                        나의 이상형 : ${c}<br>
                        <br>
                        <br>
                        선호하는 이상형 : 1 :${d} 2:${e} 3:${f} <br>
                        <br>
                        <br>
                        나의 mbti :${g}<br>
                        <br>
                        <br>
                        선호하는 mbti : 1: ${h} 2: ${i} 3:${j}<br>
                        <br>
                        <br>
                        '나'를 한 줄로 소개한다면? : ${k}<br>
                        <br>
                        <br>
                        '만남'을 한 줄로 정의한다면? : ${l}<br>
                        <br>
                        <br>
                        영화를 볼 때 주로 보는 장르는? : ${n}<br>
                        <br>
                        <br>
                        최근 관심사는? : ${m}<br>
                        <br>
                        <br>
                        유튜브로는 주로 보는 영상은? : ${o}<br>
                        <br>
                        <br>
                        <input type="button" value="초기화">
                    </div>
                    <div id='box-center'>
                        친구매칭 프로필<br>
                        <br>
                        <br>
                        선호하는 나이 :  <br>
                        <br>
                        <br>
                        선호하는 캠퍼스: <br>
                        <br>
                        <br>
                        나의 취미 : <br>
                        <br>
                        <br>
                        선호하는 취미: <br>
                        <br>
                        <br>
                        나의 mbti: <br>
                        <br>
                        <br>
                        선호하는 mbti: <br>
                        <br>
                        <br>
                        '나'를 한 줄로 소개한다면? : <br>
                        <br>
                        <br>
                        '만남'을 한 줄로 정의한다면? :<br>
                        <br>
                        <br>
                        <input type="button" value="초기화">
                    </div>
                    <div id='box-right'>
                        그룹매칭 프로필<br>
                        <br>
                        <br>
                        선호하는 나이 : <br>
                        <br>
                        <br>
                        선호하는 캠퍼스 :<br>
                        <br>
                        <br>
                        나의 이상형 : <br>
                        <br>
                        <br>
                        선호하는 이상형 : <br>
                        <br>
                        <br>
                        나의 mbti :<br>
                        <br>
                        <br>
                        선호하는 mbti :<br>
                        <br>
                        <br>
                        '나'를 한 줄로 소개한다면? : <br>
                        <br>
                        <br>
                        '만남'을 한 줄로 정의한다면? :<br>
                        <br>
                        <br>
                        <input type="submit" value="초기화">
                    </div>
                </div>
        </div>
    </main>`
}
exports.index =function(thiscss,thiscss2,body,usescript,thisscript,loginfalse=`<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`,logout=""){
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>외출</title>
            <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
            ${thiscss}
            ${thiscss2}
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        </head>
        <body class="sb-nav-fixed">
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <!-- Navbar Brand-->
                <a class="navbar-brand ps-3" href="/">외출</a>
                <!-- Sidebar Toggle-->
                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
                <!-- Navbar Search-->
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                </form>
                <!-- Navbar-->
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            ${loginfalse}
                            ${logout}
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                <div class="sb-sidenav-menu-heading">Core</div>
                                <a class="nav-link" href="/">
                                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                    HOME
                                </a>
                                <div class="sb-sidenav-menu-heading">Core</div>
                                <a class="nav-link" href="/myprofile">
                                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                    내 프로필,정보 보기
                                </a>
                                <div class="sb-sidenav-menu-heading">Interface</div>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    프로필 작성하기
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="/profileLove">연인매칭 프로필</a>
                                        <a class="nav-link" href="/profileGroup">그룹매칭 프로필</a>
                                        <a class="nav-link" href="/profileFriend">친구매칭 프로필</a>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                    매칭하기 
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a class="nav-link" href="/matchingLove">연인매칭</a>
                                        <a class="nav-link" href="/matchingGroup">그룹매칭</a>
                                        <a class="nav-link" href="/matchingFreind">친구매칭</a>
                                    </nav>
                                </div>
                                <div class="sb-sidenav-menu-heading">Addons</div>
                                <a class="nav-link" href="/board">
                                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                    게시판
                                </a>
                                <a class="nav-link" href="/report">
                                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                    신고하기
                                </a>
                            </div>
                        </div>
                        <div class="sb-sidenav-footer">
                            <div class="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                ${body}
                <div id="layoutSidenav_content">
                    <footer class="py-4 bg-light mt-auto">
                        <div class="container-fluid px-4">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright &copy; Your Website 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            ${usescript}
            ${thisscript}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
            <script src="js/scripts.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
        </body>
    </html>
    `

}