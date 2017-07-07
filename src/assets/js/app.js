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
