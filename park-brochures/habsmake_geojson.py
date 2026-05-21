import codecs
from geojson import Point, Feature, FeatureCollection

# f = codecs.open(r'C:\brochures_test\NPG_list_selected_all.txt', 'r', encoding='utf-8')
# w = codecs.open(r'C:\brochures_test\NPG_list_geojson_all.geojson', 'w', encoding='utf-8')
n = 0


f = codecs.open(r'C:\LC\HABS-tsv.tsv', 'r', 'utf8')
o = codecs.open(r'C:\LC\HABS.geojson', 'w', 'utf8')


# o.write('var habs = {"type": "FeatureCollection",    "features": [')
# o.write(',\n')

for line in f:
    n = n + 1
    line = line[:-2]
    fields = line.split('\t')
    
    if n > 10:
        break
    
    #print(fields)
    #id	url	title	town	area	description	long-lat
    id= fields[0]
    link = fields[1]
    title = fields[2]
    town = fields[3]
    area = fields[4]
    description = fields[5]
    longlat = fields[6]   # -93.6767, 32.4981

    lola = longlat.split(', ')
    long = lola[0]
    lat = lola[1]
    point = (Point((float(long), float(lat))))
    print(point)
    
    # Wrap it in a Feature with properties
    feature = Feature(geometry=point, properties={"town": town, "popupContent": title +'br'+ description +'<br>'+link +'<br>'+ link})
    # Create a FeatureCollection
    collection = FeatureCollection([feature])
    #print(collection)
    
    print(str(collection))
    o.write(str(collection))
    o.write(',\n')

#o.write(']};')
f.close()
o.close()







