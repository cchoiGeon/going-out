exports.index = function(fcss,fscript){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Agency - Start Bootstrap Theme</title>
            <!-- Favicon-->
            <link rel="icon" type="image/x-icon" href="favicon.ico" />
            <!-- Font Awesome icons (free version)-->
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            <!-- Google fonts-->
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
            <!-- Core theme CSS (includes Bootstrap)-->
            ${fcss}
        </head>
        <body id="page-top">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top"><img src="img1/navbar-logo.svg" alt="..." /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Masthead-->
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">HUFS</div>
                    <div class="masthead-heading text-uppercase">????????? ???????????? ?????? ?????? ????????????</div>
                    <a class="btn btn-primary btn-xl text-uppercase" href="/">????????????</a>
                </div>
            </header>
            <!-- Services-->
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">???????????? ???????????? 3?????? ?????? ???????????? ????????? ?????????!</h3>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">?????? ??????</h4>
                            <p class="text-muted">?????? ???????????? ??????</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">?????? ??????</h4>
                            <p class="text-muted">?????? ???????????? ??????</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">                                
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </a>
                            </span>
                            <h4 class="my-3">?????? ??????</h4>
                            <p class="text-muted">?????? ???????????? ??????</p>
                        </div>
                        <!-- ?????? ???????????? ?????? ??? -> ????????? ??? ???????????? ??????, js-->
                    </div>
                </div>
            </section>
            <!-- Portfolio Grid-->
            
            <!-- About-->
            <section class="page-section" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">About</h2>
                        <h3 class="section-subheading text-muted">?????? ????????????...</h3>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="img1/about/1.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2014-</h4>
                                    <h4 class="subheading">?????? ???????????? ??? ??????</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">2014 ?????? ??????</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="img1/about/2.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2019 ?????????</h4>
                                    <h4 class="subheading">2019 ????????? ?????? ????????????</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">2019 ????????? ?????? ???????????? ??????</p></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="img1/about/3.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2019 ?????????</h4>
                                    <h4 class="subheading">2019 ????????? ?????? ????????????</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">2019 ????????? ?????? ???????????? ??????</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src="img1/about/4.jpg" alt="..." /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2022 05</h4>
                                    <h4 class="subheading">2022 05 ?????? ????????????</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">2022 05 ?????? ???????????? ??????</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <h4>
                                    ??????
                                    <br />
                                    ?????????
                                    <br />
                                    ?
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- Clients-->
            <!-- hufs, hufstory, ????????????, ???????????? ????????? ?????? ?????? ?????? -->
            <div class="py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img1/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img1/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img1/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img1/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer-->
            <footer class="footer py-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-start">Copyright &copy; ?????? 2022</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-message"></i></a>
                            <!--?????????, facebook, notion, kakao ?????? ?????? ?????? ?????? icon ??????-->
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                            <!-- ????????????, ??????????????????????????? ????????? ????????????(???)-->
                        </div>
                    </div>
                </div>
            </footer>
            <!-- Bootstrap core JS-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Core theme JS-->
            ${fscript}
            <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
            <!-- * *                               SB Forms JS                               * *-->
            <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
            <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </body>
    </html>
    `
}