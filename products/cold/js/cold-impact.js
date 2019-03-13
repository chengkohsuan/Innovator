$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var pd_infos=[
  {
    show_title: true,
    title: "Impact 冷氣動力噴塗系統",
    show_sub: false,
    sub:"",
    show_text: true,
    text: "與其他熱噴塗製程相比，冷氣動力噴塗具有超高速動能使材料不會熔化，使製備出來的塗層具備高堆積效率、低孔隙率、低氧化物含量的優點。也因為材料不熔化的特性，塗層對基底材料的熱影響較低，塗層的物理和化學特性幾乎與材料本身相同。高動能的顆粒在與基材衝擊的過程中，產生高度變形，而形成均勻、緻密的塗層，塗層厚度範圍從幾微米到幾釐米不等。Impact冷氣動力噴塗系統以最新技術將氣體（氮氣或氦氣）送入噴槍中，壓力高達50 bar，並在噴槍艙體內加熱至最高溫度1100度，通過送粉機將噴塗粉末注入噴嘴的匯聚區域，讓顆粒在氣流中被加速到高達1200 m/s的速度，使顆粒撞擊到基材時能產生形變附著在基材表面，形成氧化物含量極低的塗層。",
    show_features: true,
    features: ["直覺的使用者介面，方便操作和監控製程中所有參數","參數管理系統，可記錄所有的參數來確保品質的穩定","系統可進行操作權限分級設定","可連接數個送粉機","可進行網路連線，將資料上傳至資料庫，進行管理與分析"],
    show_specs: false,
    specs: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});

var specdata=[
  {
	s_title: "5/8規格",
	s_items: ["最大操作壓力：50 bar","最高操作溫度：800°C","加熱功率：34 kW"],
  },
  {
	s_title: "5/11規格",
	s_items: ["最大操作壓力：50 bar","最高操作溫度：1100°C","加熱功率：40 kW"],
  },
];

var vm_2=new Vue({
	el: "#spec_infos",
	data: {
	contents: specdata,
	}
});
