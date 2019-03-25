
var data_guns=[
  {
    show_title: true,
    title: "Saint-Gobain Top Jet ＆ Master Jet火焰噴槍",
    show_sub: false,
    sub:"",
    show_text: true,
    text: "Saint-Gobain的Top Jet 2與Master Jet 2多功能火焰噴塗槍，可噴塗金屬線材和Flexicord（陶瓷或陶金包芯線材），可以調控馬達轉速，以低熔點金屬提供高速送線，或是高熔點材料的低速送線。輕巧的火焰槍可在室內或是現場進行操作，可適用於大面積工作或精密噴塗。",
    show_features: true,
    features: ["Top Jet 2具備高扭力氣動馬達，擁有五檔變速箱，可以讓使用者在定速度下以最高扭矩工作","Master Jet 2以電動馬達輸送線材降低耗氣量，搭配電動控制器可精確監控送線狀態"],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#content_guns",
  data: {
  products: data_guns,
  }
});