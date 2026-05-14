import codecs
from geojson import Point, Feature, FeatureCollection

f = codecs.open(r'C:\brochures_test\NPG_list_selected_all.txt', 'r', encoding='utf-8')
w = codecs.open(r'C:\brochures_test\NPG_list_geojson_all.geojson', 'w', encoding='utf-8')
n = 0

#o = codecs.open(r'C:\map_project\all_with_coords.geojson', 'r', 'utf8')
#f = codecs.open(r'C:\map_project\all_with_coords.json', 'w', 'utf8')


for line in f:
    n = n + 1
    line = line[:-2]
    fields = line.split('\t')
    
    if n > 10:
        break
    
    #print(fields)
    #id	title	url	long_lat
    id= fields[0]
    title = fields[1]
    state = 'all'
    link = fields[2]
    longlat = fields[3]   # -93.6767, 32.4981
    lola = longlat.split(', ')
    long = lola[0]
    lat = lola[1]
    point = (Point((float(long), float(lat))))
    print(point)
    
    # Wrap it in a Feature with properties
    feature = Feature(geometry=point, properties={"state": state, "popupContent": title+'<br>'+link +'<br>'+ catsearch})
    #feature = Feature(geometry=point, properties="popupContent" +  title + '<br>' + link)
    # Create a FeatureCollection
    collection = FeatureCollection([feature])
    #print(collection)
    
    print(str(collection))
    w.write(str(collection))
    w.write(',\n')

f.close()
w.close()







