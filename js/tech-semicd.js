
var app_infos=[
  {
    show_title: true,
    title: "光電半導體領域應用",
    show_text: true,
    texts: ["光電半導體的應用主要為設備清洗，而熱噴塗在該領域有兩種工藝制程，分別為電漿噴塗與電弧噴塗其應用也不太相同，以電漿噴塗而言，所噴塗的材料為氧化鋁和氧化釔塗層，主要用來抵抗等離子的轟擊造成腔體的損壞。另外一種電弧式噴塗的工藝則是噴塗純鋁線，使腔體內部表面具有高粗糙度，經過尖端放電的效果來捕捉腔體內部的帶電粒子，防止這些粒子影響良率。",],
    show_lists: false,
    lists: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#content",
  data: {
  	contents: app_infos,
  }
});