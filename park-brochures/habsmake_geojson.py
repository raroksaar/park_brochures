import codecs
import geojson
from geojson import Point, Feature, FeatureCollection

n = 0

# C:\map_project\all_with_coords.json'

# read tsv rather than json
f = codecs.open(r'C:\map_project\all_with_coords.txt', 'r', 'utf8')
o = codecs.open(r'C:\map_project\all_with_coords.geojson', 'w', 'utf8')


for line in f:
    n = n + 1
    line = line[:-2]
    print(line)
    fields = line.split('\t')
    
    if n > 100:
        break
    
    #print(fields)
    #id	title	url	long_lat
    id= fields[0]
    title = fields[1]
    state = title[-2:]
    #print(state)

    link = fields[2]
    link = "<a href='" + link + "'>Library of Congress</a><br>"
    #print(link)
    longlat = fields[3]   # -93.6767, 32.4981
    lola = longlat.split(', ')
    #print(lola)
    long = lola[0]
    lat = lola[1]
    point = (Point((float(long), float(lat))))
    print(point)
    
    # Wrap it in a Feature with properties
    feature = Feature(geometry=point, properties={"state": state, "popupContent": title+'<br>'+link})
    # Create a FeatureCollection
    collection = FeatureCollection([feature])
    #print(collection)
    
    print(str(collection))
    o.write(str(collection))
    o.write(',\n')

f.close()
o.close()







