"use strict";
module.exports = function(req, res, next, number) {
    var videos = {
        A1: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461713178275_1-480.mp4',
        A2: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456080962039_1-480.mp4',
        A3: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456082128073_1-480.mp4',
        A4: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456082937927_1-480.mp4',
        A5: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456084464992_1-480.mp4',
        A6: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456085041723_1-480.mp4',
        A7: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456086022521_1-480.mp4',
        A8: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456095806910_1-480.mp4',
        A9: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456097581027_1-480.mp4',
        A10: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456099724880_1-480.mp4',
        A11: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456104725475_1-480.mp4',
        A12: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456112058365_1-480.mp4',
        A13: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456114505986_1-480.mp4',
        A14: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456187619863_1-480.mp4',
        A15: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456189059082_1-480.mp4',
        A16: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456191306424_1-480.mp4',
        A17: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456199184589_1-480.mp4',
        A18: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456281467443_1-480.mp4',
        A19: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456286007560_1-480.mp4',
        A20: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456707589784_1-480.mp4',
        A21: 'https://lib.tutellus.com/libraries/22/96/37/lib/1456891001314_1-480.mp4',
        A22: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457242295884_1-480.mp4',
        A23: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457283638937_3-480.mp4',
        A24: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457294675994_6-480.mp4',
        A25: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457316441469_7-480.mp4',
        A26: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457318469753_8-480.mp4',
        A27: 'https://lib.tutellus.com/libraries/22/96/37/lib/1457813990491_1-480.mp4',
        A28: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458429986647_1-480.mp4',
        A29: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458430874691_2-480.mp4',
        A30: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458431092176_3-480.mp4',
        A31: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458431742098_4-480.mp4',
        A32: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458433462108_6-480.mp4',
        A33: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458506224463_1-480.mp4',
        A34: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458507325339_2-480.mp4',
        A35: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458509612293_3-480.mp4',
        A36: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458510799267_4-480.mp4',
        A37: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458511604236_5-480.mp4',
        A38: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458513135206_6-480.mp4',
        A39: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458513720875_7-480.mp4',
        A40: 'https://lib.tutellus.com/libraries/22/96/37/lib/1458519223492_8-480.mp4',
        A41: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459211531134_1-480.mp4',
        A42: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459212485566_2-480.mp4',
        A43: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459213552066_3-480.mp4',
        A44: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459214702472_4-480.mp4',
        A45: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459215269089_5-480.mp4',
        A46: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459216376020_6-480.mp4',
        A47: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459217369650_7-480.mp4',
        A48: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459221897096_8-480.mp4',
        A49: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459223039953_9-480.mp4',
        A50: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459225734174_10-480.mp4',
        A51: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459226603158_11-480.mp4',
        A52: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459227677054_12-480.mp4',
        53: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459303872887_1-480.mp4',
        A54: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459305197861_2-480.mp4',
        A55: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459307456812_3-480.mp4',
        A56: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459308078103_4-480.mp4',
        A57: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459310465698_5-480.mp4',
        A58: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459311837962_6-480.mp4',
        A59: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459313844809_7-480.mp4',
        A60: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459316181921_8-480.mp4',
        A61: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733626754_1-480.mp4',
        A62: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733163_2-480.mp4',
        A63: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733269_6-480.mp4',
        A64: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733268_4-480.mp4',
        A65: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733268_5-480.mp4',
        A66: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733227_3-480.mp4',
        A67: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733734524_11-480.mp4',
        A68: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733694_7-480.mp4',
        A69: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733740_10-480.mp4',
        A70: 'https://lib.tutellus.com/libraries/22/96/37/lib/1459733733694_8-480.mp4',
        A71: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141108_1-480.mp4',
        A72: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141389_2-480.mp4',
        A73: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141417_3-480.mp4',
        A74: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141451_5-480.mp4',
        A75: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141417_4-480.mp4',
        A76: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141451_6-480.mp4',
        A77: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141724_8-480.mp4',
        A78: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141491_7-480.mp4',
        A79: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141782_10-480.mp4',
        A80: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141758_9-480.mp4',
        A81: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141814_11-480.mp4',
        A82: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141814_12-480.mp4',
        A83: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270142076_14-480.mp4',
        A84: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461270141867_13-480.mp4',
        A85: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406199_15-480.mp4',
        A86: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406239_16-480.mp4',
        A87: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406239_17-480.mp4',
        A88: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406327_18-480.mp4',
        A89: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406675_19-480.mp4',
        A90: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406752_20-480.mp4',
        A91: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406796_21-480.mp4',
        A92: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406820_22-480.mp4',
        A93: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271406904_23-480.mp4',
        A94: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461271407256_24-480.mp4',
        A95: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119314_1-480.mp4',
        A96: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119314_2-480.mp4',
        A97: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119715_3-480.mp4',
        A98: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461593119715_4-480.mp4',
        A99: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475634_5-480.mp4',
        A100: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475672_6-480.mp4',
        A101: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_8-480.mp4',
        A102: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_8-480.mp4',
        A103: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_9-480.mp4',
        A104: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475949_11-480.mp4',
        A105: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461594475900_10-480.mp4',
        A106: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281378_12-480.mp4',
        A107: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281426_13-480.mp4',
        A108: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281631_14-480.mp4',
        A109: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281663_15-480.mp4',
        A110: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461596281663_16-480.mp4',
        A111: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103097_17-480.mp4',
        A112: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103141_18-480.mp4',
        A113: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103141_19-480.mp4',
        A114: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461597103190_20-480.mp4',
        A115: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461598708418_21-480.mp4',
        A116: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461598708717_22-480.mp4',
        A117: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461598708786_23-480.mp4',
        A118: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461600044152_26-480.mp4',
        A119: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461600044189_27-480.mp4',
        A120: 'https://lib.tutellus.com/libraries/22/96/37/lib/1461600044436_28-480.mp4',

    }

    

    switch (Number(number)) {
        case 1:
            res.render('view', {
                title: 'Introducción - Frontend Developer',
                titleVideo: number + '. Introducción',
                titleSubmenu: 'Introducción',
                titleSubmenuNext: 'Instalando Nuestro IDE',
                video: videos.A1,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 2:
            res.render('view', {
                title: 'Instalando Nuestro IDE - Frontend Developer',
                titleVideo: number + '. Instalando Nuestro IDE',
                titleSubmenu: 'Instalando Nuestro IDE',
                titleSubmenuNext: 'Configurando',
                video: videos.A2,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 3:
            res.render('view', {
                title: 'Configurando - Frontend Developer',
                titleVideo: number + '. Configurando',
                titleSubmenu: 'Configurando',
                titleSubmenuNext: 'Cambiar apariencia',
                video: videos.A3,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 4:
            res.render('view', {
                title: 'Cambiar apariencia - Frontend Developer',
                titleVideo: number + '. Cambiar apariencia',
                titleSubmenu: 'Cambiar apariencia',
                titleSubmenuNext: 'Que es HTML',
                video: videos.A4,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 5:
            res.render('view', {
                title: 'Que es HTML - Frontend Developer',
                titleVideo: number + '. Que es HTML',
                titleSubmenu: 'Que es HTML',
                titleSubmenuNext: 'Que es CSS',
                video: videos.A5,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 6:
            res.render('view', {
                title: 'Que es CSS - Frontend Developer',
                titleVideo: number + '. Que es CSS',
                titleSubmenu: 'Que es CSS',
                titleSubmenuNext: 'Que es JS',
                video: videos.A6,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 7:
            res.render('view', {
                title: 'Que es JS - Frontend Developer',
                titleVideo: number + '. Que es JS',
                titleSubmenu: 'Que es JS',
                titleSubmenuNext: 'Tipos de maquetación 1',
                video: videos.A7,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 8:
            res.render('view', {
                title: 'Tipos de maquetación 1 - Frontend Developer',
                titleVideo: number + '. Tipos de maquetación 1',
                titleSubmenu: 'Tipos de maquetación 1',
                titleSubmenuNext: 'Tipos de maquetación 2',
                video: videos.A8,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 9:
            res.render('view', {
                title: 'Tipos de maquetación 2 - Frontend Developer',
                titleVideo: number + '. Tipos de maquetación 2',
                titleSubmenu: 'Tipos de maquetación 2',
                titleSubmenuNext: 'Tipos de maquetación 3',
                video: videos.A9,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 10:
            res.render('view', {
                title: 'Tipos de maquetación 3 - Frontend Developer',
                titleVideo: number + '. Tipos de maquetación 3',
                titleSubmenu: 'Tipos de maquetación 3',
                titleSubmenuNext: 'Tipos de maquetación 4',
                video: videos.A10,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 11:
            res.render('view', {
                title: 'Tipos de maquetación 4 - Frontend Developer',
                titleVideo: number + '. Tipos de maquetación 4',
                titleSubmenu: 'Tipos de maquetación 4',
                titleSubmenuNext: 'Sintaxis HTML5',
                video: videos.A11,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 12:
            res.render('view', {
                title: 'Sintaxis HTML5',
                titleVideo: number + '. Sintaxis HTML5',
                titleSubmenu: 'Sintaxis HTML5',
                titleSubmenuNext: 'Modelo HTML5',
                video: videos.A12,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 13:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: 'Modelo HTML5',
                titleSubmenuNext: '1. Etiquetas HTML5',
                video: videos.A13,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 14:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '1. Etiquetas HTML5',
                titleSubmenuNext: '2. Etiquetas HTML5',
                video: videos.A14,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 15:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '2. Etiquetas HTML5',
                titleSubmenuNext: '3. Etiquetas HTML5',
                video: videos.A15,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 16:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '3. Etiquetas HTML5',
                titleSubmenuNext: '4. Etiquetas HTML5',
                video: videos.A16,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 17:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '4. Etiquetas HTML5',
                titleSubmenuNext: '5. Etiquetas HTML5',
                video: videos.A17,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 18:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '5. Etiquetas HTML5',
                titleSubmenuNext: '6. Etiquetas HTML5',
                video: videos.A18,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 19:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '6. Etiquetas HTML5',
                titleSubmenuNext: '7. Etiquetas HTML5',
                video: videos.A19,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 20:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '7. Etiquetas HTML5',
                titleSubmenuNext: '8. Etiquetas HTML5',
                video: videos.A20,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 21:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '8. Etiquetas HTML5',
                titleSubmenuNext: '9. Etiquetas HTML5',
                video: videos.A21,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 22:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '9. Etiquetas HTML5',
                titleSubmenuNext: '10. Etiquetas HTML5',
                video: videos.A22,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 23:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '10. Etiquetas HTML5',
                titleSubmenuNext: '11. Etiquetas HTML5',
                video: videos.A23,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 24:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '11. Etiquetas HTML5',
                titleSubmenuNext: '12. Etiquetas HTML5',
                video: videos.A24,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 25:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '12. Etiquetas HTML5',
                titleSubmenuNext: '13. Etiquetas HTML5',
                video: videos.A25,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 26:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '13. Etiquetas HTML5',
                titleSubmenuNext: '14. Etiquetas HTML5',
                video: videos.A26,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 27:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '14. Etiquetas HTML5',
                titleSubmenuNext: '15. Etiquetas HTML5',
                video: videos.A27,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 28:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '15. Etiquetas HTML5',
                titleSubmenuNext: '16. Etiquetas HTML5',
                video: videos.A28,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 29:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '16. Etiquetas HTML5',
                titleSubmenuNext: '17. Etiquetas HTML5',
                video: videos.A29,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 30:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '17. Etiquetas HTML5',
                titleSubmenuNext: '18. Etiquetas HTML5',
                video: videos.A30,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 31:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '18. Etiquetas HTML5',
                titleSubmenuNext: '19. Etiquetas HTML5',
                video: videos.A31,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 32:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '19. Etiquetas HTML5',
                titleSubmenuNext: '20. Etiquetas HTML5',
                video: videos.A32,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 33:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '20. Etiquetas HTML5',
                titleSubmenuNext: '21. Etiquetas HTML5',
                video: videos.A33,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 34:
            res.render('view', {
                title: 'Etiquetas HTML5',
                titleVideo: number + '. Etiquetas HTML5',
                titleSubmenu: '21. Etiquetas HTML5',
                titleSubmenuNext: '1. Css - Stylesheets',
                video: videos.A34,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 35:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '1. Css - Stylesheets',
                titleSubmenuNext: '2. Css - Stylesheets',
                video: videos.A35,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 36:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '1. Css - Stylesheets',
                titleSubmenuNext: '2. Css - Stylesheets',
                video: videos.A36,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 37:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '2. Css - Stylesheets',
                titleSubmenuNext: '3. Css - Stylesheets',
                video: videos.A37,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 38:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '3. Css - Stylesheets',
                titleSubmenuNext: '4. Css - Stylesheets',
                video: videos.A38,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 39:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '4. Css - Stylesheets',
                titleSubmenuNext: '5. Css - Stylesheets',
                video: videos.A39,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 40:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '5. Css - Stylesheets',
                titleSubmenuNext: '6. Css - Stylesheets',
                video: videos.A40,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 41:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '6. Css - Stylesheets',
                titleSubmenuNext: '7. Css - Stylesheets',
                video: videos.A41,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 42:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '7. Css - Stylesheets',
                titleSubmenuNext: '8. Css - Stylesheets',
                video: videos.A42,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 43:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '8. Css - Stylesheets',
                titleSubmenuNext: '9. Css - Stylesheets',
                video: videos.A43,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 44:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '9. Css - Stylesheets',
                titleSubmenuNext: '10. Css - Stylesheets',
                video: videos.A44,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 45:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '10. Css - Stylesheets',
                titleSubmenuNext: '11. Css - Stylesheets',
                video: videos.A45,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 46:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '11. Css - Stylesheets',
                titleSubmenuNext: '12. Css - Stylesheets',
                video: videos.A46,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 47:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '12. Css - Stylesheets',
                titleSubmenuNext: '13. Css - Stylesheets',
                video: videos.A47,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 48:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '13. Css - Stylesheets',
                titleSubmenuNext: '14. Css - Stylesheets',
                video: videos.A48,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 49:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '14. Css - Stylesheets',
                titleSubmenuNext: '15. Css - Stylesheets',
                video: videos.A49,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 50:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '15. Css - Stylesheets',
                titleSubmenuNext: '16. Css - Stylesheets',
                video: videos.A50,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 51:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '16. Css - Stylesheets',
                titleSubmenuNext: '17. Css - Stylesheets',
                video: videos.A51,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 52:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '17. Css - Stylesheets',
                titleSubmenuNext: '18. Css - Stylesheets',
                video: videos.A52,
                number: number,
                numberNext: Number(number) + 1
            });
            break;
        case 53:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '18. Css - Stylesheets',
                titleSubmenuNext: '19. Css - Stylesheets',
                video: videos.A53,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 54:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '19. Css - Stylesheets',
                titleSubmenuNext: '20. Css - Stylesheets',
                video: videos.A54,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 55:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '20. Css - Stylesheets',
                titleSubmenuNext: '21. Css - Stylesheets',
                video: videos.A55,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 56:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '21. Css - Stylesheets',
                titleSubmenuNext: '22. Css - Stylesheets',
                video: videos.A56,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 57:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '22. Css - Stylesheets',
                titleSubmenuNext: '23. Css - Stylesheets',
                video: videos.A57,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 58:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '23. Css - Stylesheets',
                titleSubmenuNext: '24. Css - Stylesheets',
                video: videos.A58,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 59:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '24. Css - Stylesheets',
                titleSubmenuNext: '25. Css - Stylesheets',
                video: videos.A59,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 60:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '25. Css - Stylesheets',
                titleSubmenuNext: '26. Css - Stylesheets',
                video: videos.A60,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 61:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '26. Css - Stylesheets',
                titleSubmenuNext: '27. Css - Stylesheets',
                video: videos.A61,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 62:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '27. Css - Stylesheets',
                titleSubmenuNext: '28. Css - Stylesheets',
                video: videos.A62,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 63:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '28. Css - Stylesheets',
                titleSubmenuNext: '29. Css - Stylesheets',
                video: videos.A63,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 64:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '29. Css - Stylesheets',
                titleSubmenuNext: '30. Css - Stylesheets',
                video: videos.A64,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 65:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '30. Css - Stylesheets',
                titleSubmenuNext: '31. Css - Stylesheets',
                video: videos.A65,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 66:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '31. Css - Stylesheets',
                titleSubmenuNext: '32. Css - Stylesheets',
                video: videos.A66,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 67:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '32. Css - Stylesheets',
                titleSubmenuNext: '33. Css - Stylesheets',
                video: videos.A67,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 68:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '33. Css - Stylesheets',
                titleSubmenuNext: '34. Css - Stylesheets',
                video: videos.A68,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 69:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '34. Css - Stylesheets',
                titleSubmenuNext: '35. Css - Stylesheets',
                video: videos.A69,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 70:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '35. Css - Stylesheets',
                titleSubmenuNext: '36. Css - Stylesheets',
                video: videos.A70,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 71:
            res.render('view', {
                title: 'Css - Stylesheets',
                titleVideo: number + '. Css - Stylesheets',
                titleSubmenu: '36. Css - Stylesheets',
                titleSubmenuNext: '1 - Javascript',
                video: videos.A71,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 72:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '1 - Javascript',
                titleSubmenuNext: '2 - Javascript',
                video: videos.A72,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 73:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '2 - Javascript',
                titleSubmenuNext: '3 - Javascript',
                video: videos.A73,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 74:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '3 - Javascript',
                titleSubmenuNext: '4 - Javascript',
                video: videos.A74,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 75:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '4 - Javascript',
                titleSubmenuNext: '5 - Javascript',
                video: videos.A75,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 76:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '5 - Javascript',
                titleSubmenuNext: '6 - Javascript',
                video: videos.A76,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 77:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '6 - Javascript',
                titleSubmenuNext: '7 - Javascript',
                video: videos.A77,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 78:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '7 - Javascript',
                titleSubmenuNext: '8 - Javascript',
                video: videos.A78,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 79:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '8 - Javascript',
                titleSubmenuNext: '9 - Javascript',
                video: videos.A79,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 80:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '9 - Javascript',
                titleSubmenuNext: '10 - Javascript',
                video: videos.A80,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 81:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '10 - Javascript',
                titleSubmenuNext: '11 - Javascript',
                video: videos.A81,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 82:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '11 - Javascript',
                titleSubmenuNext: '12 - Javascript',
                video: videos.A82,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 83:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '12 - Javascript',
                titleSubmenuNext: '13 - Javascript',
                video: videos.A83,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 84:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '13 - Javascript',
                titleSubmenuNext: '14 - Javascript',
                video: videos.A84,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 85:
            res.render('view', {
                title: 'Javascript',
                titleVideo: number + '. Javascript',
                titleSubmenu: '14 - Javascript',
                titleSubmenuNext: '1. Jquery',
                video: videos.A85,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 86:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '1. Jquery',
                titleSubmenuNext: '2. Jquery',
                video: videos.A86,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 87:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '2. Jquery',
                titleSubmenuNext: '3. Jquery',
                video: videos.A87,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 88:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '3. Jquery',
                titleSubmenuNext: '4. Jquery',
                video: videos.A88,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 89:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '4. Jquery',
                titleSubmenuNext: '5. Jquery',
                video: videos.A89,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 90:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '5. Jquery',
                titleSubmenuNext: '6. Jquery',
                video: videos.A90,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 91:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '6. Jquery',
                titleSubmenuNext: '7. Jquery',
                video: videos.A91,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 92:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '7. Jquery',
                titleSubmenuNext: '8. Jquery',
                video: videos.A92,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 93:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '8. Jquery',
                titleSubmenuNext: '9. Jquery',
                video: videos.A93,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 94:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '9. Jquery',
                titleSubmenuNext: '10. Jquery',
                video: videos.A94,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 95:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '10. Jquery',
                titleSubmenuNext: '11. Jquery',
                video: videos.A95,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 96:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '11. Jquery',
                titleSubmenuNext: '12. Jquery',
                video: videos.A96,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 97:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '12. Jquery',
                titleSubmenuNext: '13. Jquery',
                video: videos.A97,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 98:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '13. Jquery',
                titleSubmenuNext: '14. Jquery',
                video: videos.A98,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 99:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '14. Jquery',
                titleSubmenuNext: '15. Jquery',
                video: videos.A99,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 100:
            res.render('view', {
                title: 'Jquery',
                titleVideo: number + '. Jquery',
                titleSubmenu: '15. Jquery',
                titleSubmenuNext: '1. Git - Github',
                video: videos.A100,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 101:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '1. Git - Github',
                titleSubmenuNext: '2. Git - Github',
                video: videos.A101,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 102:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '2. Git - Github',
                titleSubmenuNext: '3. Git - Github',
                video: videos.A102,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 103:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '3. Git - Github',
                titleSubmenuNext: '4. Git - Github',
                video: videos.A103,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 104:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '4. Git - Github',
                titleSubmenuNext: '5. Git - Github',
                video: videos.A104,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 105:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '5. Git - Github',
                titleSubmenuNext: '6. Git - Github',
                video: videos.A105,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 106:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '6. Git - Github',
                titleSubmenuNext: '7. Git - Github',
                video: videos.A106,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 107:
            res.render('view', {
                title: 'Git - Github',
                titleVideo: number + '. Git - Github',
                titleSubmenu: '7. Git - Github',
                titleSubmenuNext: '1 - Responsive y Mobil First',
                video: videos.A107,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 108:
            res.render('view', {
                title: 'Responsive y Mobil First',
                titleVideo: number + '. Responsive y Mobil First',
                titleSubmenu: '1. Responsive y Mobil First',
                titleSubmenuNext: '2. Responsive y Mobil First',
                video: videos.A108,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 109:
            res.render('view', {
                title: 'Responsive y Mobil First',
                titleVideo: number + '. Responsive y Mobil First',
                titleSubmenu: '2. Responsive y Mobil First',
                titleSubmenuNext: '3. Responsive y Mobil First',
                video: videos.A109,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 110:
            res.render('view', {
                title: 'Responsive y Mobil First',
                titleVideo: number + '. Responsive y Mobil First',
                titleSubmenu: '3. Responsive y Mobil First',
                titleSubmenuNext: '4. Responsive y Mobil First',
                video: videos.A110,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 111:
            res.render('view', {
                title: 'Responsive y Mobil First',
                titleVideo: number + '. Responsive y Mobil First',
                titleSubmenu: '4. Responsive y Mobil First',
                titleSubmenuNext: '1 - Jade',
                video: videos.A111,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        case 112:
            res.render('view', {
                title: 'Jade',
                titleVideo: number + '. Jade',
                titleSubmenu: '1. Jade',
                titleSubmenuNext: '2 - Jade',
                video: videos.A112,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 113:
            res.render('view', {
                title: 'Jade',
                titleVideo: number + '. Jade',
                titleSubmenu: '2. Jade',
                titleSubmenuNext: '3 - Jade',
                video: videos.A113,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 114:
            res.render('view', {
                title: 'Jade',
                titleVideo: number + '. Jade',
                titleSubmenu: '3. Jade',
                titleSubmenuNext: '4 - Jade',
                video: videos.A114,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 115:
            res.render('view', {
                title: 'Jade',
                titleVideo: number + '. Jade',
                titleSubmenu: '4. Jade',
                titleSubmenuNext: '1 - Preprocesador Css',
                video: videos.A115,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 116:
            res.render('view', {
                title: 'Preprocesador Css',
                titleVideo: number + '. Preprocesador Css',
                titleSubmenu: '1. Preprocesador Css',
                titleSubmenuNext: '2 - Preprocesador Css',
                video: videos.A116,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 117:
            res.render('view', {
                title: 'Preprocesador Css',
                titleVideo: number + '. Preprocesador Css',
                titleSubmenu: '2. Preprocesador Css',
                titleSubmenuNext: '3 - Preprocesador Css',
                video: videos.A117,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 118:
            res.render('view', {
                title: 'Preprocesador Css',
                titleVideo: number + '. Preprocesador Css',
                titleSubmenu: '3. Preprocesador Css',
                titleSubmenuNext: '1 - bootstrap',
                video: videos.A118,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 119:
            res.render('view', {
                title: 'Bootstrap',
                titleVideo: number + '. Bootstrap',
                titleSubmenu: '1. Bootstrap',
                titleSubmenuNext: '2 - bootstrap',
                video: videos.A119,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 120:
            res.render('view', {
                title: 'Bootstrap',
                titleVideo: number + '. Bootstrap',
                titleSubmenu: '2. Bootstrap',
                titleSubmenuNext: '3 - bootstrap',
                video: videos.A120,
                number: number,
                numberNext: Number(number) + 1
            });
            break;

        case 121:
            res.render('view', {
                title: 'Bootstrap',
                titleVideo: number + '. Bootstrap',
                titleSubmenu: '3. Bootstrap',
                titleSubmenuNext: '1. Introduccion',
                video: videos.A121,
                number: number,
                numberNext: Number(number) + 1
            });
            break;


        default:
            console.log('nan');

    }

}
