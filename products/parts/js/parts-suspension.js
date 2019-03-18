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
    title: "YSZ Suspension",
    show_text: true,
    text: "SPS技術是EB-PVD技術的取代品，在柱狀的熱障塗層中，熱傳導低、壽命長。YSZ漿料可單獨作為熱障塗層使用，也可做為高溫熱障塗層的基底塗層使用。此漿料具有低粘度、使用壽命長和易分散的特點，符合EN/AS 9100的標準，可確保產品品質的穩定。",
    show_susp: false,
    susps: ["","",""],
    show_comp: false,
    comps: ["","",],
    show_powd: true,
    powds: [""],
  },
  {
    show_title: true,
    title: "GdZr Suspension （僅供實驗單位使用）",
    show_text: true,
    text: "專為SPS系統所設計，可以用來製備出柱狀熱障塗層。GdZr具有在高溫相穩定性高和導電性低的特點，適用於具有合適基底層的高溫TBC應用。YSZ塗層為TBC中最為重要的塗層之一，但由於這幾年燃氣輪機的發展快速，所產生的溫度已經超越YSZ塗層的極限，造成渦輪葉片的維修更加的頻繁，主要原因為YSZ的燒結溫度在1200oC，使YSZ的相結構趨向不穩定，而且因為經過燒結，其熱傳導也跟著提高。而另外一個會使YSZ塗層崩裂的原因為空氣汙染，大氣中含有相當多的CMAS顆粒（鈣鎂鋁矽酸鹽類），這些顆粒會附著在TBC柱狀結構的裂縫之中，經過劇烈的熱漲冷縮，導致TBC塗層與鍵結層（bond-coat）的崩裂。在氧化鋯中添加Gd和La已在工業中實行，Gd2Zr2O7在高溫狀態下具有優異的穩定性、低熱傳導、適度的膨脹係數以及抵抗CMAS顆粒的侵蝕能力。",
    show_susp: false,
    susps: ["","",""],
    show_comp: false,
    comps: ["","",],
    show_powd: true,
    powds: [""],
  },
  {
    show_title: true,
    title: "氧化鋁Al2O3 suspension",
    show_text: true,
    text: "可取代現有的APS技術，可以得到更高的密度、更低的表面粗糙度與更出色的硬度。此漿料的儲存時間長。並且容易重新分散。",
    show_susp: false,
    susps: ["","",""],
    show_comp: false,
    comps: ["","",],
    show_powd: true,
    powds: [""],
  },
  {
    show_title: true,
    title: "氧化釔Y2O3 Suspension",
    show_text: true,
    text: "主要應用於半導體的蝕刻腔體，由於製備出來的塗層密度更高，抵抗離子蝕刻的效果更好。使用此漿料所製備出來的塗層孔隙率低於0.5%，可以取代現有的APS技術。",
    show_susp: false,
    susps: ["","",""],
    show_comp: false,
    comps: ["","",],
    show_powd: true,
    powds: [""],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});