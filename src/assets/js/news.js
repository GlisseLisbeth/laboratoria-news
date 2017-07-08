
const News = (update) => {
    const sectionPrimary = $('<section class="primary"></div>');
    const titlePrimary = $('<div><h1>'+state.news.title+'</h1><div>');
    const imgPrimary = $('<div><img src="assets/img/">'+state.news.img+'<div>');

    sectionPrimary.append(titlePrimary);
    sectionPrimary.append(imgPrimary);


    // for( var i = 1; i <32; i++){
    //   $.getJSON( "/api/news/"+  i, function( dataNews ) {
    //       state.news= dataNews;
    //   });
    //   const sectionSecondary = $('<section class="'+state.news.type+'"></div>');
    //   const titleSecondary = $('<div><h1>'+state.news.title+'</h1><div>');
    //   const imgSecondary = $('<div><img src="assets/img/">'+state.news.img+'<div>');
    //   sectionSecondary.append(titleSecondary);
    //   sectionSecondary.append(imgSecondary)
    // }


    return sectionPrimary;
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
