const Header = (update) => {
  'use strict';
  var listMenu = ["Lo último", "Opinión", "Cultura", "Perú", "Tecnología", "Mundo", "Economía", "Lyfestyle", "Deporte"];

  const header = $('<header></header>');
  const nav = $('<nav class="navbar navbar-fixed-top"></nav>');
  const container  = $('<div class="container-fluid"></div>');
  const navHeader  = $('<div class="navbar-header"></div>');
  const btntoggle = $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>');
  const anchor = $('<a class="navbar-brand hidden-xs" href="#"></a>');
  const spanNavigation = $('<span class="sr-only">Toggle navigation</span>');
  const spanIcon = $('<span class="glyphicon glyphicon-align-justify" ></span>');
  const imgLogo = $('<img src="assets/img/logoicon.png" style="height:50px;" alt="">');
  const section = $('<span><img src="assets/img/menu.png">SECTIONS</span>');
  const collapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
  const navBarNav = $('<ul class="nav navbar-nav hidden-xs"></ul>');
  const active = $('<li class="active"></li>');
  const search = $('<span><img src="assets/img/search.png">SEARCH</span>');
  const hr  = $('<hr>');
  const divLogoDesktop = $('<div class="text-center hidden-xs"></div>');
  const imgLogoDesktop = $('<img src="assets/img/logoicon.png">');
  const dateText = $('<div class="date-textt"></div>');
  const spanDate = $('<span class="">Lunes, Junio 12 de 2017</span>');
  const spanSpace =$('<span>|</span>');
  const spanClima = $('<span class=""><img src="assets/img/cloud.png"></span>');
  const menuDesktop = $('<div class="hidden-xs menu-desktop"></div>')
  const listaMenuDesktop = $('<ul></ul>');
  listMenu.forEach( (elemento) => {
    listaMenuDesktop.append('<li>'+elemento+'</li>');
  });

  const navBarRight = $('<ul class="nav navbar-nav navbar-right hidden-xs"></ul>');
  const listnavBarRight1 = $('<li></li>');
  const imgFb = $('<img src="assets/img/fb.png" alt="">');
  const listnavBarRight2 = $('<li></li>');
  const imgTwitter = $('<img src="assets/img/tw.png" alt="">');
  const listnavBarRight3 = $('<li></li>');
  const imgLinkedInd = $('<img src="assets/img/in.png" alt="">');
  const menu = $('<ul class="hidden-md hidden-lg hidden-sm"></ul>');


  listMenu.forEach( (elemento) => {
    menu.append('<li>'+elemento+'</li>');
  });


  header.append(nav);
  nav.append(container);
  container.append(navHeader);
  navHeader.append(btntoggle);
  navHeader.append(anchor);
  btntoggle.append(spanNavigation);
  btntoggle.append(spanIcon);
  btntoggle.append(imgLogo);
  anchor.append(section);
  container.append(collapse);
  container.append(hr);
  collapse.append(navBarNav);
  navBarNav.append(active);
  active.append(search);
  collapse.append(navBarRight);
  navBarRight.append(listnavBarRight1);
  navBarRight.append(listnavBarRight2);
  navBarRight.append(listnavBarRight3);
  listnavBarRight1.append(imgFb);
  listnavBarRight2.append(imgTwitter);
  listnavBarRight3.append(imgLinkedInd);
  collapse.append(menu);
  nav.append(divLogoDesktop);
  divLogoDesktop.append(imgLogoDesktop);
  dateText.append(spanDate);
  dateText.append(spanSpace);
  dateText.append(spanClima);
  divLogoDesktop.append(dateText);
  menuDesktop.append(listaMenuDesktop);
  divLogoDesktop.append(menuDesktop);

  return header;
}
