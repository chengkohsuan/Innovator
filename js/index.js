var data_card=[
  {
    href: "nav_bottom/HVOF/HVOF.html",
    picture: "image/home-pic-box-1.jpg",
    h3: "熱噴塗設備",
  },
  {
    href: "nav_bottom/asider/asider.html",
    picture: "image/home-pic-box-2.jpg",
    h3: "周邊輔助設備",
  },
  {
    href: "nav_top/tech.html",
    picture: "image/home-pic-box-3.jpg",
    h3: "相關技術應用",
  }
];

var vm_card=new Vue({
  el: "#content-bottom",
  data: {
    cont: data_card,
  }
});