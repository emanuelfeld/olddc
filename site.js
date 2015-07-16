  var tiles = L.tileLayer('http://a.tiles.mapbox.com/v3/tmcw.map-l1m85h7s/{z}/{x}/{y}.png', {
    maxZoom: 18
  });

function popUp(feature, layer) {
  var key, val;
  var content = [];
  for (key in feature.properties) {
    val = feature.properties[key];
    if (key == "Thumbnail" | key == "Title") {
      if (key == "Thumbnail") {
          val = '<a href="' + feature.properties.URL + '"><img src="' + val + '"  height="150" /></a>';
      }
    content.push("<strong>" + key + ":</strong> " + val);
    }
  }
  layer.bindPopup(content.join("<br />"));
}

  var willardLayer = new L.GeoJSON.AJAX("map_willard.geojson", {onEachFeature:popUp});

var map = L.map('map').setView([38.8993488, -77.0145665], 12);

  tiles.addTo(map);
  willardLayer.addTo(map);

