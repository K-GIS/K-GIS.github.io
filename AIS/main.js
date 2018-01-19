 var dlg = $( "#info" ).dialog({ autoOpen: false });
 
 var aisSource = new ol.source.Vector();
 $.ajax({url: "https://apps-accpt.portofantwerp.com/ais/api/p/overview?minLat=51.18643109740223&maxLat=51.338963356833204&minLng=4.179568005664123&maxLng=4.502291394335998", 
		 dataType: 'json', 
		 success: function(data){   
		 var features = [];
		 data.forEach(function(row, index) {
			var x = Number( row.current.longitude );
			var y = Number( row.current.latitude  );
			row.geometry = new ol.geom.Point( ol.proj.transform([x, y], 'EPSG:4326', 'EPSG:3857') );
			var feature = new ol.Feature( row );
			features.push( feature );
		});
		aisSource.addFeatures(features);
	 }  
 });

 var trackSource = new ol.source.Vector();
 function setTrack( mmsi ){
	$.ajax({url: "https://apps-accpt.portofantwerp.com/ais/api/p/ship/"+ mmsi +"/track", 
			dataType: 'json', 
			success: function(data){ 		
				var line = data.track.map(function(rec){
					return  ol.proj.transform([Number(rec.longitude) , Number(rec.latitude)], 'EPSG:4326', 'EPSG:3857');
				});
				var row = {name: data.shipMetadata.name};
				row.geometry = new ol.geom.LineString( line );
				var feature = new ol.Feature( row );
				trackSource.clear()
				trackSource.addFeature(feature); 
			}	
		});
 }
 
 
 var lineStyleFunction = function(feature) {
	var geometry = feature.getGeometry();
	var styles = [
	  new ol.style.Style({
		stroke: new ol.style.Stroke({
		  color: '#ffcc33', width: 2
		}),
		text: new ol.style.Text({
          font: 'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',
          placement: 'line',
          fill: new ol.style.Fill({
            color: 'red'
          }),
		  text: feature.get('name')
		})
	  })
	];
	n = 0;
	geometry.forEachSegment(function(start, end) {
	  n++
	  if(n % 20 != 0) return
	  
	  var dx = end[0] - start[0];
	  var dy = end[1] - start[1];
	  var rotation = Math.atan2(dy, dx);
	  // arrows
	  styles.push(new ol.style.Style({
		geometry: new ol.geom.Point(end),
		image: new ol.style.Icon({
		  src: 'pics/arrow.png',
		  anchor: [0.75, 0.5],
		  rotateWithView: true,
		  rotation: -rotation
		})
	  }));
	});

	return styles;
  };
  
 var pointStyleFunction = function(feature, resolution) {
	var styles = []
	if (resolution < 3){
	styles = [
	  new ol.style.Style({
		image: new ol.style.Circle({
               radius: 4,
               stroke: new ol.style.Stroke({
                  color: '#fff'
             }),
               fill: new ol.style.Fill({
                  color: '#3399CC'
             })
         }),
		text: new ol.style.Text({
          font: 'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',
          fill: new ol.style.Fill({
            color: 'red'
          }),
		  text: feature.getProperties().shipMetadata.name
		})
	  }) ]
    }
	else {
	  styles = [ new ol.style.Style({
		image: new ol.style.Circle({
               radius: 4,
               stroke: new ol.style.Stroke({
                  color: '#fff'
               }),
               fill: new ol.style.Fill({
                  color: '#3399CC'
               })
            }) 
		})];
	}
	return styles;
  };
  
  
/*layers*/
var aisLayer = new ol.layer.Vector({source: aisSource, style: pointStyleFunction });
var trackLayer = new ol.layer.Vector({source: trackSource, style: lineStyleFunction });
var grb = new ol.layer.Tile({
			source: new ol.source.XYZ({ url: '//tile.informatievlaanderen.be/ws/raadpleegdiensten/tms/1.0.0/grb_bsk_grijs@GoogleMapsVL/{z}/{x}/{-y}.png' })    
		}); 
var haven = new ol.layer.Tile({
		 source: new ol.source.TileArcGISRest({ url: '//vlag10prod.haven.antwerpen.local:6080/arcgis/rest/services/GHA/detailkaart/MapServer' })
		});

	  
function init(){
	var map = new ol.Map({
		target: 'map',
		controls: [new ol.control.Zoom, new ol.control.ScaleLine, new ol.control.Rotate], 
		layers: [grb, haven, trackLayer, aisLayer],
		view: new ol.View({
			 center: ol.proj.transform([4.405, 51.25], 'EPSG:4326', 'EPSG:3857'), zoom: 16
		})
	 });
	/*events handelers*/
	var displayFeatureInfo = function(pixel, map) {
		var vfeature, vlayer; 
		map.forEachFeatureAtPixel(pixel, function(feature, layer) {
				vfeature = feature;
				vlayer = layer;
				return;
		 });
		if (vfeature && vlayer == aisLayer ) {
				var props = vfeature.getProperties();
				$( "#spinner" ).show();
				setTrack( props.shipMetadata.mmsi );
				$( "#spinner" ).hide()
			} 
		}
	/*Events*/	
	map.on('click', function(evt) {
			  displayFeatureInfo(evt.pixel, map);
		  });
	  
	$( "#spinner" ).hide()
}	
init()