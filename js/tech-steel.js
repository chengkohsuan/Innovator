$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var app_infos=[
  {
    show_title: true,
    title: "鋼鐵冶鍊領域應用",
    show_text: true,
    texts: ["鋼鐵產業對於工件而言，是最為嚴苛的工作場所，長時間的受到高溫沖蝕及融損、高磨損等，藉由使用熱噴塗在工件表面形成保護塗層可大幅提高工件的使用壽命，也可以在塗層失效後重新被覆新的塗層來保護工件，進而減少購置新工件之成本。在塗層的選擇上大部分是以NiCr基合金、CoCr基合金、碳化鎢系、陶瓷和瓷金材料為主，這些材料分別有抗高溫、耐磨、抗熱腐蝕與抗熱沖蝕的效果。在製成選擇上則以電漿噴塗與高壓高速火焰噴塗為主。",],
    show_lists: true,
    lists: ["煉鋼廠：鬼齒、高爐羽口、連鑄結晶器銅板","鋼板熱壓工廠：粗壓輸送輥、精壓輸送輥、夾延輥、卷取輥","連續熱軋工廠：連續鑄造輥、冷延加工輥、連續退火爐爐輥","線材、棒材工廠：導引輥、伸線胴","連續熱浸鍍鋅工廠：鍍鋅輥(沉浸輥)、穩定輥、張力輥、接觸輥"],
  },
  ];

var vm_1=new Vue({
  el: "#content",
  data: {
  	contents: app_infos,
  }
});