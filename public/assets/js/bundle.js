(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const getNews = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',_ => {
    if (xhr.status != 200) callback(new Error("Error al obtener datos"));
    callback(null,xhr.response);
  });

  xhr.open('GET','api/news');
  xhr.responseType = 'json';
  xhr.send();
}

const getNew = (id,callback) => {
  $.get('api/news'+id,(data) => {
    if (data.status != 200) callback(new Error("Error al obtener de una noticia"));
    callback(null,data);
  })
}

const Header = (update) => {
  const header = $('<header></header>');
  const container = $('<div class="container-fluid"></div>');
  const nav = $(' <div class="navbar-header"></div>');
  const button = $('<button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><img src="assets/img/menu.png"></button>');
  const span = $('<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span> <span class="icon-bar"></span>');
  button.append(span);
  nav.append(button);
  const a = $('<a class="navbar-brand" href="#"><img src="assets/img/logoicon.png"></a>');
  nav.append(a);
  const collapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
  const list = $('<ul class="nav navbar-nav"><li class="active"><a href="#">Lo último <span class="sr-only">(current)</span></a></li><li><a href="#">Opinión</a></li><li><a href="#">Culturak</a></li></ul></li></ul>');
  const navbarLeft = $('<form class="navbar-form navbar-left"><div class="form-group"><input type="text" class="form-control" placeholder="Search"></div><button type="submit" class="btn btn-default">Submit</button></form>'
  );
  const navbarRight = $(
        '<ul class="nav navbar-nav navbar-right"><li><a href="#">Link</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Action</a></li><li><a href="#">Another action</a></li><li><a href="#">Something else here</a></li><li role="separator" class="divider"></li><li><a href="#">Separated link</a></li></ul></li></ul>');
  collapse.append(list);
  collapse.append(navbarLeft);
  collapse.append(navbarRight);
  nav.append(collapse);
  header.append(nav);
  container.append(nav);
  header.append(container);

  return header;
}

'use strict';
const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(Header());
  root.append(wrapper);
};

const state = {
  news:null,
  selectNew: null
}
$( _ => {
  getNews((err,data) => {
    if (err) console.log(err);
    console.log(data);
  //  data = state.news;
  //  const root = $("#root");
  //  render(root,data);
  });
});

},{}]},{},[1])
