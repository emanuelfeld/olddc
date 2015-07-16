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

function markerStyle(feature, latlng) {
                return new L.CircleMarker(latlng, {
                    radius: 7,
                    fillColor: "#e11111",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.6
                });
}

var willardLayer = new L.GeoJSON.AJAX("map_willard.geojson", {pointToLayer: markerStyle, onEachFeature:popUp});
var curtisLayer = new L.GeoJSON.AJAX("map_curtis.geojson", {pointToLayer: markerStyle, onEachFeature:popUp});
var map = L.map('map').setView([38.8993488, -77.0145665], 12);

tiles.addTo(map);
willardLayer.addTo(map);
curtisLayer.addTo(map);

