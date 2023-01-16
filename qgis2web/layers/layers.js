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
var format_EscolaAventura_1 = new ol.format.GeoJSON();
var features_EscolaAventura_1 = format_EscolaAventura_1.readFeatures(json_EscolaAventura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscolaAventura_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaAventura_1.addFeatures(features_EscolaAventura_1);
var lyr_EscolaAventura_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscolaAventura_1, 
                style: style_EscolaAventura_1,
                interactive: true,
                title: '<img src="styles/legend/EscolaAventura_1.png" /> Escola Aventura'
            });
var format_CasaParapentista_2 = new ol.format.GeoJSON();
var features_CasaParapentista_2 = format_CasaParapentista_2.readFeatures(json_CasaParapentista_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasaParapentista_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaParapentista_2.addFeatures(features_CasaParapentista_2);
var lyr_CasaParapentista_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasaParapentista_2, 
                style: style_CasaParapentista_2,
                interactive: true,
                title: '<img src="styles/legend/CasaParapentista_2.png" /> Casa Parapentista'
            });
var format_Aterragem_3 = new ol.format.GeoJSON();
var features_Aterragem_3 = format_Aterragem_3.readFeatures(json_Aterragem_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aterragem_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aterragem_3.addFeatures(features_Aterragem_3);
var lyr_Aterragem_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aterragem_3, 
                style: style_Aterragem_3,
                interactive: true,
                title: '<img src="styles/legend/Aterragem_3.png" /> Aterragem'
            });
var format_DescolagemParapente_4 = new ol.format.GeoJSON();
var features_DescolagemParapente_4 = format_DescolagemParapente_4.readFeatures(json_DescolagemParapente_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DescolagemParapente_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DescolagemParapente_4.addFeatures(features_DescolagemParapente_4);
var lyr_DescolagemParapente_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DescolagemParapente_4, 
                style: style_DescolagemParapente_4,
                interactive: true,
                title: '<img src="styles/legend/DescolagemParapente_4.png" /> Descolagem Parapente'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EscolaAventura_1.setVisible(true);lyr_CasaParapentista_2.setVisible(true);lyr_Aterragem_3.setVisible(true);lyr_DescolagemParapente_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EscolaAventura_1,lyr_CasaParapentista_2,lyr_Aterragem_3,lyr_DescolagemParapente_4];
lyr_EscolaAventura_1.set('fieldAliases', {'id': 'id', 'Escola Aventura': 'Escola Aventura', 'CNS': 'CNS', });
lyr_CasaParapentista_2.set('fieldAliases', {'id': 'id', 'Casa do Parapentista': 'Casa do Parapentista', 'CNS': 'CNS', });
lyr_Aterragem_3.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'CNS': 'CNS', });
lyr_DescolagemParapente_4.set('fieldAliases', {'id': 'id', 'Descolagem': 'Descolagem', 'CNS': 'CNS', });
lyr_EscolaAventura_1.set('fieldImages', {'id': 'TextEdit', 'Escola Aventura': '', 'CNS': 'TextEdit', });
lyr_CasaParapentista_2.set('fieldImages', {'id': 'TextEdit', 'Casa do Parapentista': '', 'CNS': 'Range', });
lyr_Aterragem_3.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'CNS': 'Range', });
lyr_DescolagemParapente_4.set('fieldImages', {'id': 'TextEdit', 'Descolagem': '', 'CNS': 'Range', });
lyr_EscolaAventura_1.set('fieldLabels', {'id': 'no label', 'Escola Ave': 'no label', 'CNS': 'no label', });
lyr_CasaParapentista_2.set('fieldLabels', {'id': 'no label', 'Casa Parap': 'no label', 'CNS': 'no label', });
lyr_Aterragem_3.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'CNS': 'no label', });
lyr_DescolagemParapente_4.set('fieldLabels', {'id': 'no label', 'Descolagem': 'no label', 'CNS': 'no label', });
lyr_DescolagemParapente_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});