"use strict";
module.exports = function(req, res, next, number){
	var videos = {
		uno: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461713178275_1-480.mp4',
		dos: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456080962039_1-480.mp4',
		tres: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456082128073_1-480.mp4',
		cuatro: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456082937927_1-480.mp4',
		cinco: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456084464992_1-480.mp4',
		seis: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456085041723_1-480.mp4',
		siete: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456086022521_1-480.mp4',
		ocho: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456095806910_1-480.mp4',
		nuevo: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456097581027_1-480.mp4',
		diez: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456099724880_1-480.mp4',
		once: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456104725475_1-480.mp4',
		dosce: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456112058365_1-480.mp4',
		tresce: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456114505986_1-480.mp4',
		catorce: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456187619863_1-480.mp4',
		quince: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456189059082_1-480.mp4',
		diesiceis: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456191306424_1-480.mp4',
		diesiciete: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456199184589_1-480.mp4',
		diesiocho: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456281467443_1-480.mp4',
		diesinueve: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456286007560_1-480.mp4',
		veinte: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456707589784_1-480.mp4',
		veintiuno: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456891001314_1-480.mp4',
		veintidos: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457242295884_1-480.mp4',
		veintitres: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457283638937_3-480.mp4',
		veinticuatro: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457294675994_6-480.mp4',
		veinticinco: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457316441469_7-480.mp4',
		26: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457318469753_8-480.mp4',
		27: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457813990491_1-480.mp4',
		28: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458429986647_1-480.mp4',
		29: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458430874691_2-480.mp4',
		30: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458431092176_3-480.mp4',
		31: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458431742098_4-480.mp4',
		32: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458433462108_6-480.mp4',
		33: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458506224463_1-480.mp4',
		34: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458507325339_2-480.mp4',
		35: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458509612293_3-480.mp4',
		36: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458510799267_4-480.mp4',
		37: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458511604236_5-480.mp4',
		38: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458513135206_6-480.mp4',
		39: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458513720875_7-480.mp4',
		40: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458519223492_8-480.mp4',
		41: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459211531134_1-480.mp4',
		42: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459212485566_2-480.mp4',
		43: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459213552066_3-480.mp4',
		44: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459214702472_4-480.mp4',
		45: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459215269089_5-480.mp4',
		46: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459216376020_6-480.mp4',
		47: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459217369650_7-480.mp4',
		48: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459221897096_8-480.mp4',
		49: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459223039953_9-480.mp4',
		50: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459225734174_10-480.mp4',
		51: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459226603158_11-480.mp4',
		52: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459227677054_12-480.mp4',
		53: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459303872887_1-480.mp4',
		54: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459305197861_2-480.mp4',
		55: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459307456812_3-480.mp4',
		56: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459308078103_4-480.mp4',
		57: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459310465698_5-480.mp4',
		58: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459311837962_6-480.mp4',
		59: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459313844809_7-480.mp4',
		60: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459316181921_8-480.mp4',
		61: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733626754_1-480.mp4',
		62: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733163_2-480.mp4',
		63: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733269_6-480.mp4',
		64: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733268_4-480.mp4',
		65: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733268_5-480.mp4',
		66: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733227_3-480.mp4',
		67: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733734524_11-480.mp4',
		68: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733694_7-480.mp4',
		69: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733740_10-480.mp4',
		70: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733694_8-480.mp4',
		71: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141108_1-480.mp4',
		72: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141389_2-480.mp4',
		73: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141417_3-480.mp4',
		74: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141451_5-480.mp4',
		75: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141417_4-480.mp4',
		76: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141451_6-480.mp4',
		77: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141724_8-480.mp4',
		78: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141491_7-480.mp4',
		79: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141782_10-480.mp4',
		80: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141758_9-480.mp4',
		81: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141814_11-480.mp4',
		82: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141814_12-480.mp4',
		83: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270142076_14-480.mp4',
		84: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141867_13-480.mp4',
		85: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406199_15-480.mp4',
		86: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406239_16-480.mp4',
		87: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406239_17-480.mp4',
		88: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406327_18-480.mp4',
		89: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406675_19-480.mp4',
		90: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406752_20-480.mp4',
		91: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406796_21-480.mp4',
		92: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406820_22-480.mp4',
		93: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406904_23-480.mp4',
		94: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271407256_24-480.mp4',
		95: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119314_1-480.mp4',
		96: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119314_2-480.mp4',
		97: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119715_3-480.mp4',
		98: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119715_4-480.mp4',
		99: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475634_5-480.mp4',
		100: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475672_6-480.mp4',
		101: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_8-480.mp4',
		102: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_8-480.mp4',
		103: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_9-480.mp4',
		104: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475949_11-480.mp4',
		105: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_10-480.mp4',
		106: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281378_12-480.mp4',
		107: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281426_13-480.mp4',
		108: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281631_14-480.mp4',
		109: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281663_15-480.mp4',
		110: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281663_16-480.mp4',
		111: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103097_17-480.mp4',
		112: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103141_18-480.mp4',
		113: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103141_19-480.mp4',
		114: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103190_20-480.mp4',
		115: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461598708418_21-480.mp4',
		116: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461598708717_22-480.mp4',
		117: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461598708786_23-480.mp4',
		118: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461600044152_26-480.mp4',
		119: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461600044189_27-480.mp4',
		120: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461600044436_28-480.mp4',

	}


	switch(Number(number)){
		case 1:
			res.render('view', {
				title: 'Introducción - Frontend Developer',
				titleVideo: number + '. Introducción',
				titleSubmenu: 'Introducción',
				titleSubMenuNext: 'Instalando Nuestro IDE',
				video: videos.uno
			});
		 break;
		case 2:
			res.render('view', {
				title: 'Instalando Nuestro IDE - Frontend Developer',
				titleVideo: number + '. Instalando Nuestro IDE',
				titleSubmenu: 'Instalando Nuestro IDE',
				titleSubmenuNext: 'Configurando',
				video: videos.dos
			});
		 break;
		case 3:
			res.render('view', {
				title: 'Configurando - Frontend Developer',
				titleVideo: number + '. Configurando',
				titleSubmenu: 'Configurando',
				titleSubmenuNext: 'Cambiar apariencia',
				video: videos.tres
			});
		 break;
		case 4:
			res.render('view', {
				title: 'Cambiar apariencia - Frontend Developer',
				titleVideo: number + '. Cambiar apariencia',
				titleSubmenu: 'Cambiar apariencia',
				titleSubmenuNext: 'Que es HTML',
				video: videos.cuatro
			});
		 break;
		 case 4:
			res.render('view', {
				title: 'Que es HTML - Frontend Developer',
				titleVideo: number + '. Que es HTML',
				titleSubmenu: 'Que es HTML',
				titleSubmenuNext: 'Que es CSS',
				video: videos.cinco
			});
		 break;
		 case 5:
			res.render('view', {
				title: 'Que es CSS - Frontend Developer',
				titleVideo: number + '. Que es CSS',
				titleSubmenu: 'Que es CSS',
				titleSubmenuNext: 'Que es JS',
				video: videos.seis
			});
		 break;
		 case 6:
			res.render('view', {
				title: 'Que es JS - Frontend Developer',
				titleVideo: number + '. Que es JS',
				titleSubmenu: 'Que es JS',
				titleSubmenuNext: 'Tipos de maquetación 1',
				video: videos.siete
			});
		 break;
		 case 7:
			res.render('view', {
				title: 'Tipos de maquetación 1 - Frontend Developer',
				titleVideo: number + '. Tipos de maquetación 1',
				titleSubmenu: 'Tipos de maquetación 1',
				titleSubmenuNext: 'Tipos de maquetación 2',
				video: videos.ocho
			});
		 break;
		 case 8:
			res.render('view', {
				title: 'Tipos de maquetación 2 - Frontend Developer',
				titleVideo: number + '. Tipos de maquetación 2',
				titleSubmenu: 'Tipos de maquetación 2',
				titleSubmenuNext: 'Tipos de maquetación 3',
				video: videos.nueve
			});
		 break;
		 case 9:
			res.render('view', {
				title: 'Tipos de maquetación 3 - Frontend Developer',
				titleVideo: number + '. Tipos de maquetación 3',
				titleSubmenu: 'Tipos de maquetación 3',
				titleSubmenuNext: 'Tipos de maquetación 4',
				video: videos.diez
			});
		 break;
		 case 10:
			res.render('view', {
				title: 'Tipos de maquetación 4 - Frontend Developer',
				titleVideo: number + '. Tipos de maquetación 4',
				titleSubmenu: 'Tipos de maquetación 4',
				titleSubmenuNext: 'Sintaxis HTML5',
				video: videos.once
			});
		 break;
		 case 11:
			res.render('view', {
				title: 'Sintaxis HTML5',
				titleVideo: number + '. Sintaxis HTML5',
				titleSubmenu: 'Sintaxis HTML5',
				titleSubmenuNext: 'Modelo HTML5',
				video: videos.dosce
			});
		 break;
		 case 12:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '1. Etiquetas HTML5',
				titleSubmenuNext: '2. Etiquetas HTML5',
				video: videos.tresce
			});
		 break;
		 case 13:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '2. Etiquetas HTML5',
				titleSubmenuNext: '3. Etiquetas HTML5',
				video: videos.tresce
			});
		 break;
		 case 13:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '3. Etiquetas HTML5',
				titleSubmenuNext: '4. Etiquetas HTML5',
				video: videos.catorce
			});
		 break;
		 case 14:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '5. Etiquetas HTML5',
				titleSubmenuNext: '6. Etiquetas HTML5',
				video: videos.catorce
			});
		 break;
		 case 14:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '7. Etiquetas HTML5',
				titleSubmenuNext: '8. Etiquetas HTML5',
				video: videos.quince
			});
		 break;
		 case 15:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '8. Etiquetas HTML5',
				titleSubmenuNext: '9. Etiquetas HTML5',
				video: videos.diesiceis
			});
		 break;
		 case 15:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '9. Etiquetas HTML5',
				titleSubmenuNext: '10. Etiquetas HTML5',
				video: videos.diesiciete
			});
		 break;
		 case 16:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '10. Etiquetas HTML5',
				titleSubmenuNext: '11. Etiquetas HTML5',
				video: videos.diesiocho
			});
		 break;
		 case 17:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '11. Etiquetas HTML5',
				titleSubmenuNext: '12. Etiquetas HTML5',
				video: videos.diesinueve
			});
		 break;
		 case 18:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '13. Etiquetas HTML5',
				titleSubmenuNext: '14. Etiquetas HTML5',
				video: videos.veinte
			});
		 break;
		 case 19:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '15. Etiquetas HTML5',
				titleSubmenuNext: '16. Etiquetas HTML5',
				video: videos.veintiuno
			});
		 break;
		 case 20:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '17. Etiquetas HTML5',
				titleSubmenuNext: '18. Etiquetas HTML5',
				video: videos.veintidos
			});
		 break;
		 case 21:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '19. Etiquetas HTML5',
				titleSubmenuNext: '20. Etiquetas HTML5',
				video: videos.veintitres
			});
		 break;
		 case 21:
			res.render('view', {
				title: 'Etiquetas HTML5',
				titleVideo: number + '. Etiquetas HTML5',
				titleSubmenu: '21. Etiquetas HTML5',
				titleSubmenuNext: '1. Css - Stylesheets',
				video: videos.veinticuatro
			});
		 break;
		 case 22:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '1. Css - Stylesheets',
				titleSubmenuNext: '2. Css - Stylesheets',
				video: videos.veinticinco
			});
		 break;
		 case 23:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '1. Css - Stylesheets',
				titleSubmenuNext: '2. Css - Stylesheets',
				video: videos.veintiseis
			});
		 break;
		 case 24:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '2. Css - Stylesheets',
				titleSubmenuNext: '3. Css - Stylesheets',
				video: videos.veintisiete
			});
		 break;
		 case 24:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '3. Css - Stylesheets',
				titleSubmenuNext: '4. Css - Stylesheets',
				video: videos.veintiocho
			});
		 break;
		 case 25:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '5. Css - Stylesheets',
				titleSubmenuNext: '6. Css - Stylesheets',
				video: videos.veintinueve
			});
		 break;
		 case 26:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '7. Css - Stylesheets',
				titleSubmenuNext: '8. Css - Stylesheets',
				video: videos.veintiocho
			});
		 break;
		 case 27:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '9. Css - Stylesheets',
				titleSubmenuNext: '10. Css - Stylesheets',
				video: videos.veintinueve
			});
		 break;
		 case 27:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '10. Css - Stylesheets',
				titleSubmenuNext: '11. Css - Stylesheets',
				video: videos.treinta
			});
		 break;
		 case 27:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '11. Css - Stylesheets',
				titleSubmenuNext: '12. Css - Stylesheets',
				video: videos.treintauno
			});
		 break;
		 case 28:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '13. Css - Stylesheets',
				titleSubmenuNext: '14. Css - Stylesheets',
				video: videos.treintados
			});
		 break;
		 case 28:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '15. Css - Stylesheets',
				titleSubmenuNext: '16. Css - Stylesheets',
				video: videos.treintatres
			});
		 break;
		 case 28:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '17. Css - Stylesheets',
				titleSubmenuNext: '18. Css - Stylesheets',
				video: videos.treintacuatro
			});
		 break;
		  case 28:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '18. Css - Stylesheets',
				titleSubmenuNext: '19. Css - Stylesheets',
				video: videos.treintacinco
			});
		 break;

		  case 28:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '20. Css - Stylesheets',
				titleSubmenuNext: '21. Css - Stylesheets',
				video: videos.treintaseis
			});
		 break;
	
		  case 28:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '22. Css - Stylesheets',
				titleSubmenuNext: '23. Css - Stylesheets',
				video: videos.treintasiete
			});
		 break;
		
		  case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '23. Css - Stylesheets',
				titleSubmenuNext: '24. Css - Stylesheets',
				video: videos.treintaocho
			});
		 break;
		 
		  case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '24. Css - Stylesheets',
				titleSubmenuNext: '25. Css - Stylesheets',
				video: videos.treintanueve
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '25. Css - Stylesheets',
				titleSubmenuNext: '26. Css - Stylesheets',
				video: videos.cuarenta
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '27. Css - Stylesheets',
				titleSubmenuNext: '28. Css - Stylesheets',
				video: videos.cuarentauno
			});
		 break;

		  case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '29. Css - Stylesheets',
				titleSubmenuNext: '30. Css - Stylesheets',
				video: videos.cuarentados
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '31. Css - Stylesheets',
				titleSubmenuNext: '32. Css - Stylesheets',
				video: videos.cuarentatres
			});
		 break;

		  case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '32. Css - Stylesheets',
				titleSubmenuNext: '33. Css - Stylesheets',
				video: videos.cuarentacuatro
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '33. Css - Stylesheets',
				titleSubmenuNext: '34. Css - Stylesheets',
				video: videos.cuarentacinco
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '35. Css - Stylesheets',
				titleSubmenuNext: '36. Css - Stylesheets',
				video: videos.cuarentaseis
			});
		 break;


		 case 29:
			res.render('view', {
				title: 'Css - Stylesheets',
				titleVideo: number + '. Css - Stylesheets',
				titleSubmenu: '36. Css - Stylesheets',
				titleSubmenuNext: '1 - Javascript',
				video: videos.cuarentasiete
			});
		 break;


		 case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '1 - Javascript',
				titleSubmenuNext: '2 - Javascript',
				video: videos.cuarentaocho
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '3 - Javascript',
				titleSubmenuNext: '4 - Javascript',
				video: videos.cuarentanueve
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '5 - Javascript',
				titleSubmenuNext: '6 - Javascript',
				video: videos.cincuenta
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '7 - Javascript',
				titleSubmenuNext: '8 - Javascript',
				video: videos.cincuentauno
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '9 - Javascript',
				titleSubmenuNext: '10 - Javascript',
				video: videos.cincuentacuatro
			});
		 break;


		 case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '11 - Javascript',
				titleSubmenuNext: '12 - Javascript',
				video: videos.cincuentacinco
			});
		 break;

		  case 29:
			res.render('view', {
				title: 'Javascript',
				titleVideo: number + '. Javascript',
				titleSubmenu: '13 - Javascript',
				titleSubmenuNext: '14 - Javascript',
				video: videos.cincuentaseis
			});
		 break;

		  case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '1. Jquery',
				titleSubmenuNext: '2. Jquery',
				video: videos.cincuentasiete
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '3. Jquery',
				titleSubmenuNext: '4. Jquery',
				video: videos.cincuentaocho
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '5. Jquery',
				titleSubmenuNext: '6. Jquery',
				video: videos.cincuentaocho
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '7. Jquery',
				titleSubmenuNext: '8. Jquery',
				video: videos.cincuentaocho
			});
		 break;

		  case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '9. Jquery',
				titleSubmenuNext: '10. Jquery',
				video: videos.cincuentaocho
			});
		 break;

		 case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '11. Jquery',
				titleSubmenuNext: '12. Jquery',
				video: videos.cincuentaocho
			});
		 break;

		  case 29:
			res.render('view', {
				title: 'Jquery',
				titleVideo: number + '. Jquery',
				titleSubmenu: '13. Jquery',
				titleSubmenuNext: '14. Jquery',
				video: videos.cincuentaocho
			});
		 break;

		default:
			console.log('nan');
		
	}

}