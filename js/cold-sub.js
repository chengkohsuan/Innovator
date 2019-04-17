var data_sidebar=[
  {
    page: "cold-impact.html",
    name: "Impact 噴塗系統",
  }
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "cold.html",
    tag_name: "冷氣動力噴塗設備",
    sidemenu: data_sidebar,
  }
});

var data_impact=[
  {
    show_title: true,
    title: "Impact 冷氣動力噴塗系統",
    show_text: true,
    text: "與其他熱噴塗製程相比，冷氣動力噴塗具有超高速動能使材料不會熔化，使製備出來的塗層具備高堆積效率、低孔隙率、低氧化物含量的優點。也因為材料不熔化的特性，塗層對基底材料的熱影響較低，塗層的物理和化學特性幾乎與材料本身相同。高動能的顆粒在與基材衝擊的過程中，產生高度變形，而形成均勻、緻密的塗層，塗層厚度範圍從幾微米到幾釐米不等。Impact冷氣動力噴塗系統以最新技術將氣體（氮氣或氦氣）送入噴槍中，壓力高達50 bar，並在噴槍艙體內加熱至最高溫度1100度，通過送粉機將噴塗粉末注入噴嘴的匯聚區域，讓顆粒在氣流中被加速到高達1200 m/s的速度，使顆粒撞擊到基材時能產生形變附著在基材表面，形成氧化物含量極低的塗層。",
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

var specdata_impact=[
  {
	s_title: "5/8規格",
  s_pic: "../../image/cold-impact-04.jpg",
	s_items: ["最大操作壓力：50 bar","最高操作溫度：800°C","加熱功率：34 kW"],
  },
  {
	s_title: "5/11規格",
  s_pic: "../../image/cold-impact-05.jpg",
	s_items: ["最大操作壓力：50 bar","最高操作溫度：1100°C","加熱功率：40 kW"],
  },
];

var vm_1_1=new Vue({
	el: "#spec_infos_impact",
	data: {
	contents: specdata_impact,
	}
});

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
    tableTitle: "適用材料比較：",
    tableHead: ['材料', "Impact 5/8", "Impact 5/11", '水冷需求'],
    tableData: [
      { 材料: 'Ag, Ag alloys', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Al, Al alloys', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Au, Au alloys', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Cu, Cu alloys', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'High carbon steel', "Impact 5/8": 'Not possible', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'IN625', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'IN718', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Mg', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Nb', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Ni', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Ni80Cr20', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Sn', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Stainless steel 316L', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Stainless steel 430', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Ta', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti-WC', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti-6-4', "Impact 5/8": 'Lower quality', "Impact 5/11": 'OK', 水冷需求: 'V',},
      { 材料: 'Ti-TiC', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Ti-SiC', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'X',},
      { 材料: 'Zn', "Impact 5/8": 'OK', "Impact 5/11": 'OK', 水冷需求: 'V',},
    ]
  }
});
