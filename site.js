  var tiles = L.tileLayer('http://a.tiles.mapbox.com/v3/lyzidiamond.map-ietb6srb/{z}/{x}/{y}.png', {
    maxZoom: 18
  });

  function popUp(feature, layer) {
    layer.bindPopup(feature.properties.name);
  }

  var geojsonLayer = new L.GeoJSON.AJAX("map_willard.geojson", {onEachFeature:popUp});

  var map = L.map('map').fitBounds(geojsonLayer.getBounds());
  tiles.addTo(map);
  geojsonLayer.addTo(map);
