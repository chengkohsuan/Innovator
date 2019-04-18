var vm_topic=new Vue({
  el: "#content-top",
  data: {
    topic: "Flame Spray 火焰噴塗原理",
    text: "使用氣體作為燃料產生熱源，將噴塗材料加熱後形成熔融顆粒，再由高壓空氣帶往基材形成塗層，可以使用的材料相當廣泛，包含塑膠、金屬、陶瓷、陶金複合材料皆可使用，操作成本也是所有熱噴塗技術中相對親和的。",
    pic: "../../image/flame.png",
  }
});

// -----------------------------------------------------
var data_sidebar=[
  {
    page: "flame-guns.html",
    name: "Saint Gobain 噴槍",
  }
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "flame.html",
    tag_name: "火焰噴塗設備",
    sidemenu: data_sidebar,
  }
});

var data_guns=[
  {
    show_title: true,
    title: "Saint-Gobain Top Jet ＆ Master Jet火焰噴槍",
    show_text: true,
    text: "Saint-Gobain的Top Jet 2與Master Jet 2多功能火焰噴塗槍，可噴塗金屬線材和Flexicord（陶瓷或陶金包芯線材），可以調控馬達轉速，以低熔點金屬提供高速送線，或是高熔點材料的低速送線。輕巧的火焰槍可在室內或是現場進行操作，可適用於大面積工作或精密噴塗。",
    pics: ["../../image/img-2-flamegun-01.jpg","../../image/img-2-flamegun-02.jpg",],
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