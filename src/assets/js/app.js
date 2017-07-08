'use strict';
const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_=>{render(root)}));
  wrapper.append(News(_=>{render(root)}));
  wrapper.append(News(_=>{render(root)}));
  root.append(wrapper);
};

const state = {
  news:null,
  selectNews:0,
  categories: null
}
$( _ => {
  $.getJSON( "/api/categories/", function( dataCategories ) {
      state.categories = dataCategories;
      console.log(state.categories);
      render($('#root'))
    });
  $.getJSON( "/api/news/"+state.selectNews, function( dataNews ) {
      state.news= dataNews;
      console.log(state.news);
      render($('#root'))
  });

});
