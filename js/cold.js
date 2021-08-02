var vm_topic=new Vue({
  el: "#content-top",
  data: {
    topic: "Cold Spray 冷氣動力噴塗原理",
    text: "冷氣動力噴塗為熱噴塗領域中最新的工藝製程，材料顆粒在噴塗的過程中並不會被熔融，而是將顆粒加速至超音速後，使顆粒超過臨界速度而產生塑性變形被覆於基材上。使用冷氣動力噴塗所製備出來的塗層具有低孔隙率、低氧化物含量、高鍵結強度、高堆積效率等優點，而製備的塗層在機械性質與物理性質幾乎與原基材相同，故近年來有作為修補破損部件之用，在追求環保的時代，為節省資源消耗的目標提供新的解決方案。",
    vedio: "https://www.youtube.com/embed/hFwqt276YWA",
  }
});

var data_card=[
  {
    href: "cold-impact.html",
    picture: "../../image/cold-impact.png",
    h3: "Impact冷氣動力噴塗系統",
  },
  {
    href: "cold-app.html",
    picture: "../../image/cold-app.png",
    h3: "Cold Spray產品應用",
  },
  {
    href: "cold-evocsii.html",
    picture: "../../image/cold-evo.png",
    h3: "Impact EvoCSII",
  },
  {
    href: "cold-equipments.html",
    picture: "../../image/cold-equip.png",
    h3: "材料及設備選擇",
  },
];

var vm_card=new Vue({
  el: "#content-bottom",
  data: {
    cont: data_card,
  }
});

// -----------------------------------------------------
var data_sidebar=[
  {
    page: "cold-impact.html",
    name: "Impact 噴塗系統",
  },
  {
    page: "cold-app.html",
    name: "Cold Spray產品應用",
  },
  {
    page: "cold-evocsii.html",
    name: "Impact EvoCSII",
  },
  {
    page: "cold-equipments.html",
    name: "材料及設備選擇",
  },
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "cold.html",
    tag_name: "冷氣動力噴塗設備",
    sidemenu: data_sidebar,
  }
});
// -----------------------------------------------------
var data_impact=[
  {
    show_title: true,
    title: "Impact 冷氣動力噴塗系統",
    show_text: true,
    text: "與其他熱噴塗製程相比，冷氣動力噴塗具有超高速動能使材料不會熔化，使製備出來的塗層具備高堆積效率、低孔隙率、低氧化物含量的優點。也因為材料不熔化的特性，塗層對基底材料的熱影響較低，塗層的物理和化學特性幾乎與材料本身相同。高動能的顆粒在與基材衝擊的過程中，產生高度變形，而形成均勻、緻密的塗層，塗層厚度範圍從幾微米到幾釐米不等。Impact冷氣動力噴塗系統以最新技術將氣體（氮氣或氦氣）送入噴槍中，壓力高達60 bar，並在噴槍艙體內加熱至最高溫度1100度，通過送粉機將噴塗粉末注入噴嘴的匯聚區域，讓顆粒在氣流中被加速到高達1200 m/s的速度，使顆粒撞擊到基材時能產生形變附著在基材表面，形成氧化物含量極低的塗層。",
    pics: ["../../image/img-2-impact-01.jpg","../../image/img-2-impact-02.jpg","../../image/img-2-impact-03.jpg"],
    show_features: true,
    features: ["直覺的使用者介面，方便操作和監控製程中所有參數","參數管理系統，可記錄所有的參數來確保品質的穩定","系統可進行操作權限分級設定","可連接數個送粉機","可進行網路連線，將資料上傳至資料庫，進行管理與分析"],
    show_specs: false,
    specs: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#content_impact",
  data: {
  products: data_impact,
  }
});
// -----------------------------------------------------
var data_app=[
  {
    show_title: true,
    title: "Cold Spray 產品應用",
    show_text: false,
    text: "",
    pics: [],
    show_features: false,
    features: [""],
    show_specs: false,
    specs: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#content_app",
  data: {
  products: data_app,
  }
});

var data_apptype=[
  {
    href: "https://impact-innovations.com/en/applications/orthogrid/",
    img: "../../image/img-2-cold-app-03.png",
    type: "AEROSPACE",
    name: "Orthogrid",
  },
  {
    href: "https://impact-innovations.com/en/applications/combustion-chamber/",
    img: "../../image/img-2-cold-app-04.png",
    type: "AEROSPACE",
    name: "Combustion Chamber",
  },
  {
    href: "https://impact-innovations.com/en/applications/rocket-nozzle/",
    img: "../../image/img-2-cold-app-05.png",
    type: "AEROSPACE",
    name: "Rocket Nozzle",
  },
  {
    href: "https://impact-innovations.com/en/applications/casing-components/",
    img: "../../image/img-2-cold-app-06.png",
    type: "INDUSTRY",
    name: "Casing Component",
  },
  {
    href: "https://impact-innovations.com/en/applications/cold-sprayed-hybrid-heatsink/",
    img: "../../image/img-2-cold-app-07.png",
    type: "ELECTRIC POWER INDUSTRY",
    name: "Hybrid-Heatsink",
  },
  {
    href: "https://impact-innovations.com/en/applications/engine-crankcase/",
    img: "../../image/img-2-cold-app-08.png",
    type: "AUTOMOTIVEINDUSTRY",
    name: "Engine Crankcase",
  },
  {
    href: "https://impact-innovations.com/en/applications/busbar/",
    img: "../../image/img-2-cold-app-09.png",
    type: "ELECTRICAL ENGINEERING",
    name: "Busbars",
  },
  {
    href: "https://impact-innovations.com/en/applications/sputtering-target/",
    img: "../../image/img-2-cold-app-10.png",
    type: "GLASS INDUSTRY",
    name: "Sputtering Target",
  },
  {
    href: "https://impact-innovations.com/en/applications/frying-pan/",
    img: "../../image/cold-cookwear.png",
    type: "HOUSEHOLD",
    name: "Cookware",
  },
  ];

var vm_1_3=new Vue({
  el: "#coldspray_app",
  data: {
    cont: data_apptype,
  }
});
// -----------------------------------------------------
var data_evocsii=[
  {
    show_title: true,
    title: "IMPACT EvoCSII：最新一代冷氣體動力噴塗系统",
    show_text: true,
    text: "新一代的冷氣體動力噴塗系統Impact EvoCSII。該尖端系統提供更多傳感器，從而在冷噴塗過程中提供最佳監控。由於新開發和改進的衝擊EvoCSII系統組件，可以實現完美的冷噴塗塗層！",
    image: "../../image/cold-evocsii.png",
    pics: ["../../image/cold-evocsii.png"],
    show_features: true,
    features: ["各單元部件的可耐壓力提高","電子控制和氣體管理裝置→ 100 bar","送粉機→ 60 bar或80 bar","預熱裝置→ 100 bar","Cold Spray噴槍5/8 EvoCSII→ 50 bar","新型Cold Spray噴槍6/11 EvoCSII→ 60 bar","Cold Spray噴槍5/8 EvoCSII最高工作參數50 bar/800℃","新型Cold Spray噴槍6/11 EvoCSII最高工作參數50 bar/1100℃及60 bar/1000℃","工藝製程氣體氮氣或氦氣（或兩者混合）"],
    show_specs: false,
    specs: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#content_evocsii",
  data: {
  products: data_evocsii,
  }
});

var data_systemitem=[
  {
    href: "https://impact-innovations.com/en/portfolio-item/cold-spray-guns/",
    img: "../../image/cold-611gun.png",
    name: "Cold Spray 噴槍",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/impact-powder-feeder-cold-spray/",
    img: "../../image/cold-feeder.png",
    name: "送粉機",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/impact-control-unit-cold-spray/",
    img: "../../image/cold-system.png",
    name: "控制器",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/impact-control-panel-cold-spray/",
    img: "../../image/cold-control.png",
    name: "人機介面",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/impact-water-cooling-cold-spray/",
    img: "../../image/cold-cooler.png",
    name: "冰水機",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/impact-ph-unit-evocsii/",
    img: "../../image/cold-phunit.png",
    name: "粉末預熱裝置",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/additional-components-for-impact-cold-spray-guns/",
    img: "../../image/cold-gunacc.png",
    name: "內徑噴槍",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/additional-components-for-impact-powder-feeder-cold-spray/",
    img: "../../image/cold-feederacc.png",
    name: "送粉套件",
  },
  {
    href: "https://impact-innovations.com/en/portfolio-item/controlling-and-measuring-cold-spray/",
    img: "../../image/cold-measuring.png",
    name: "其他配件",
  },
  ];

  var vm_1_4=new Vue({
  el: "#coldspray_product",
  data: {
    cont: data_systemitem,
  }
});
// -----------------------------------------------------
var data_equipments=[
  {
    show_title: true,
    title: "材料及設備選擇",
    show_text: false,
    text: "",
    pics: [""],
    show_features: false,
    features: [""],
    show_specs: false,
    specs: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#content_equipments",
  data: {
  products: data_equipments,
  }
});

var data_al=[
  {
    href: "https://impact-innovations.com/en/materials/aluminum/",
    img: "../../image/cold-aluminum.png",
    name: "Al",
  },
  {
    href: "https://impact-innovations.com/en/materials/aa2024/",
    img: "../../image/cold-aa2024.png",
    name: "AA2024",
  },
  {
    href: "https://impact-innovations.com/en/materials/a357/",
    img: "../../image/cold-a357.png",
    name: "A357",
  },
  {
    href: "https://impact-innovations.com/en/materials/aa6061/",
    img: "../../image/cold-aa6061.png",
    name: "AA6061",
  },
  {
    href: "https://impact-innovations.com/en/materials/aa7050/",
    img: "../../image/cold-aa7050.png",
    name: "AA7050",
  },
  ];

  var vm_1_5=new Vue({
  el: "#coldspray_al",
  data: {
    title: "鋁及鋁合金：",
    cont: data_al,
  }
});

var data_ni=[
  {
    href: "https://impact-innovations.com/en/materials/nickel/",
    img: "../../image/cold-nikel.png",
    name: "Ni",
  },
  {
    href: "https://impact-innovations.com/en/materials/in625/",
    img: "../../image/cold-in625.png",
    name: "IN625",
  },
  {
    href: "https://impact-innovations.com/en/materials/in718/",
    img: "../../image/cold-in718.png",
    name: "in718",
  },
  {
    href: "https://impact-innovations.com/en/materials/invar/",
    img: "../../image/cold-invar.png",
    name: "INVAR36",
  },
  {
    href: "https://impact-innovations.com/en/materials/nicr/",
    img: "../../image/cold-nicr.png",
    name: "NiCr",
  },
  ];

  var vm_1_6=new Vue({
  el: "#coldspray_ni",
  data: {
    title: "鎳及鎳合金：",
    cont: data_ni,
  }
});

var data_metal=[
  {
    name: "銅及銅合金：Cu/ CuCrZr/ CuAg/ CuSn/ CuZn",
  },
  {
    name: "鋼：316L/ 430L/ M3/2/ M152",
  },
  {
    name: "鈦：Ti/ Ti6Al4V/ TiAl",
  },
  {
    name: "貴金屬：Ag/ Au/ Pt",
  },
  {
    name: "耐火金屬：Nb/ Ta/ Zr/ Mo/ Cr",
  },
  {
    name: "其他：Sn/ Zn",
  },
  ];

  var vm_1_7=new Vue({
  el: "#coldspray_metal",
  data: {
    title: "更多金屬材料選擇：",
    cont: data_metal,
  }
});
// -----------------------------------------------------
var specdata_impact=[
  {
	s_title: "",
  s_pic: "",
	s_items: [""],
  },
  {
	s_title: "",
  s_pic: "",
	s_items: [""],
  },
];

var vm_1_1=new Vue({
	el: "#spec_infos_impact",
	data: {
	contents: specdata_impact,
	}
});
// -----------------------------------------------------
Vue.component('table_template', {
  template: '#table-template_impact',
  props: {
    data: {},
    columns: [],
  }
});

var vm_1_2= new Vue({
  el: '#table_impact',
  data: {
    tableTitle: "適用型號比較：",
    tableHead: ['材料', "5/8 EvoCSII", "6/11 EvoCSII", '水冷需求'],
    tableData: [
      { 材料: 'Ag, Ag alloys', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Al, Al alloys', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Au, Au alloys', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Cu, Cu alloys', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'High carbon steel', "5/8 EvoCSII": 'Not possible', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'IN625', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'IN718', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Mg', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Nb', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Ni', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Ni80Cr20', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Sn', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Stainless steel 316L', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Stainless steel 430', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Ta', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti-WC', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti-6-4', "5/8 EvoCSII": 'Lower quality', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
      { 材料: 'Ti-TiC', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti-SiC', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'X',},
      { 材料: 'Zn', "5/8 EvoCSII": 'OK', "6/11 EvoCSII": 'OK', 水冷需求: 'V',},
    ]
  }
});
