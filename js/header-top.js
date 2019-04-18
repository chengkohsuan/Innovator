var data_mnav=[
	{
		page: "index.html",
		page_1: "../index.html",
		page_2: "../../index.html",
		name: "HOME"
	},
	{
		page: "nav_top/tech.html",
		page_1: "../nav_top/tech.html",
		page_2: "../../nav_top/tech.html",
		name: "技術應用"
	},
	{
		page: "nav_top/about.html",
		page_1: "../nav_top/about.html",
		page_2: "../../nav_top/about.html",
		name: "關於我們"
	},
	{
		page: "nav_top/contact.html",
		page_1: "../nav_top/contact.html",
		page_2: "../../nav_top/contact.html",
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
		page: "../plasma/plasma.html",
		name: "電漿噴塗設備",
		tags: [
		{
			page: "../plasma/plasma-3710.html",
			name: "Praxair 3710",
		},
		{
			page: "../plasma/plasma-6600.html",
			name: "Praxair 6600XL",
		},
		{
			page: "../plasma/plasma-7700.html",
			name: "Praxair 7700 UPC",
		},
		{
			page: "../plasma/plasma-plazjet.html",
			name: "Praxair PlazJet",
		},
		{
			page: "../plasma/plasma-guns.html",
			name: "Praxair 電漿噴槍",
		},
		{
			page: "../plasma/plasma-axial3.html",
			name: "Mettech Axial 3",
		},],
	},
	{
		page: "../arc/arc.html",
		name: "電弧噴塗設備",
		tags: [
		{
			page: "../arc/arc-8835.html",
			name: "Praxair 8835/8830",
		},
		{
			page: "../arc/arc-bp400.html",
			name: "Praxair BP400",
		},
		{
			page: "../arc/arc-coarc.html",
			name: "Praxair CoArc",
		},
		{
			page: "../arc/arc-456.html",
			name: "Thermion AVD456",
		},
		{
			page: "../arc/arc-450.html",
			name: "Thermion AVD450",
		},
		],
	},
	{
		page: "../HVOF/HVOF.html",
		name: "HVOF噴塗設備",
		tags: [
		{
			page: "../HVOF/hvof-jp5000.html",
			name: "Praxair JP5000",
		},
		{
			page: "../HVOF/hvof-jp8000.html",
			name: "Praxair JP8000",
		},
		{
			page: "../HVOF/hvof-guns.html",
			name: "Praxair HVOF噴槍",
		},
		],
	},
	{
		page: "../flame/flame.html",
		name: "火焰噴塗設備",
		tags: [
		{
			page: "../flame/flame-guns.html",
			name: "Saint Gobain 噴槍",
		},
		],
	},
	{
		page: "../cold/cold.html",
		name: "冷氣動力噴塗設備",
		tags: [
		{
			page: "../cold/cold-impact.html",
			name: "Impact 噴塗系統",
		},
		],
	},
	{
		page: "../feeder/feeder.html",
		name: "送料設備",
		tags: [
		{
			page: "../feeder/feeder-1264s.html",
			name: "Praxair 1264型送粉機",
		},
		{
			page: "../feeder/feeder-thermico.html",
			name: "Thermico CPF2",
		},
		{
			page: "../feeder/feeder-mettech.html",
			name: "Mettech 750/350",
		},
		],
	},
	{
		page: "../parts/parts.html",
		name: "耗材與零件",
		tags: [
		{
			page: "../parts/parts-powder.html",
			name: "噴塗粉末",
		},
		{
			page: "../parts/parts-wires.html",
			name: "噴塗線材",
		},
		{
			page: "../parts/parts-suspension.html",
			name: "噴塗漿料",
		},
		{
			page: "../parts/parts-flexicord.html",
			name: "FlexiCord 包藥線",
		},
		{
			page: "../parts/parts-3D.html",
			name: "3D金屬列印粉末",
		},
		{
			page: "../parts/parts-masking.html",
			name: "耐熱遮覆膠帶",
		},
		{
			page: "../parts/parts-stellite.html",
			name: "超合金焊材",
		},
		{
			page: "../parts/parts-tufcote.html",
			name: "TufCote 焊材",
		},
		{
			page: "../parts/parts-parts.html",
			name: "噴塗設備零件",
		},
		],
	},
	{
		page: "../asider/asider.html",
		name: "周邊輔助設備",
		tags: [
		{
			page: "../asider/asider-robotics.html",
			name: "自動化設備",
		},
		{
			page: "../asider/asider-enclosure.html",
			name: "隔音間",
		},
		{
			page: "../asider/asider-dustcollector.html",
			name: "集塵設備",
		},
		{
			page: "../asider/asider-spraywatch.html",
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
		copyright: "© 2019 Innovator",
		finfo: data_footer	
	}
});
