ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([70.511785, 0.000054, 70.512213, 0.000341]);
var wms_layers = [];

var format_india_st_0 = new ol.format.GeoJSON();
var features_india_st_0 = format_india_st_0.readFeatures(json_india_st_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_india_st_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_st_0.addFeatures(features_india_st_0);
var lyr_india_st_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_st_0, 
                style: style_india_st_0,
                popuplayertitle: "india_st",
                interactive: true,
                title: '<img src="styles/legend/india_st_0.png" /> india_st'
            });

lyr_india_st_0.setVisible(true);
var layersList = [lyr_india_st_0];
lyr_india_st_0.set('fieldAliases', {'STATE': 'STATE', });
lyr_india_st_0.set('fieldImages', {'STATE': 'TextEdit', });
lyr_india_st_0.set('fieldLabels', {'STATE': 'no label', });
lyr_india_st_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});