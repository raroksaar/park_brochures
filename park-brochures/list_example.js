// Example GeoJSON string
const geoJsonString = `{
  "type": "FeatureCollection",
  "features": [
    {"type": "Feature", "properties": {"name": "Point 1"}, "geometry": {"type": "Point", "coordinates": [100.0, 0.0]}},
    {"type": "Feature", "properties": {"name": "Point 2"}, "geometry": {"type": "Point", "coordinates": [101.0, 1.0]}}
  ]
}`;

const habsString =`{
    "type": "FeatureCollection",
    "features": [
	{"geometry": {"coordinates": [-113.2328, 46.4273], "type": "Point"}, "properties": {"id": "LC_HABS_HAER_mt0149", "link": "https://www.loc.gov/item/mt0149/", "title": "Royal Basin Mine & Mill Site, Maxville, Granite County, MT"}, "type": "Feature"},
	
	{"geometry": {"coordinates": [-115.2599, 47.3704], "type": "Point"}, "properties": {"id": "LC_HABS_HAER_mt0147", "link": "https://www.loc.gov/item/mt0147/", "title": "Mullan Road Segment, Saint Regis, Mineral County, MT"}, "type": "Feature"}, 
	
	{"geometry": {"coordinates": [-114.4115, 47.0122], "type": "Point"}, "properties": {"id": "LC_HABS_HAER_mt0146", "link": "https://www.loc.gov/item/mt0146/", "title": "Alberton Pictograph, Alberton, Mineral County, MT"}, "type": "Feature"}, 
	
	{"geometry": {"coordinates": [-114.1032, 46.7499], "type": "Point"}, "properties": {"id": "LC_HABS_HAER_mt0144", "link": "https://www.loc.gov/item/mt0144/", "title": "Traveler's Rest-Lolo Trail, Lolo, Missoula County, MT"}, "type": "Feature"}, 
	
	{"geometry": {"coordinates": [-111.6023, 46.2214], "type": "Point"}, "properties": {"id": "LC_HABS_HAER_mt0166", "link": "https://www.loc.gov/item/mt0166/", "title": "Vermont Marble Quarry, Abandoned Mine Site, Limestone Hills, 2.25 miles Northeast of Radersburg, Radersburg, Broadwater County, MT"}, "type": "Feature"}, 
	
	{"geometry": {"coordinates": [-114.1267, 46.4145], "type": "Point"}, "properties": {"id": "LC_HABS_HAER_mt0045", "link": "https://www.loc.gov/item/mt0045/", "title": "Victor Bridge, Spanning Bitterroot River, Victor, Ravalli County, MT"}, "type": "Feature"} 
	]
}`;

// Parse the GeoJSON string into a JavaScript object
const geoObject = JSON.parse(habsString);

// Extract the features array
const featuresArray = geoObject.features;

// Now `featuresArray` is a standard JavaScript array of Feature objects
//console.log(featuresArray);

// Yosemite
// const point1 = L.latLng(37.749089, -119.588275);
// const point2 = L.latLng(37.749089, -119.588275);
//const distance = point1.distanceTo(point2);

featuresArray.forEach(feature => {
  console.log(feature.properties.name, feature.geometry.coordinates);
  //point2 = feature.geometry.coordinates);
  //distance = point1.distanceTo(point2);
  //console.log('Distance:', distance, 'meters');
});
