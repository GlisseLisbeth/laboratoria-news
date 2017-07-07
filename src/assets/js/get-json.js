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
