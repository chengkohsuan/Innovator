
var data_3D=[
  {
    show_title: true,
    title: "Praxair 3D列印TruForm™金屬粉末",
    show_text: true,
    text: "隨著增材製造的迅速發展，Praxair正在以相同的速度研發粉末，適用於粉體床式、雷射覆焊式，以及冷氣體動力噴塗成型等各種3D列印製程。鈷、鐵、鎳和鈦金屬粉末呈現球形、高流動性、均勻堆積，所製備的塗層密度一致、厚度均勻，有助於3D列印部件的機械性能，並能滿足3D列印部件所需規格。 Praxair可以依需求訂製顆粒大小和化學成分比，以確保成品符合性能和表面整潔度之規格與標準。",
    show_features: true,
    features: ["符合航太等級","粉體流動性高","堆積均勻","密度高"],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#content_3D",
  data: {
  products: data_3D,
  }
});



var data_flexi=[
  {
    show_title: true,
    title: "Saint-Gobain Flexicord",
    show_text: true,
    text: "Flexicord與MasterJet®和Top Jet火焰噴塗裝置配合使用，可提供出色的耐熱循環性、耐磨性、耐腐蝕性和介電性。無論基材的形狀，尺寸或成分如何，火焰噴塗塗層都能提供最佳的耐磨屏障，可延長零件和設備在嚴苛環境使用中的壽命。",
    show_features: false,
    features: [""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_2=new Vue({
  el: "#content_flexi",
  data: {
  products: data_flexi,
  }
});

Vue.component('table_template', {
  template: '#table-template_flexi',
  props: {
    data: {},
    columns: [],
  }
});

var vm_2_1= new Vue({
  el: '#table_flexi',
  data: {
    tableTitle: "",
    tableHead: ["產品名稱", "成份","孔隙率","表面粗糙度 µm Ra","硬度 HV300"],
    tableData: [
      { 產品名稱: "Pure Alumina", 成份: "Al2O3 99.7%", 孔隙率: "8-12%", "表面粗糙度 µm Ra": "8-12", "硬度 HV300": "700-770",},
      { 產品名稱: "Black Corundum 15", 成份: "Al2O3 85%, TiO2 15%", 孔隙率: "6-8%", "表面粗糙度 µm Ra": "7-9", "硬度 HV300": "750",},
      { 產品名稱: "Black Corundum 50", 成份: "Al2O3 50%, TiO2 50%", 孔隙率: "6-8%", "表面粗糙度 µm Ra": "7-9", "硬度 HV300": "600",},
      { 產品名稱: "Black Body", 成份: "Cr2O3 55.25%, Al2O3 27.1%, SiO2 11%, TiO2 6.65%", 孔隙率: "8-10%", "表面粗糙度 µm Ra": "5-10", "硬度 HV300": "710-920",},
      { 產品名稱: "Blue Corundum", 成份: "Al2O3 97%, TiO2 3%", 孔隙率: "6-8%", "表面粗糙度 µm Ra": "6-8", "硬度 HV300": "800",},
      { 產品名稱: "Ti-Elite", 成份: "Al2O3 87%, TiO2 13%", 孔隙率: "4-7%", "表面粗糙度 µm Ra": "3-4", "硬度 HV300": "1010",},
      { 產品名稱: "Ti-Tex", 成份: "Al2O3 60%, TiO2 40%", 孔隙率: "3-6%", "表面粗糙度 µm Ra": "3-4", "硬度 HV300": "950",},
      { 產品名稱: "Spinel", 成份: "Al2O3 70%, MgO 30%", 孔隙率: "10-17%", "表面粗糙度 µm Ra": "7-12", "硬度 HV300": "730",},
      { 產品名稱: "Magnesium Zirconate", 成份: "ZrO2 80% , MgO 20%", 孔隙率: "10-15%", "表面粗糙度 µm Ra": "10-15", "硬度 HV300": "760",},
      { 產品名稱: "Titania", 成份: "TiO2", 孔隙率: "3-4%", "表面粗糙度 µm Ra": "4-8", "硬度 HV300": "950",},
      { 產品名稱: "Chromia Supra", 成份: "Cr2O3 99.2%, Other max0.8%", 孔隙率: "1%", "表面粗糙度 µm Ra": "3", "硬度 HV300": "935",},
      { 產品名稱: "Alumina Supra", 成份: "Al2O3 99.7%, Other max 0.3%", 孔隙率: "4-6%", "表面粗糙度 µm Ra": "3-5", "硬度 HV300": "680",},
      { 產品名稱: "Spinel Supra", 成份: "Al2O3 70%, MgO 30%", 孔隙率: "4-7%", "表面粗糙度 µm Ra": "7-12", "硬度 HV300": "1000",},
      { 產品名稱: "AZ Supra", 成份: "Al2O3 75%, ZrO2 23%, Other 2%", 孔隙率: "2-5%", "表面粗糙度 µm Ra": "3-5", "硬度 HV300": "500-600",},
      { 產品名稱: "ZirMag", 成份: "Al2O3 78%, MgO 22%", 孔隙率: "1.8-4%", "表面粗糙度 µm Ra": "5-7", "硬度 HV300": "650",},
      { 產品名稱: "Iron Oxide", 成份: "Fe3O4 92%, SiO2 3%, Other 5%", 孔隙率: "6-8%", "表面粗糙度 µm Ra": "12-13", "硬度 HV300": "810",},
      { 產品名稱: "NiCrAlY Bond Coat", 成份: "Ni 67% , Al 10%, Cr 22% , Y 1%", 孔隙率: "5%", "表面粗糙度 µm Ra": "6-8", "硬度 HV300": "250-350",},
      { 產品名稱: "NiChrome", 成份: "Ni 80%, Cr 20%", 孔隙率: "1-3%", "表面粗糙度 µm Ra": "6-8", "硬度 HV300": "280",},
      { 產品名稱: "RocDur 44", 成份: "NiCrBSiFeC", 孔隙率: "3-5%", "表面粗糙度 µm Ra": "5", "硬度 HV300": "Matrix 38 HRC +/-2, Carbides 370",},
      { 產品名稱: "RocDur 6728", 成份: "WC 28%, NiCrBSi 72%", 孔隙率: "<1% as fused", "表面粗糙度 µm Ra": "–212.5 as sprayed, 2 – 4 µm as fused", "硬度 HV300": "Matrix 60 HRC, Carbides 1300",},
      { 產品名稱: "RocDur 6740", 成份: "WC 40%, NiCrBSi 60%", 孔隙率: "<1% as fused", "表面粗糙度 µm Ra": "–212.5 as sprayed, 2 – 4 µm as fused", "硬度 HV300": "Matrix 60 HRC, Carbides 1300",},
      { 產品名稱: "RocDur 6750", 成份: "WC 50%, NiCrBSi 50%", 孔隙率: "<1% as fused", "表面粗糙度 µm Ra": "10 – 12 as sprayed, 0.25 – 0.4 µm as fused", "硬度 HV300": "Nickel 60 HRC, Carbides 2000",},
      { 產品名稱: "RocDur NS 60", 成份: "Al2O3 ~33%, Ni base ~67%", 孔隙率: "-", "表面粗糙度 µm Ra": "19, 143 µm Rmax, 73 µm RP, 147 µm Rt", "硬度 HV300": "Matrix 60 HRC",},
      { 產品名稱: "HardKard 12 Co", 成份: "WC 88%, Co 12%", 孔隙率: "3-7%", "表面粗糙度 µm Ra": "4.5-6.5", "硬度 HV300": "1050-1200",},
      { 產品名稱: "HardKard 15 HC", 成份: "WC 85%, Ni 10%, Cr 2.75%, Mo 2.75%, Fe 1.15%, Co 0.45%", 孔隙率: "3-5%", "表面粗糙度 µm Ra": "4.5-6.5", "硬度 HV300": "1000-1100",},
      { 產品名稱: "HardKard CoCr", 成份: "WC 85%, Co 10%, Cr 4%", 孔隙率: "3-4%", "表面粗糙度 µm Ra": "4.5-6.5", "硬度 HV300": "700-1250",},
      { 產品名稱: "ChromKarb", 成份: "Cr3C2 75%, NiCr 25%", 孔隙率: "2-4%", "表面粗糙度 µm Ra": "5.5-6", "硬度 HV300": "900",},
      { 產品名稱: "Corec", 成份: "Co Cr29 W4.5 C1.15 (ST6)", 孔隙率: "7%", "表面粗糙度 µm Ra": "6-8", "硬度 HV300": "39-44 HRC, 480",},
      { 產品名稱: "RocDur 625", 成份: "NiCrMoFe", 孔隙率: "2-5%", "表面粗糙度 µm Ra": "6-8", "硬度 HV300": "340",},
    ]
  }
});



var data_mask=[
  {
    show_title: true,
    title: "DW410隔熱遮覆膠帶",
    show_text: true,
    text: "藍色矽橡膠披覆的玻璃纖維可耐高溫，矽橡膠強韌且耐磨，可抵抗高溫和噴砂衝擊，矽膠在高溫下提供優異的黏著性，可同時用於噴砂和電漿噴塗，不留殘膠。",
    show_features: false,
    features: ["","",""],
    show_specs: true,
    specs: ["背層材質：矽膠／玻璃布","背層厚度：0.02 cm","黏膠系：矽膠","黏膠厚度：0.008 cm","黏著劑：（ASTM D 1000）524.57 g/cm","延伸量：（ASTM D 3759）8%","最高作業溫度：260°C","FAA 規範：（GE C10-012）合格","Pratt & Whitney：（PMC 4416）合格","Rolls-Royce Aero Repair：（OMAT 2/96L）合格","Gov't 規範：（Mil Spec-Y）通過","芯軸內徑：7.62 cm","寬度：0.635－91.44 cm","長度：32.92 m"],
  },
  {
    show_title: true,
    title: "DW500RD隔熱遮覆膠帶",
    show_text: true,
    text: "紅色矽橡膠／玻璃布背層構成的電漿噴塗遮蔽膠帶，塗有高溫活性矽膠粘合劑，在噴砂和電漿噴塗製程的高溫環境下提供良好的保護性，比大多數其他等電漿噴塗遮蔽膠帶粘性更佳而不留殘膠，適合應用於航太產業中形狀複雜的工件。",
    show_features: false,
    features: ["","",""],
    show_specs: true,
    specs: ["背層材質：紅矽膠／玻璃布","背層厚度：0.02 cm","黏膠系：矽膠","黏膠厚度：0.008 cm","黏著劑：（ASTM D 1000）446.4 g/cm","最高作業溫度：260°C","Pratt & Whitney：（PMC 4630）合格","Rolls-Royce Aero Repair：（OMAT 2/96L）合格","芯軸內徑：7.62 cm","寬度：0.635－91.44 cm","長度：32.92 m"],
  },
  ];

var vm_3=new Vue({
  el: "#content_mask",
  data: {
  products: data_mask,
  }
});




var data_parts=[
  {
    show_title: true,
    title: "噴塗設備零件",
    show_text: true,
    text: "我們提供各式熱噴塗設備之零件，包含Praxair TAFA、Oerlikon Metco、Saint-Gobain、Mettech、Thermion等知名大廠，欲了解更多資訊，歡迎與我們聯繫。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_4=new Vue({
  el: "#content_parts",
  data: {
  products: data_parts,
  }
});



var data_powder=[
  {
    show_title: true,
    title: "噴塗粉末",
    show_text: true,
    text: "PRAXAIR 熱噴塗粉末可依需求提供完整的產品服務，詳細資訊可參考下方完整產品型錄連結，並與我們聯繫。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_5=new Vue({
  el: "#content_powder",
  data: {
  products: data_powder,
  }
});



var data_stellite=[
  {
    show_title: true,
    title: "超合金焊材",
    show_text: true,
    text: "（1～4分表示強度低至高）",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_6=new Vue({
  el: "#content_stellite",
  data: {
  products: data_stellite,
  }
});

Vue.component('table_template', {
  template: '#table-template_stellite',
  props: {
    data: {},
    columns: [],
  }
});

var vm_6_1= new Vue({
  el: '#table_stellite',
  data: {
    tableTitle: "合金材料抵抗強度特性（1~4表示抵抗能性由低至高）：",
    tableHead: ["合金", "機械磨耗","腐蝕", "高溫環境",],
    tableData: [
      { 合金: "Stellite", 機械磨耗: "3", 腐蝕: "3", 高溫環境: "4",},
      { 合金: "Deloro", 機械磨耗: "3", 腐蝕: "2", 高溫環境: "2",},
      { 合金: "Tribaloy", 機械磨耗: "3", 腐蝕: "3", 高溫環境: "4",},
      { 合金: "Nistelle", 機械磨耗: "1", 腐蝕: "4", 高溫環境: "3",},
      { 合金: "Delcrome", 機械磨耗: "3", 腐蝕: "1", 高溫環境: "2",},
      { 合金: "Stelcar", 機械磨耗: "4", 腐蝕: "2", 高溫環境: "2",},
      { 合金: "Jet Kote", 機械磨耗: "4", 腐蝕: "2", 高溫環境: "2",},
    ]
  }
});




var data_suspension=[
  {
    show_title: true,
    title: "YSZ Suspension",
    show_text: true,
    text: "SPS技術是EB-PVD技術的取代品，在柱狀的熱障塗層中，熱傳導低、壽命長。YSZ漿料可單獨作為熱障塗層使用，也可做為高溫熱障塗層的基底塗層使用。此漿料具有低粘度、使用壽命長和易分散的特點，符合EN/AS 9100的標準，可確保產品品質的穩定。",
    pics: ["../../image/img-2-sus-01.jpg","../../image/img-2-sus-02.jpg","../../image/blank.jpg"],
    show_susp: true,
    susps: [
      {
      s_item: "固體成分比",
      s_cont: "25 wt%",
      },
      {
      s_item: "溶液",
      s_cont: "酒精",
      },
      {
      s_item: "黏性",
      s_cont: "1.5 mPa‧s",
      },
    ],
    show_comp: true,
    comps: [
      {
      c_item: "ZrO2",
      c_cont: "Balance",
      },
      {
      c_item: "Y2O3",
      c_cont: "8 wt%",
      },
      {
      c_item: "HfO2",
      c_cont: "<2.5%",
      },
      {
      c_item: "Al2O3",
      c_cont: "<0.1%",
      },
      {
      c_item: "CaO",
      c_cont: "<0.05%",
      },
      {
      c_item: "Fe2O3",
      c_cont: "<0.05%",
      },
      {
      c_item: "TiO2",
      c_cont: "<0.05%",
      },
      {
      c_item: "SiO2",
      c_cont: "<0.05%",
      },
    ],
    show_powd: true,
    powds: [
     {
      p_item: "製程",
      p_cont: "團聚和燒結",
      },
      {
      p_item: "D10顆粒大小",
      p_cont: "21-30 μm",
      },
      {
      p_item: "D50顆粒大小",
      p_cont: "41-57 μm",
      },
      {
      p_item: "D90顆粒大小",
      p_cont: "90-99 μm",
      },
      {
      p_item: "視密度",
      p_cont: "1.6 g/cc",
      },
      {
      p_item: "應用",
      p_cont: "熱障塗層",
      },
    ]
  },
  {
    show_title: true,
    title: "GdZr Suspension （僅供實驗單位使用）",
    show_text: true,
    text: "專為SPS系統所設計，可以用來製備出柱狀熱障塗層。GdZr具有在高溫相穩定性高和導電性低的特點，適用於具有合適基底層的高溫TBC應用。YSZ塗層為TBC中最為重要的塗層之一，但由於這幾年燃氣輪機的發展快速，所產生的溫度已經超越YSZ塗層的極限，造成渦輪葉片的維修更加的頻繁，主要原因為YSZ的燒結溫度在1200oC，使YSZ的相結構趨向不穩定，而且因為經過燒結，其熱傳導也跟著提高。而另外一個會使YSZ塗層崩裂的原因為空氣汙染，大氣中含有相當多的CMAS顆粒（鈣鎂鋁矽酸鹽類），這些顆粒會附著在TBC柱狀結構的裂縫之中，經過劇烈的熱漲冷縮，導致TBC塗層與鍵結層（bond-coat）的崩裂。在氧化鋯中添加Gd和La已在工業中實行，Gd2Zr2O7在高溫狀態下具有優異的穩定性、低熱傳導、適度的膨脹係數以及抵抗CMAS顆粒的侵蝕能力。",
    pics: ["../../image/img-2-sus-03.jpg","../../image/img-2-sus-04.jpg","../../image/blank.jpg"],
    show_susp: true,
    susps: [
      {
      s_item: "固體成分比",
      s_cont: "25 wt%",
      },
      {
      s_item: "溶液",
      s_cont: "酒精",
      },
      {
      s_item: "黏性",
      s_cont: "1.5 mPa‧s",
      },
    ],
    show_comp: false,
    comps: [
      {
      c_item: "",
      c_cont: "",
      },
    ],
    show_powd: true,
    powds: [
      {
      p_item: "製程",
      p_cont: "熔融和粉碎",
      },
      {
      p_item: "D50顆粒大小",
      p_cont: "0.5 μm",
      },
      {
      p_item: "應用",
      p_cont: "熱障塗層（柱狀結構）",
      },
    ],
  },
  {
    show_title: true,
    title: "氧化鋁Al2O3 suspension",
    show_text: true,
    text: "可取代現有的APS技術，可以得到更高的密度、更低的表面粗糙度與更出色的硬度。此漿料的儲存時間長。並且容易重新分散。",
    pics: ["../../image/img-2-sus-05.jpg","../../image/img-2-sus-06.jpg","../../image/blank.jpg"],
    show_susp: true,
    susps: [
      {
      s_item: "固體成分比",
      s_cont: "40 wt%",
      },
      {
      s_item: "溶液",
      s_cont: "水",
      },
    ],
    show_comp: true,
    comps: [
      {
      c_item: "Al2O3",
      c_cont: ">99 wt%",
      },
      {
      c_item: "Na2O",
      c_cont: "<0.3%",
      },
      {
      c_item: "ZrO2",
      c_cont: "<0.3%",
      },
      {
      c_item: "Fe2O3",
      c_cont: "<0.05%",
      },
      {
      c_item: "TiO2",
      c_cont: "<0.05%",
      },
      {
      c_item: "SiO2",
      c_cont: "<0.05%",
      },
    ],
    show_powd: true,
    powds: [
      {
      p_item: "製程",
      p_cont: "團聚和燒結",
      },
      {
      p_item: "D10顆粒大小",
      p_cont: "0.4-0.7 μm",
      },
      {
      p_item: "D50顆粒大小",
      p_cont: "2-4 μm",
      },
      {
      p_item: "D90顆粒大小",
      p_cont: "4-8 μm",
      },
      {
      p_item: "應用",
      p_cont: "耐磨耗塗層（緻密結構）",
      },
    ],
  },
  {
    show_title: true,
    title: "氧化釔Y2O3 Suspension",
    show_text: true,
    text: "主要應用於半導體的蝕刻腔體，由於製備出來的塗層密度更高，抵抗離子蝕刻的效果更好。使用此漿料所製備出來的塗層孔隙率低於0.5%，可以取代現有的APS技術。",
    pics: ["../../image/img-2-sus-07.jpg","../../image/img-2-sus-08.jpg","../../image/blank.jpg"],
    show_susp: true,
    susps: [
      {
      s_item: "固體成分比",
      s_cont: "30-40 wt%",
      },
      {
      s_item: "溶液",
      s_cont: "水",
      },
    ],
    show_comp: true,
    comps: [
      {
      c_item: "Y2O3",
      c_cont: ">99.99 %",
      },
      {
      c_item: "Ca",
      c_cont: "<50 ppm",
      },
      {
      c_item: "Si",
      c_cont: "<50 ppm",
      },
      {
      c_item: "Fe",
      c_cont: "<50 ppm",
      },
    ], 
    show_powd: true,
    powds: [
      {
      p_item: "製程",
      p_cont: "團聚和燒結",
      },
      {
      p_item: "D10顆粒大小",
      p_cont: ">0.4 μm",
      },
      {
      p_item: "D50顆粒大小",
      p_cont: "-2.5 μm",
      },
      {
      p_item: "D90顆粒大小",
      p_cont: "<8 μm",
      },
      {
      p_item: "應用",
      p_cont: "離子蝕刻反應（半導體製造商）",
      },
    ],
  },
  ];

var vm_7=new Vue({
  el: "#content_suspension",
  data: {
  products: data_suspension,
  }
});




var data_tufcote=[
  {
    show_title: true,
    title: "Saint-Gobain Tuf-Cote®",
    show_text: true,
    text: "Tuf-Cote®是一種釺焊表面硬化材料，可製造堅固耐磨的塗層，旨在將工業部件的使用壽命延長3至10倍。Tuf-Cote®賦予塗層在環境溫度和高溫下極耐磨損，腐蝕，腐蝕和氧化，使其成為石油和天然氣，發電，鑽井，採礦，廢物處理，鋼鐵生產和其他苛刻應用的理想耐磨材料。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_8=new Vue({
  el: "#content_tufcote",
  data: {
  products: data_tufcote,
  }
});




var data_wires=[
  {
    show_title: true,
    title: "噴塗線材",
    show_text: true,
    text: "PRAXAIR 熱噴塗線材可依需求提供完整的產品服務，詳細資訊可參考下方完整產品型錄連結，並與我們聯繫。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_9=new Vue({
  el: "#content_wires",
  data: {
  products: data_wires,
  }
});