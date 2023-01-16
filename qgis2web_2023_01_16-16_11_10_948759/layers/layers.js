var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Aterragem_1 = new ol.format.GeoJSON();
var features_Aterragem_1 = format_Aterragem_1.readFeatures(json_Aterragem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aterragem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aterragem_1.addFeatures(features_Aterragem_1);
var lyr_Aterragem_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aterragem_1, 
                style: style_Aterragem_1,
                interactive: true,
                title: '<img src="styles/legend/Aterragem_1.png" /> Aterragem'
            });
var format_DescolagemParapente_2 = new ol.format.GeoJSON();
var features_DescolagemParapente_2 = format_DescolagemParapente_2.readFeatures(json_DescolagemParapente_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DescolagemParapente_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DescolagemParapente_2.addFeatures(features_DescolagemParapente_2);
var lyr_DescolagemParapente_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DescolagemParapente_2, 
                style: style_DescolagemParapente_2,
                interactive: true,
                title: '<img src="styles/legend/DescolagemParapente_2.png" /> Descolagem Parapente'
            });
var format_EscolaAventura_3 = new ol.format.GeoJSON();
var features_EscolaAventura_3 = format_EscolaAventura_3.readFeatures(json_EscolaAventura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscolaAventura_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaAventura_3.addFeatures(features_EscolaAventura_3);
var lyr_EscolaAventura_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscolaAventura_3, 
                style: style_EscolaAventura_3,
                interactive: true,
                title: '<img src="styles/legend/EscolaAventura_3.png" /> Escola Aventura'
            });
var format_CasaParapentista_4 = new ol.format.GeoJSON();
var features_CasaParapentista_4 = format_CasaParapentista_4.readFeatures(json_CasaParapentista_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasaParapentista_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaParapentista_4.addFeatures(features_CasaParapentista_4);
var lyr_CasaParapentista_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasaParapentista_4, 
                style: style_CasaParapentista_4,
                interactive: true,
                title: '<img src="styles/legend/CasaParapentista_4.png" /> Casa Parapentista'
            });
var format_EscolaAventura_5 = new ol.format.GeoJSON();
var features_EscolaAventura_5 = format_EscolaAventura_5.readFeatures(json_EscolaAventura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscolaAventura_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaAventura_5.addFeatures(features_EscolaAventura_5);
var lyr_EscolaAventura_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscolaAventura_5, 
                style: style_EscolaAventura_5,
                interactive: true,
                title: '<img src="styles/legend/EscolaAventura_5.png" /> Escola Aventura'
            });
var format_CasadoParapentista_6 = new ol.format.GeoJSON();
var features_CasadoParapentista_6 = format_CasadoParapentista_6.readFeatures(json_CasadoParapentista_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasadoParapentista_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasadoParapentista_6.addFeatures(features_CasadoParapentista_6);
var lyr_CasadoParapentista_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasadoParapentista_6, 
                style: style_CasadoParapentista_6,
                interactive: true,
                title: '<img src="styles/legend/CasadoParapentista_6.png" /> Casa do Parapentista'
            });
var group_POI = new ol.layer.Group({
                                layers: [lyr_EscolaAventura_5,lyr_CasadoParapentista_6,],
                                title: "POI"});
var group_Areas = new ol.layer.Group({
                                layers: [lyr_Aterragem_1,lyr_DescolagemParapente_2,lyr_EscolaAventura_3,lyr_CasaParapentista_4,],
                                title: "Areas"});
var group_Mapas = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                title: "Mapas"});

lyr_OSMStandard_0.setVisible(true);lyr_Aterragem_1.setVisible(true);lyr_DescolagemParapente_2.setVisible(true);lyr_EscolaAventura_3.setVisible(true);lyr_CasaParapentista_4.setVisible(true);lyr_EscolaAventura_5.setVisible(true);lyr_CasadoParapentista_6.setVisible(true);
var layersList = [group_Mapas,group_Areas,group_POI];
lyr_Aterragem_1.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'CNS': 'CNS', });
lyr_DescolagemParapente_2.set('fieldAliases', {'id': 'id', 'Descolagem': 'Descolagem', 'CNS': 'CNS', });
lyr_EscolaAventura_3.set('fieldAliases', {'id': 'id', 'Escola Ave': 'Escola Ave', 'CNS': 'CNS', });
lyr_CasaParapentista_4.set('fieldAliases', {'id': 'id', 'Casa do Pa': 'Casa do Pa', 'CNS': 'CNS', });
lyr_EscolaAventura_5.set('fieldAliases', {'id': 'id', 'POI': 'POI', 'CNS': 'CNS', });
lyr_CasadoParapentista_6.set('fieldAliases', {'id': 'id', 'CNS': 'CNS', 'Casa do Pa': 'Casa do Pa', });
lyr_Aterragem_1.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'CNS': 'Range', });
lyr_DescolagemParapente_2.set('fieldImages', {'id': 'TextEdit', 'Descolagem': '', 'CNS': 'Range', });
lyr_EscolaAventura_3.set('fieldImages', {'id': 'TextEdit', 'Escola Ave': '', 'CNS': 'TextEdit', });
lyr_CasaParapentista_4.set('fieldImages', {'id': 'TextEdit', 'Casa do Pa': '', 'CNS': 'Range', });
lyr_EscolaAventura_5.set('fieldImages', {'id': 'TextEdit', 'POI': 'TextEdit', 'CNS': 'TextEdit', });
lyr_CasadoParapentista_6.set('fieldImages', {'id': 'TextEdit', 'CNS': 'TextEdit', 'Casa do Pa': 'TextEdit', });
lyr_Aterragem_1.set('fieldLabels', {});
lyr_DescolagemParapente_2.set('fieldLabels', {});
lyr_EscolaAventura_3.set('fieldLabels', {});
lyr_CasaParapentista_4.set('fieldLabels', {});
lyr_EscolaAventura_5.set('fieldLabels', {});
lyr_CasadoParapentista_6.set('fieldLabels', {});
lyr_CasadoParapentista_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});