
var pd_infos=[
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

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});

Vue.component('table_template', {
  template: '#table-template',
  props: {
    data: {},
    columns: [],
  }
});

var vm_3= new Vue({
  el: '#table',
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