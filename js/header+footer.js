var data_cnav=[
	{
		page_i: "nav_bottom/plasma/plasma.html",
		page_t: "../nav_bottom/plasma/plasma.html",
		page_b: "../../nav_bottom/plasma/plasma.html",
		name: "電漿噴塗設備", 
	},
	{
		page_i: "nav_bottom/arc/arc.html",
		page_t: "../nav_bottom/arc/arc.html",
		page_b: "../../nav_bottom/arc/arc.html",
		name: "電弧噴塗設備", 
	},
	{
		page_i: "nav_bottom/HVOF/HVOF.html",
		page_t: "../nav_bottom/HVOF/HVOF.html",
		page_b: "../../nav_bottom/HVOF/HVOF.html",
		name: "HVOF噴塗設備", 
	},
	{
		page_i: "nav_bottom/flame/flame.html",
		page_t: "../nav_bottom/flame/flame.html",
		page_b: "../../nav_bottom/flame/flame.html",
		name: "火焰噴塗設備", 
	},
	{
		page_i: "nav_bottom/cold/cold.html",
		page_t: "../nav_bottom/cold/cold.html",
		page_b: "../../nav_bottom/cold/cold.html",
		name: "冷氣動力噴塗設備", 
	},
	{
		page_i: "nav_bottom/feeder/feeder.html",
		page_t: "../nav_bottom/feeder/feeder.html",
		page_b: "../../nav_bottom/feeder/feeder.html",
		name: "送料設備", 
	},
	{
		page_i: "nav_bottom/parts/parts.html",
		page_t: "../nav_bottom/parts/parts.html",
		page_b: "../../nav_bottom/parts/parts.html",
		name: "耗材與零件", 
	},
	{
		page_i: "nav_bottom/asider/asider.html",
		page_t: "../nav_bottom/asider/asider.html",
		page_b: "../../nav_bottom/asider/asider.html",
		name: "周邊輔助設備", 
	},
];

var vm_ncollepse=new Vue({
	el: "#navbar",
	data: {
		navbar: data_cnav
	}
});

var data_mnav=[
	{
		page_i: "index.html",
		page_t: "../index.html",
		page_b: "../../index.html",
		name: "HOME"
	},
	{
		page_i: "nav_top/tech.html",
		page_t: "../nav_top/tech.html",
		page_b: "../../nav_top/tech.html",
		name: "技術應用"
	},
	{
		page_i: "nav_top/about.html",
		page_t: "../nav_top/about.html",
		page_b: "../../nav_top/about.html",
		name: "關於我們"
	},
	{
		page_i: "nav_top/contact.html",
		page_t: "../nav_top/contact.html",
		page_b: "../../nav_top/contact.html",
		name: "聯絡我們"
	},
];

var vm_ntop=new Vue({
	el: "nav.main-nav",
  	data: {
  		main: data_mnav
  	}
});

var data_pnav=[
	{
		page_i: "nav_bottom/plasma/plasma.html",
		page_t: "../nav_bottom/plasma/plasma.html",
		page_b: "../plasma/plasma.html",
		name: "電漿噴塗設備",
		tags: [
		{
			page_i: "nav_bottom/plasma/plasma-3710.html",
			page_t: "../nav_bottom/plasma/plasma-3710.html",
			page_b: "../plasma/plasma-3710.html",
			name: "Praxair 3710",
		},
		{
			page_i: "nav_bottom/plasma/plasma-6600.html",
			page_t: "../nav_bottom/plasma/plasma-6600.html",
			page_b: "../plasma/plasma-6600.html",
			name: "Praxair 6600XL",
		},
		{
			page_i: "nav_bottom/plasma/plasma-7700.html",
			page_t: "../nav_bottom/plasma/plasma-7700.html",
			page_b: "../plasma/plasma-7700.html",
			name: "Praxair 7700 UPC",
		},
		{
			page_i: "nav_bottom/plasma/plasma-plazjet.html",
			page_t: "../nav_bottom/plasma/plasma-plazjet.html",
			page_b: "../plasma/plasma-plazjet.html",
			name: "Praxair PlazJet",
		},
		{
			page_i: "nav_bottom/plasma/plasma-guns.html",
			page_t: "../nav_bottom/plasma/plasma-guns.html",
			page_b: "../plasma/plasma-guns.html",
			name: "Praxair 電漿噴槍",
		},
		{
			page_i: "nav_bottom/plasma/plasma-axial3.html",
			page_t: "../nav_bottom/plasma/plasma-axial3.html",
			page_b: "../plasma/plasma-axial3.html",
			name: "Mettech Axial 3",
		},],
	},
	{
		page_i: "nav_bottom/arc/arc.html",
		page_t: "../nav_bottom/arc/arc.html",
		page_b: "../arc/arc.html",
		name: "電弧噴塗設備",
		tags: [
		{
			page_i: "nav_bottom/arc/arc-8835.html",
			page_t: "../nav_bottom/arc/arc-8835.html",
			page_b: "../arc/arc-8835.html",
			name: "Praxair 8835/8830",
		},
		{
			page_i: "nav_bottom/arc/arc-bp400.html",
			page_t: "../nav_bottom/arc/arc-bp400.html",
			page_b: "../arc/arc-bp400.html",
			name: "Praxair BP400",
		},
		{
			page_i: "nav_bottom/arc/arc-coarc.html",
			page_t: "../nav_bottom/arc/arc-coarc.html",
			page_b: "../arc/arc-coarc.html",
			name: "Praxair CoArc",
		},
		{
			page_i: "nav_bottom/arc/arc-456.html",
			page_t: "../nav_bottom/arc/arc-456.html",
			page_b: "../arc/arc-456.html",
			name: "Thermion AVD456",
		},
		{
			page_i: "nav_bottom/arc/arc-450.html",
			page_t: "../nav_bottom/arc/arc-450.html",
			page_b: "../arc/arc-450.html",
			name: "Thermion AVD450",
		},
		],
	},
	{
		page_i: "nav_bottom/HVOF/HVOF.html",
		page_t: "../nav_bottom/HVOF/HVOF.html",
		page_b: "../HVOF/HVOF.html",
		name: "HVOF噴塗設備",
		tags: [
		{
			page_i: "nav_bottom/HVOF/hvof-jp5000.html",
			page_t: "../nav_bottom/HVOF/hvof-jp5000.html",
			page_b: "../HVOF/hvof-jp5000.html",
			name: "Praxair JP5000",
		},
		{
			page_i: "nav_bottom/HVOF/hvof-jp8000.html",
			page_t: "../nav_bottom/HVOF/hvof-jp8000.html",
			page_b: "../HVOF/hvof-jp8000.html",
			name: "Praxair JP8000",
		},
		{
			page_i: "nav_bottom/HVOF/hvof-guns.html",
			page_t: "../nav_bottom/HVOF/hvof-guns.html",
			page_b: "../HVOF/hvof-guns.html",
			name: "Praxair HVOF噴槍",
		},
		],
	},
	{
		page_i: "nav_bottom/flame/flame.html",
		page_t: "../nav_bottom/flame/flame.html",
		page_b: "../flame/flame.html",
		name: "火焰噴塗設備",
		tags: [
		{
			page_i: "nav_bottom/flame/flame-guns.html",
			page_t: "../nav_bottom/flame/flame-guns.html",
			page_b: "../flame/flame-guns.html",
			name: "Saint Gobain 噴槍",
		},
		],
	},
	{
		page_i: "nav_bottom/cold/cold.html",
		page_t: "../nav_bottom/cold/cold.html",
		page_b: "../cold/cold.html",
		name: "冷氣動力噴塗設備",
		tags: [
		{
			page_i: "nav_bottom/cold/cold-impact.html",
			page_t: "../nav_bottom/cold/cold-impact.html",
			page_b: "../cold/cold-impact.html",
			name: "Impact 噴塗系統",
		},
		],
	},
	{
		page_i: "nav_bottom/feeder/feeder.html",
		page_t: "../nav_bottom/feeder/feeder.html",
		page_b: "../feeder/feeder.html",
		name: "送料設備",
		tags: [
		{
			page_i: "nav_bottom/feeder/feeder-1264s.html",
			page_t: "../nav_bottom/feeder/feeder-1264s.html",
			page_b: "../feeder/feeder-1264s.html",
			name: "Praxair 1264型送粉機",
		},
		{
			page_i: "nav_bottom/feeder/feeder-thermico.html",
			page_t: "../nav_bottom/feeder/feeder-thermico.html",
			page_b: "../feeder/feeder-thermico.html",
			name: "Thermico CPF2",
		},
		{
			page_i: "nav_bottom/feeder/feeder-mettech.html",
			page_t: "../nav_bottom/feeder/feeder-mettech.html",
			page_b: "../feeder/feeder-mettech.html",
			name: "Mettech 750/350",
		},
		],
	},
	{
		page_i: "nav_bottom/parts/parts.html",
		page_t: "../nav_bottom/parts/parts.html",
		page_b: "../parts/parts.html",
		name: "耗材與零件",
		tags: [
		{
			page_i: "nav_bottom/parts/parts-powder.html",
			page_t: "../nav_bottom/parts/parts-powder.html",
			page_b: "../parts/parts-powder.html",
			name: "噴塗粉末",
		},
		{
			page_i: "nav_bottom/parts/parts-wires.html",
			page_t: "../nav_bottom/parts/parts-wires.html",
			page_b: "../parts/parts-wires.html",
			name: "噴塗線材",
		},
		{
			page_i: "nav_bottom/parts/parts-suspension.html",
			page_t: "../nav_bottom/parts/parts-suspension.html",
			page_b: "../parts/parts-suspension.html",
			name: "噴塗漿料",
		},
		{
			page_i: "nav_bottom/parts/parts-flexicord.html",
			page_t: "../nav_bottom/parts/prats-flexicord.html",
			page_b: "../parts/parts-flexicord.html",
			name: "FlexiCord 包藥線",
		},
		{
			page_i: "nav_bottom/parts/parts-3D.html",
			page_t: "../nav_bottom/parts/parts-3D.html",
			page_b: "../parts/parts-3D.html",
			name: "3D金屬列印粉末",
		},
		{
			page_i: "nav_bottom/parts/parts-masking.html",
			page_t: "../nav_bottom/parts/parts-masking.html",
			page_b: "../parts/parts-masking.html",
			name: "耐熱遮覆膠帶",
		},
		{
			page_i: "nav_bottom/parts/parts-stellite.html",
			page_t: "../nav_bottom/parts/parts-stellite.html",
			page_b: "../parts/parts-stellite.html",
			name: "超合金焊材",
		},
		{
			page_i: "nav_bottom/parts/parts-tufcote.html",
			page_t: "../nav_bottom/parts/parts-tufcote.html",
			page_b: "../parts/parts-tufcote.html",
			name: "TufCote 焊材",
		},
		{
			page_i: "nav_bottom/parts/parts-parts.html",
			page_t: "../nav_bottom/parts/parts-parts.html",
			page_b: "../parts/parts-parts.html",
			name: "噴塗設備零件",
		},
		],
	},
	{
		page_i: "nav_bottom/asider/asider.html",
		page_t: "../nav_bottom/asider/asider.html",
		page_b: "../asider/asider.html",
		name: "周邊輔助設備",
		tags: [
		{
			page_i: "nav_bottom/asider/asider-robotics.html",
			page_t: "../nav_bottom/asider/asider-robotics.html",
			page_b: "../asider/asider-robotics.html",
			name: "自動化設備",
		},
		{
			page_i: "nav_bottom/asider/asider-enclosure.html",
			page_t: "../nav_bottom/asider/asider-enclosure.html",
			page_b: "../asider/asider-enclosure.html",
			name: "隔音間",
		},
		{
			page_i: "nav_bottom/asider/asider-dustcollector.html",
			page_t: "../nav_bottom/asider/asider-dustcollector.html",
			page_b: "../asider/asider-dustcollector.html",
			name: "集塵設備",
		},
		{
			page_i: "nav_bottom/asider/asider-spraywatch.html",
			page_t: "../nav_bottom/asider/asider-spraywatch.html",
			page_b: "../asider/asider-spraywatch.html",
			name: "噴塗監控系統",
		},
		],
	},
];

var vm_nbottom=new Vue({
	el: "#pd-nav",
	data: {
		pd: data_pnav
	}
});

var data_footer=[
	{
		info: "Phone",
		text: "02-86626788",
	},
	{
		info: "Fax",
		text: "02-86626766",
	},
	{
		info: "Email",
		text: "otto_cheng@innovator.com.tw",
	},
	{
		info: "Address",
		text: "新北市深坑區北深路三段270巷16號4樓之1",
	},
];

var vm_footer=new Vue({
	el: "footer",
	data: {
		flogo: "image/logo-white.png",
		flogo_1: "../image/logo-white.png",
		flogo_2: "../../image/logo-white.png",
		copyright: "© 2019 Innovator",
		finfo: data_footer,	
	}
});
