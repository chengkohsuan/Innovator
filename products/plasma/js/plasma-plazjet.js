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
    title: "PlazJet II高能電漿噴塗系統",
    show_text: true,
    text: "PlazJet II高能電漿噴塗系統是「高能量」電漿噴塗工藝的終極產品，可在高電壓、低電流設置下以更高的速度運行。該系統包括高功率電漿炬、基礎PC / PLC控制系統、定制電源和其他元件。該系統提供全自動閉環噴塗，並確保可重現的高品質塗層。PlazJet II高能電漿噴塗系統具有大量的參數存儲功能，使塗層選擇更容易，有助於確保塗層重複性；其資料獲取功能有助於實現噴塗品質、車間管理和成本控制。",
    show_features: true,
    features: ["比其他直流電漿系統或高能電漿系統具有更高的速度，改善了塗層密度、硬度、結合強度、光潔度和耐腐蝕性","更高的噴霧速率使工藝製程更經濟，更具工業應用性","由於電流降低，元件壽命更長，電效率更高","採用基礎電腦操作介面，操作簡單"],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});