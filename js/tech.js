var vm_topic=new Vue({
  el: "#content-top",
  data: {
    topic: "熱噴塗技術應用",
    text: "熱噴塗技術製程應用範圍廣，包含鋼鐵、印刷、航太、光電、防蝕、石化等工業產業。熱噴塗又稱為熱熔射或噴焊，為表面處理技術的一種，其原理是藉由熱能將材料（粉末或線材）加熱，呈現熔融或半熔態後，再以高壓、高速氣體霧化沉積在基材上，層狀堆疊後形成塗層，目前常見的熱噴塗技術包含電漿噴塗、電弧噴塗、高壓高速火焰噴塗、火焰噴塗及冷氣動力噴塗。",
  }
});

var data_card=[
  {
    href: "tech-steel.html",
    picture: "../image/tech-steel.jpg",
    h3: "鋼鐵冶鍊",
  },
  {
    href: "tech-paper.html",
    picture: "../image/tech-paper.jpg",
    h3: "印刷造紙",
  },
  {
    href: "tech-aerospace.html",
    picture: "../image/tech-aerospace.jpg",
    h3: "航太能源",
  },
  {
    href: "tech-semicd.html",
    picture: "../image/tech-semicd.jpg",
    h3: "光電半導體",
  },
  {
    href: "tech-corrosion.html",
    picture: "../image/tech-corrosion.jpg",
    h3: "大氣防蝕",
  },
  {
    href: "tech-oil.html",
    picture: "../image/tech-oil.jpg",
    h3: "石化油氣",
  },
  {
    href: "tech-others.html",
    picture: "../image/tech-others.png",
    h3: "其他應用",
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
    page: "tech-steel.html",
    name: "鋼鐵冶鍊",
  },
  {
    page: "tech-paper.html",
    name: "印刷造紙",
  },
  {
    page: "tech-aerospace.html",
    name: "航太能源",
  },
  {
    page: "tech-semicd.html",
    name: "光電半導體",
  },
  {
    page: "tech-corrosion.html",
    name: "大氣防蝕",
  },
  {
    page: "tech-oil.html",
    name: "石化油氣",
  },
  {
    page: "tech-others.html",
    name: "其他應用",
  },
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "tech.html",
    tag_name: "熱噴塗技術應用",
    sidemenu: data_sidebar,
  }
});

//------------------------------------
var aerospace_data=[
  {
    show_title: true,
    title: "航太能源領域應用",
    show_text: true,
    texts: ["航太產業中常見的塗層有抗高溫的熱障塗層、可磨耗塗層、耐高溫金屬塗層（T400、T800）、耐磨耗塗層等。其中熱障塗層主要由兩個塗層組合而成，分別為鍵結層（Bond Coating）和頂層（Top Coating），而這兩種塗層所使用的熱噴塗工藝也不相同。以鍵結層而言，目前常見的工藝有低壓電漿噴塗（LPPS）、高壓高速火焰（HVOF、HVAF）。在鍵結層中所使用的材料為MCrAlY（M= Ni, Co, NiCo, CoNi），與頂層材料有良好的親和性。在頂層的工藝中目前主流為使用大氣電漿噴塗（APS），近幾年有相當多的國內外科研單位與製造商使用大氣漿料電漿噴塗（ASPS）來進行頂層的製作。頂層所使用的材料為氧化釔安定氧化鋯（8YSZ），該材料的特色為低熱傳導係數且相較於其他的絕熱材料價格相對便宜。這些塗層應用在各級的動葉、靜葉、動葉環、燃燒桶、密封環、飛機起落架等各式應用。",],
    pics: ["../image/t-img-aerospace-1.jpg","../image/t-img-aerospace-2.jpg",],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_1=new Vue({
  el: "#aerospace_content",
  data: {
  	contents: aerospace_data,
  }
});
//------------------------------------
var corrosion_data=[
  {
    show_title: true,
    title: "大氣防蝕領域應用",
    show_text: true,
    texts: ["在業界，防蝕主要有幾種製程可以使用，分別為熱噴塗鋅鋁塗層、熱浸鍍鋅以及油漆，以上三種制程各有其優缺點。熱噴塗鋅鋁塗層其優勢在於，可進行大面積噴塗、工件沒有大小的限制，也可以進行現場施工，塗層防護時間為三者中最久的。常見防蝕技術應用如橋樑防蝕工程、離岸風力發電機防蝕工程等。",],
    pics: ["../image/t-img-corrosion-1.jpg","../image/t-img-corrosion-2.jpg","../image/t-img-corrosion-3.jpg"],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_2=new Vue({
  el: "#corrosion_content",
  data: {
    contents: corrosion_data,
  }
});

//------------------------------------
var oil_data=[
  {
    pics: ["../image/t-img-oil-1.jpg","../image/t-img-oil-2.jpg","../image/t-img-oil-3.jpg"],
    show_title: true,
    title: "石化油氣領域應用",
    show_text: true,
    texts: ["石化產業工件幾乎都是在極端壓力下磨損、腐蝕、化學侵蝕和磨損。該領域最常使用的塗層為碳化鎢、鎳基超合金和鈷基超合金塗層，並搭配高壓高速火焰噴塗，可以有效提升工件壽命。最典型的應用為球閥、閥體、閘板、螺桿、深抽油管。",],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_3=new Vue({
  el: "#oil_content",
  data: {
    contents: oil_data,
  }
});
//------------------------------------
var others_data=[
  {
    show_title: true,
    title: "其他領域應用",
    show_text: true,
    texts: ["在生醫領域中，能使用電漿噴塗HA材料在牙根或人造骨骼上，以提供更好的生物相容性；在靶材工業製程中，使用冷氣動力噴塗可進行靶材的再生工作，而熱噴塗（電漿噴塗）可以生產一些陶瓷靶材，例如：矽靶、氧化鈮、氧化鉻等；熱噴塗製程在固態氧化物燃料電池的應用上，目前噴塗連接板相關之技術應用已相當成熟，在高溫環境下可以提高電子傳導能力。",],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_4=new Vue({
  el: "#others_content",
  data: {
    contents: others_data,
  }
});
//------------------------------------
var paper_data=[
  {
    pics: ["../image/t-img-paper-1.jpg","../image/t-img-paper-2.jpg","../image/t-img-paper-3.jpg"],
    show_title: true,
    title: "印刷造紙領域應用",
    show_text: true,
    texts: ["造紙業的設備長時間都是在高速運轉與高磨耗的環境下運行，相對於工件表面會需要有高硬度的塗層，最常見的例子為瓦楞輥表面使用高壓高速火焰噴塗碳化鎢塗層，此製程可以有效提升瓦楞輥的壽命，也可以取代傳統的鍍硬鉻，減少對環境的污染。","而另外一個印刷業會用到的為印刷輪，工件表面同樣會噴塗高硬度塗層，但印刷輥輪表面會需要進行鐳射雕刻紋路，所以表面緻密性要求相當高，以目前常見的塗層會採用氧化鉻並搭配電漿噴塗。而這近年對塗層要求相對提高，在歐美等先進國家會採用漿料電漿噴塗來得到更好的塗層緻密性與硬度。"],
    show_lists: false,
    lists: ["",],
  },
  ];

var vm_5=new Vue({
  el: "#paper_content",
  data: {
    contents: paper_data,
  }
});

//------------------------------------
var semicd_data=[
  {
    pics: ["../image/t-img-semicd-1.jpg","../image/t-img-semicd-2.jpg","../image/t-img-semicd-3.jpg"],
    show_title: true,
    title: "光電半導體領域應用",
    show_text: true,
    texts: ["光電半導體的應用主要為設備清洗，而熱噴塗在該領域有兩種工藝制程，分別為電漿噴塗與電弧噴塗其應用也不太相同，以電漿噴塗而言，所噴塗的材料為氧化鋁和氧化釔塗層，主要用來抵抗等離子的轟擊造成腔體的損壞。另外一種電弧式噴塗的工藝則是噴塗純鋁線，使腔體內部表面具有高粗糙度，經過尖端放電的效果來捕捉腔體內部的帶電粒子，防止這些粒子影響良率。",],
    show_lists: false,
    lists: ["","",],
  },
  ];

var vm_6=new Vue({
  el: "#semicd_content",
  data: {
    contents: semicd_data,
  }
});
//------------------------------------
var steel_data=[
  {
    pics: ["../image/t-img-steel-1.jpg","../image/t-img-steel-2.jpg","../image/t-img-steel-3.jpg"],
    show_title: true,
    title: "鋼鐵冶鍊領域應用",
    show_text: true,
    texts: ["鋼鐵產業對於工件而言，是最為嚴苛的工作場所，長時間的受到高溫沖蝕及融損、高磨損等，藉由使用熱噴塗在工件表面形成保護塗層可大幅提高工件的使用壽命，也可以在塗層失效後重新被覆新的塗層來保護工件，進而減少購置新工件之成本。在塗層的選擇上大部分是以NiCr基合金、CoCr基合金、碳化鎢系、陶瓷和瓷金材料為主，這些材料分別有抗高溫、耐磨、抗熱腐蝕與抗熱沖蝕的效果。在製成選擇上則以電漿噴塗與高壓高速火焰噴塗為主。",],
    show_lists: true,
    lists: ["煉鋼廠：鬼齒、高爐羽口、連鑄結晶器銅板","鋼板熱壓工廠：粗壓輸送輥、精壓輸送輥、夾延輥、卷取輥","連續熱軋工廠：連續鑄造輥、冷延加工輥、連續退火爐爐輥","線材、棒材工廠：導引輥、伸線胴","連續熱浸鍍鋅工廠：鍍鋅輥(沉浸輥)、穩定輥、張力輥、接觸輥"],
  },
  ];

var vm_7=new Vue({
  el: "#steel_content",
  data: {
    contents: steel_data,
  }
});