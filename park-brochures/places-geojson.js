


var park = {
    "type": "FeatureCollection",
    "features": [
      {
            "geometry": {
                "type": "Point",
                "coordinates": [
				 -122.580700, 37.897274
                ]
            },
            "type": "Feature",
			    "properties": {
                "popupContent": MUWO_map_link + MUWO_catalog + MUWO_Muir
            },
            "id": 1
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
					 -71.312702, 42.644548
                ]
            },
            "type": "Feature",
            "properties": {
			"popupContent": "Lowell"+ LOWE_brochure_link + LOWE_catalog_link + LOWE_habs_1 + LOWE_habs_2 + LOWE_habs_3+ LOWE_habs_4},

            "id": 2
        },

        {
            "geometry": {
                "type": "Point",
                "coordinates": [
					 -88.322072, 35.151511
                ]
            },
            "type": "Feature",
            "properties": {
				//"popupContent": '<a href="https://crosssearch.nps.gov/brochures/parks/shiloh">Shiloh visitor brochure</a>'},
				"popupContent": "Shiloh National Battlefield Brochure<br><a href='https://crosssearch.nps.gov/brochures/parks/shiloh'>Shiloh visitor brochure</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Shiloh+Military+Park+SHIL&selectUsing=2.0&rows=20>'>Library catalog search</a>"},	
            "id": 3
        },
	
   
   {
            "geometry": {
                "type": "Point",
                "coordinates": [
					-77.22599, 39.81169, 
                ]
            },
            "type": "Feature",
            "properties": {
                //"popupContent": '<a href="https://crosssearch.nps.gov/brochures/parks/gettysburg">Gettysburg visitor brochure</a>'},
				"popupContent": "Gettysburg National Battlefield Brochure<br><a href='https://crosssearch.nps.gov/brochures/parks/gettysburg'>Gettysburg visitor brochure</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gettysburg+Military+Park+GETT&selectUsing=2.0&rows=20>'>Library catalog search</a>"},
            "id": 4
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
					-87.847979, 36.485720 
                ]
            },
            "type": "Feature",
            "properties": {
				//"popupContent": '<a href="https://crosssearch.nps.gov/brochures/parks/ftdonelson">Fort Donelson visitor brochure</a>'},
				"popupContent": "Fort Donelson National Battlefield Brochure<br><a href='https://crosssearch.nps.gov/brochures/parks/ftdonelson'>Fort Donelson visitor brochure</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Fort+Donelson+Military+Park+FODO&selectUsing=2.0&rows=20>'>Library catalog search</a>"},
            "id": 5
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [	
					-105.560417, 40.366502
                ]
            },
            "type": "Feature",
            "properties": {

             "popupContent": ROMO_map+ROMO_catalog_link   
            },
            "id": 6
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
					-103.249574, 29.250897
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": BIBE_map_link+BIBE_catalog_link+BIBE_gmp+BIBE_history_book
            },
            "id": 7
        },

        {
            "geometry": {
                "type": "Point",
                "coordinates": [
				 -121.812736, 46.749694
                ]
            },
            "type": "Feature",
			    "properties": {
                "popupContent": MORA_brochure + MORA_catalog + MORA_gmp + MORA_Muir + MORA_steep_trails
            },
            "id": 8
        },
       {
            "geometry": {
                "type": "Point",
                "coordinates": [
				 -112.140447, 36.056233
                ]
            },
            "type": "Feature",
            "properties": {                //"popupContent": "Grand Canyon"
				//"popupContent": '<a href="https://www.loc.gov/item/96682413/">Grand Canyon visitor brochure'
				"popupContent": "Grand Canyon<br><a href='https://www.loc.gov/item/96682413/'>Grand Canyon visitor brochure</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Grand+Canyon+Park+GRCA&selectUsing=2.0&rows=20>'>Library catalog search</a>"
            },
            "id": 9
        },
        {
           "geometry": {
                "type": "Point",
                "coordinates": [
				 -119.588275, 37.749089
                ]
            },
            "type": "Feature",
            "properties": {
				"popupContent": "Yosemite<br><a href='https://www.nps.gov/yose/planyourvisit/maps.htm'>Yosemite visitor brochure</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Yosemite+Park+YOSE&selectUsing=2.0&rows=20>'>Library catalog search</a>"
            },
            "id": 10
        },
      {
           "geometry": {
                "type": "Point",
                "coordinates": [
				 -68.270232, 44.345417
                ]
            },
            "type": "Feature",
            "properties": {
				"popupContent":  "Acadia<br>" + ACAD_map+ACAD_brochure+ACAD_catalog+ACAD_gmp
            },
            "id": 11
        },
      {
           "geometry": {
                "type": "Point",
                "coordinates": [
				 -110.532396, 36.682317
                ]
            },
            "type": "Feature",
            "properties": {
				"popupContent":  "Navajo National Monument<br>" + NAVA_map+NAVA_catalog+NAVA_gmp+NAVA_habs_1
            },
            "id": 12
        },


///  set from NPGallery:
{"features": [{"geometry": {"coordinates": [-71.055412, 42.37323], "type": "Point"}, "properties": {"park": "Boston National Historical Park (BOST)", "popupContent": "Boston National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/673c5e3f-1df4-4ac1-9e28-9674dcf9de2c'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Boston+Historical+Park+BOST&selectUsing=2.0&rows=20>'>catalog search for Boston National Historical Park (BOST)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.735977, 39.462379], "type": "Point"}, "properties": {"park": "Antietam National Battlefield (ANTI)", "popupContent": "Antietam National Battlefield Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/1fdc60bb-35d2-4693-8b75-e06578c23b7b'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Antietam+Battlefield+ANTI&selectUsing=2.0&rows=20>'>catalog search for Antietam National Battlefield (ANTI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-78.80275, 37.382679], "type": "Point"}, "properties": {"park": "Appomattox Court House National Historical Park (APCO)", "popupContent": "Appomattox Court House National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/05ce4edf-ad9a-4a78-af03-782ea5b227c9'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Appomattox+Court+House+Historical+Park+APCO&selectUsing=2.0&rows=20>'>catalog search for Appomattox Court House National Historical Park (APCO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-122.423599, 37.808571], "type": "Point"}, "properties": {"park": "San Francisco Maritime National Historical Park (SAFR)", "popupContent": "San Francisco Maritime National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/844c58da-2755-4fbb-98cd-e1dab5a8e39e'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=San+Francisco+Maritime+Historical+Park+SAFR&selectUsing=2.0&rows=20>'>catalog search for San Francisco Maritime National Historical Park (SAFR)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-156.082199, 59.003071], "type": "Point"}, "properties": {"park": "Alagnak Wild River (ALAG)", "popupContent": "Alagnak Wild River Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/af547cc0-c140-484f-9dab-5e25713b763d'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Alagnak+Wild+River+ALAG&selectUsing=2.0&rows=20>'>catalog search for Alagnak Wild River (ALAG)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-113.651199, 45.646992], "type": "Point"}, "properties": {"park": "Big Hole National Battlefield (BIHO)", "popupContent": "Big Hole National Battlefield Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/b9c72725-4ad0-4266-a7f9-fbd63f85614b'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Big+Hole+Battlefield+BIHO&selectUsing=2.0&rows=20>'>catalog search for Big Hole National Battlefield (BIHO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-78.314217, 38.993721], "type": "Point"}, "properties": {"park": "Cedar Creek and Belle Grove National Historical Park (CEBE)", "popupContent": "Cedar Creek & Belle Grove National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/950cd186-f1ba-4c66-94c8-eaeae9b00446'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Cedar+Creek+and+Belle+Grove+Historical+Park+CEBE&selectUsing=2.0&rows=20>'>catalog search for Cedar Creek and Belle Grove National Historical Park (CEBE)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-112.844803, 37.633831], "type": "Point"}, "properties": {"park": "Cedar Breaks National Monument (CEBR)", "popupContent": "Cedar Breaks National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/28481be5-15ef-40bc-b4a1-8d7355fd88aa'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Cedar+Breaks+Monument+CEBR&selectUsing=2.0&rows=20>'>catalog search for Cedar Breaks National Monument (CEBR)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-84.130638, 32.19788], "type": "Point"}, "properties": {"park": "Andersonville National Historic Site (ANDE)", "popupContent": "Andersonville National Historic Site Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/abbb923b-9728-4e48-979f-0eff83181779'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Andersonville+Historic+Site+ANDE&selectUsing=2.0&rows=20>'>catalog search for Andersonville National Historic Site (ANDE)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-76.348373, 34.825039], "type": "Point"}, "properties": {"park": "Cape Lookout National Seashore (CALO)", "popupContent": "Cape Lookout National Seashore Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/8226173e-4c11-4e88-95b2-be48a0e9035f'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Cape+Lookout+Seashore+CALO&selectUsing=2.0&rows=20>'>catalog search for Cape Lookout National Seashore (CALO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-103.744003, 42.421471], "type": "Point"}, "properties": {"park": "Agate Fossil Beds National Monument (AGFO)", "popupContent": "Agate Fossil Beds National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/5e5dc81f-62fe-4d00-b7d3-824158870496'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Agate+Fossil+Beds+Monument+AGFO&selectUsing=2.0&rows=20>'>catalog search for Agate Fossil Beds National Monument (AGFO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-85.68013, 32.45546], "type": "Point"}, "properties": {"park": "Tuskegee Airmen National Historic Site (TUAI)", "popupContent": "Maps from park brochure.  - Tuskegee Airmen National Historic Site<br><a href='http://npgallery.nps.gov/AssetDetail/87de543f-c8f2-453f-8bee-c2e10fa7a337'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Tuskegee+Airmen+Historic+Site+TUAI&selectUsing=2.0&rows=20>'>catalog search for Tuskegee Airmen National Historic Site (TUAI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-84.266762, 33.972408], "type": "Point"}, "properties": {"park": "Chattahoochee River National Recreation Area (CHAT)", "popupContent": "Chattahoochee River National Recreation Area Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/15ab77e2-83cc-44e1-b463-705f5cffb19e'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Chattahoochee+River+Recreation+Area+CHAT&selectUsing=2.0&rows=20>'>catalog search for Chattahoochee River National Recreation Area (CHAT)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-108.0271, 45.28886], "type": "Point"}, "properties": {"park": "Bighorn Canyon National Recreation Area (BICA)", "popupContent": "Bighorn Canyon National Recreation Area Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/37d5b3e3-b47e-43e6-8181-1f73d577e529'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Bighorn+Canyon+Recreation+Area+BICA&selectUsing=2.0&rows=20>'>catalog search for Bighorn Canyon National Recreation Area (BICA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-81.312447, 29.8979], "type": "Point"}, "properties": {"park": "Castillo de San Marcos National Monument (CASA)", "popupContent": "Castillo de San Marcos National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/e518cd67-f4cb-432a-b38c-f263be0d7e7e'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Castillo+de+San+Marcos+Monument+CASA&selectUsing=2.0&rows=20>'>catalog search for Castillo de San Marcos National Monument (CASA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-83.89031, 39.707175], "type": "Point"}, "properties": {"park": "Charles Young Buffalo Soldiers National Monument (CHYO)", "popupContent": "Charles Young Buffalo Soldiers National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/06b02029-3d42-4a08-b9da-0010109f81d0'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Charles+Young+Buffalo+Soldiers+Monument+CHYO&selectUsing=2.0&rows=20>'>catalog search for Charles Young Buffalo Soldiers National Monument (CHYO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-102.519203, 38.56303], "type": "Point"}, "properties": {"park": "Sand Creek Massacre National Historic Site (SAND)", "popupContent": "Sand Creek Massacre National Historic Site Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/a0b557de-878a-46ba-a4fa-3ad55729e7b4'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Sand+Creek+Massacre+Historic+Site+SAND&selectUsing=2.0&rows=20>'>catalog search for Sand Creek Massacre National Historic Site (SAND)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-165.126602, 66.215149], "type": "Point"}, "properties": {"park": "Bering Land Bridge National Preserve (BELA)", "popupContent": "Bering Land Bridge National Preserve Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/151822aa-86cf-4400-b901-6d79fb9fbcc7'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Bering+Land+Bridge+Preserve+BELA&selectUsing=2.0&rows=20>'>catalog search for Bering Land Bridge National Preserve (BELA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-71.070648, 42.35788], "type": "Point"}, "properties": {"park": "Boston African American National Historic Site (BOAF)", "popupContent": "Boston African American National Historic Site Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/ec2162e5-0284-4569-9a51-b354f29341fe'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Boston+African+American+Historic+Site+BOAF&selectUsing=2.0&rows=20>'>catalog search for Boston African American National Historic Site (BOAF)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-83.316430, 35.483356], "type": "Point"}, "properties": {"park": "Trail of Tears National Historic Trail (TRTE)", "popupContent": "Trail of Tears National Historic Trail Maps<br><a href='http://npgallery.nps.gov/AssetDetail/11ec12bc-8bcc-4e1d-a64b-8b5a21036cde'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Trail+of+Tears+Historic+Trail+TRTE&selectUsing=2.0&rows=20>'>catalog search for Trail of Tears National Historic Trail (TRTE)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-81.238441, 29.71151], "type": "Point"}, "properties": {"park": "Fort Matanzas National Monument (FOMA)", "popupContent": "Fort Matanzas National Monument Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/0b2c17d5-1011-49d7-a1d2-2adfa818c6b8'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Fort+Matanzas+Monument+FOMA&selectUsing=2.0&rows=20>'>catalog search for Fort Matanzas National Monument (FOMA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-73.900597, 41.763378], "type": "Point"}, "properties": {"park": "Eleanor Roosevelt National Historic Site (ELRO)", "popupContent": "Eleanor Roosevelt National Historic Site Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/1e3c88ad-774c-4d48-a7a1-25882f3fa26f'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Eleanor+Roosevelt+Historic+Site+ELRO&selectUsing=2.0&rows=20>'>catalog search for Eleanor Roosevelt National Historic Site (ELRO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-73.92672, 41.76804], "type": "Point"}, "properties": {"park": "Home of Franklin D. Roosevelt National Historic Site (HOFR)", "popupContent": "Home of Franklin D. Roosevelt National Historic Site Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/3ffd9c0e-6cd4-42f1-97c9-e2a1b918be00'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Home+of+Franklin+D.+Roosevelt+Historic+Site+HOFR&selectUsing=2.0&rows=20>'>catalog search for Home of Franklin D. Roosevelt National Historic Site (HOFR)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-73.941803, 41.795349], "type": "Point"}, "properties": {"park": "Vanderbilt Mansion National Historic Site (VAMA)", "popupContent": "Vanderbilt Mansion National Historic Site Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/86ba2e4b-e91f-4b7a-9cb7-bd2022863d56'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Vanderbilt+Mansion+Historic+Site+VAMA&selectUsing=2.0&rows=20>'>catalog search for Vanderbilt Mansion National Historic Site (VAMA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-110.490097, 44.581299], "type": "Point"}, "properties": {"park": "Yellowstone National Park (YELL)", "popupContent": "Yellowstone National Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/40ed83db-1d88-4df1-bfd8-97c7fbc72dac'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Yellowstone+Park+YELL&selectUsing=2.0&rows=20>'>catalog search for Yellowstone National Park (YELL)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-80.953499, 25.27177], "type": "Point"}, "properties": {"park": "Everglades National Park (EVER)", "popupContent": "Everglades National Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/d7b13cdc-84d7-4e12-b557-2cd5a04e4bb7'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Everglades+Park+EVER&selectUsing=2.0&rows=20>'>catalog search for Everglades National Park (EVER)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.237923, 39.799309], "type": "Point"}, "properties": {"park": "Gettysburg National Military Park (GETT)", "popupContent": "Gettysburg brochure map<br><a href='http://npgallery.nps.gov/AssetDetail/395ce0e8-5ec3-4f8f-92c8-4c5a7d8ec9d6'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gettysburg+Military+Park+GETT&selectUsing=2.0&rows=20>'>catalog search for Gettysburg National Military Park (GETT)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.237923, 39.799309], "type": "Point"}, "properties": {"park": "Gettysburg National Military Park (GETT)", "popupContent": "Gettysburg brochure text<br><a href='http://npgallery.nps.gov/AssetDetail/b3d206ff-fd7c-472f-ac7f-f8754fc695cc'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gettysburg+Military+Park+GETT&selectUsing=2.0&rows=20>'>catalog search for Gettysburg National Military Park (GETT)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-76.634216, 37.28809], "type": "Point"}, "properties": {"park": "Colonial National Historical Park (COLO)", "popupContent": "Old Colonial NHP Brochure Map 14x8<br><a href='http://npgallery.nps.gov/AssetDetail/19f62e9b-155d-451f-6730-de0f61585bda'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Colonial+Historical+Park+COLO&selectUsing=2.0&rows=20>'>catalog search for Colonial National Historical Park (COLO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-76.634216, 37.28809], "type": "Point"}, "properties": {"park": "Colonial National Historical Park (COLO)", "popupContent": "Old Colonial NHP brochure Map 11x8<br><a href='http://npgallery.nps.gov/AssetDetail/19f7817b-155d-451f-6766-e95ebda34453'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Colonial+Historical+Park+COLO&selectUsing=2.0&rows=20>'>catalog search for Colonial National Historical Park (COLO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.237923, 39.799309], "type": "Point"}, "properties": {"park": "Gettysburg National Military Park (GETT)", "popupContent": "Gettysburg National Military Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/397e43e1-8784-4bac-bc27-0f5ab9bc109e'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gettysburg+Military+Park+GETT&selectUsing=2.0&rows=20>'>catalog search for Gettysburg National Military Park (GETT)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},

{"features": [{"geometry": {"coordinates": [-73.629013, 42.979092], "type": "Point"}, "properties": {"park": "Saratoga", "popupContent": "Saratoga" + SARA_brochure_link + SARA_catalog_link + SARA_gmp_link}, "type": "Feature"}], "type": "FeatureCollection"},

{"features": [{"geometry": {"coordinates": [-76.634216, 37.28809], "type": "Point"}, "properties": {"park": "Colonial National Historical Park (COLO)", "popupContent": "Colonial National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/3ed70256-0912-49b9-a197-b79bd2f89fdf'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Colonial+Historical+Park+COLO&selectUsing=2.0&rows=20>'>catalog search for Colonial National Historical Park (COLO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-121.350502, 48.827888], "type": "Point"}, "properties": {"park": "North Cascades National Park (NOCA)", "popupContent": "North Cascades National Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/b64d14ff-4844-4b21-b6e0-624579580f8b'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=North+Cascades+Park+NOCA&selectUsing=2.0&rows=20>'>catalog search for North Cascades National Park (NOCA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.237923, 39.799309], "type": "Point"}, "properties": {"park": "Gettysburg National Military Park (GETT)", "popupContent": "Gettysburg National Military Park brochure<br><a href='http://npgallery.nps.gov/AssetDetail/e9a76abc-1254-4d81-b540-6bc929ffd64a'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gettysburg+Military+Park+GETT&selectUsing=2.0&rows=20>'>catalog search for Gettysburg National Military Park (GETT)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-75.444633, 40.0989], "type": "Point"}, "properties": {"park": "Valley Forge National Historical Park (VAFO)", "popupContent": "Valley Forge National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/62e60a60-25ba-4af1-87fa-68964cd105c5'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Valley+Forge+Historical+Park+VAFO&selectUsing=2.0&rows=20>'>catalog search for Valley Forge National Historical Park (VAFO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-73.941803, 41.795349], "type": "Point"}, "properties": {"park": "Vanderbilt Mansion National Historic Site (VAMA)", "popupContent": "VAMA_S1.pdf<br><a href='http://npgallery.nps.gov/AssetDetail/5ac97936-f052-4d53-822c-0dcd7691383b'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Vanderbilt+Mansion+Historic+Site+VAMA&selectUsing=2.0&rows=20>'>catalog search for Vanderbilt Mansion National Historic Site (VAMA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-108.689301, 38.9935], "type": "Point"}, "properties": {"park": "Colorado National Monument (COLM)", "popupContent": "Colorado National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/2d25c990-89df-40f9-8f9d-f476ad52a4b5'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Colorado+Monument+COLM&selectUsing=2.0&rows=20>'>catalog search for Colorado National Monument (COLM)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-84.063759, 39.804588], "type": "Point"}, "properties": {"park": "Dayton Aviation Heritage National Historical Park (DAAV)", "popupContent": "Dayton Aviation Heritage National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/60365203-e6e5-4b1c-b772-89f196963c92'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Dayton+Aviation+Heritage+Historical+Park+DAAV&selectUsing=2.0&rows=20>'>catalog search for Dayton Aviation Heritage National Historical Park (DAAV)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.944839, 39.599651], "type": "Point"}, "properties": {"park": "Chesapeake and Ohio Canal National Historical Park (CHOH)", "popupContent": "Chesapeake & Ohio Canal National Historical Park Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/823cf250-a1d7-4a4f-9633-0761da2c6f70'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Chesapeake+and+Ohio+Canal+Historical+Park+CHOH&selectUsing=2.0&rows=20>'>catalog search for Chesapeake and Ohio Canal National Historical Park (CHOH)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-107.977501, 34.78484], "type": "Point"}, "properties": {"park": "El Malpais National Monument (ELMA)", "popupContent": "El Malpais National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/dde83d2d-cc02-45b8-afb4-6452510ea55f'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=El+Malpais+Monument+ELMA&selectUsing=2.0&rows=20>'>catalog search for El Malpais National Monument (ELMA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-117.139, 36.567551], "type": "Point"}, "properties": {"park": "Death Valley National Park (DEVA)", "popupContent": "Brochure about Scotty's Castle in Death Valley National Park, printed Sept. 2012.<br><a href='http://npgallery.nps.gov/AssetDetail/1db25a86-b6a6-470f-a37e-e30be933a59f'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Death+Valley+Park+DEVA&selectUsing=2.0&rows=20>'>catalog search for Death Valley National Park (DEVA)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-91.207771, 43.091461], "type": "Point"}, "properties": {"park": "Effigy Mounds National Monument (EFMO)", "popupContent": "Effigy Mounds National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/50f769c3-9879-4a08-bddb-3a81c124f658'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Effigy+Mounds+Monument+EFMO&selectUsing=2.0&rows=20>'>catalog search for Effigy Mounds National Monument (EFMO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.267807, 39.794331], "type": "Point"}, "properties": {"park": "Eisenhower National Historic Site (EISE)", "popupContent": "Eisenhower National Historic Site Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/ea313284-1ae5-4956-b749-d0defdadf657'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Eisenhower+Historic+Site+EISE&selectUsing=2.0&rows=20>'>catalog search for Eisenhower National Historic Site (EISE)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-118.4655, 46.042648], "type": "Point"}, "properties": {"park": "Whitman Mission National Historic Site (WHMI)", "popupContent": "Whitman Mission National Historic Site Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/b481fa9c-aebe-4ae1-aabb-b729e8d43a39'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Whitman+Mission+Historic+Site+WHMI&selectUsing=2.0&rows=20>'>catalog search for Whitman Mission National Historic Site (WHMI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-76.307274, 37.004158], "type": "Point"}, "properties": {"park": "Fort Monroe National Monument (FOMR)", "popupContent": "Fort Monroe National Monument Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/f273bd0d-1d01-423b-a98b-39dab5615557'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Fort+Monroe+Monument+FOMR&selectUsing=2.0&rows=20>'>catalog search for Fort Monroe National Monument (FOMR)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-96.997803, 34.455528], "type": "Point"}, "properties": {"park": "Chickasaw National Recreation Area (CHIC)", "popupContent": "Chickasaw National Recreation Area Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/9779f45b-29fc-4f16-a7f9-778c0cc40a39'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Chickasaw+Recreation+Area+CHIC&selectUsing=2.0&rows=20>'>catalog search for Chickasaw National Recreation Area (CHIC)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-113.706299, 42.0653], "type": "Point"}, "properties": {"park": "City of Rocks National Reserve (CIRO)", "popupContent": "City Of Rocks National Reserve Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/04d19b7c-5b78-4d17-ba10-356b2f610b08'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=City+of+Rocks+Reserve+CIRO&selectUsing=2.0&rows=20>'>catalog search for City of Rocks National Reserve (CIRO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-107.330597, 38.43959], "type": "Point"}, "properties": {"park": "Curecanti National Recreation Area (CURE)", "popupContent": "Curecanti National Recreation Area Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/d8a571ca-e2c9-4f8b-beda-004458476318'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Curecanti+Recreation+Area+CURE&selectUsing=2.0&rows=20>'>catalog search for Curecanti National Recreation Area (CURE)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-86.909973, 30.37306], "type": "Point"}, "properties": {"park": "Gulf Islands National Seashore (GUIS)", "popupContent": "Gulf Islands National Seashore Brochure<br><a href='http://npgallery.nps.gov/AssetDetail/627c56de-06bc-49d4-bb13-75dadc8a4308'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gulf+Islands+Seashore+GUIS&selectUsing=2.0&rows=20>'>catalog search for Gulf Islands National Seashore (GUIS)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},

{"features": [{"geometry": {"coordinates": [-71.291618, 42.451611], "type": "Point"}, "properties": {"park": "Minute Man<br>", 
    "popupContent": "Minute Man<br>" + MIMA_brochure + MIMA_underground + MIMA_catalog},
     "type": "Feature"}], "type": "FeatureCollection"},

{"features": [{"geometry": {"coordinates": [-101.384003, 47.353001], "type": "Point"}, "properties": {"park": "Knife River Indian Villages National Historic Site (KNRI)", "popupContent": "Brochure Map, Archaeology, and Contact Information<br><a href='http://npgallery.nps.gov/AssetDetail/38bd8484-ed35-4a11-adbd-c75dd68e6c18'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Knife+River+Indian+Villages+Historic+Site+KNRI&selectUsing=2.0&rows=20>'>catalog search for Knife River Indian Villages National Historic Site (KNRI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-75.1499480, 39.949010], "type": "Point"}, "properties": {"park": "National Underground Railroad Network to Freedom Program (UGRR)", "popupContent": "Network to Freedom Brochure Map  - National Underground Railroad Network to Freedom Program<br><a href='http://npgallery.nps.gov/AssetDetail/25a41ab8-49ab-43c7-9e3f-a7bdc02df091'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Underground+Railroad+Network+to+Freedom+Program+UGRR&selectUsing=2.0&rows=20>'>catalog search for National Underground Railroad Network to Freedom Program (UGRR)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-101.384003, 47.353001], "type": "Point"}, "properties": {"park": "Knife River Indian Villages National Historic Site (KNRI)", "popupContent": "Knife River Indian Villages: Brochure Cover<br><a href='http://npgallery.nps.gov/AssetDetail/e8eeee64-a2bc-4537-a52b-4f96b3ad6d0e'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Knife+River+Indian+Villages+Historic+Site+KNRI&selectUsing=2.0&rows=20>'>catalog search for Knife River Indian Villages National Historic Site (KNRI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-94.530777, 38.901241], "type": "Point"}, "properties": {"park": "Harry S. Truman National Historic Site (HSTR)", "popupContent": "Harry S Truman National Historic Site<br><a href='http://npgallery.nps.gov/AssetDetail/b3a1bad3-578c-4c25-a6db-716d14e1449d'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Harry+S.+Truman+Historic+Site+HSTR&selectUsing=2.0&rows=20>'>catalog search for Harry S. Truman National Historic Site (HSTR)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-101.384003, 47.353001], "type": "Point"}, "properties": {"park": "Knife River Indian Villages National Historic Site (KNRI)", "popupContent": "Downloadable Brochure for Knife River Indian Villages National Historic Site<br><a href='http://npgallery.nps.gov/AssetDetail/777c747e-5ade-4be5-af50-7a09b184e0a2'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Knife+River+Indian+Villages+Historic+Site+KNRI&selectUsing=2.0&rows=20>'>catalog search for Knife River Indian Villages National Historic Site (KNRI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-154.889404, 58.566109], "type": "Point"}, "properties": {"park": "Katmai National Park and Preserve (KATM)", "popupContent": "Katmai National Park and Preserve<br><a href='http://npgallery.nps.gov/AssetDetail/43d3f7f1-1dd8-b71c-0744-4519d26fcc8b'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Katmai+Park+and+Preserve+KATM&selectUsing=2.0&rows=20>'>catalog search for Katmai National Park and Preserve (KATM)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-101.961403, 43.877621], "type": "Point"}, "properties": {"park": "Minuteman Missile National Historic Site (MIMI)", "popupContent": "Artist Rendition Delta 9<br><a href='http://npgallery.nps.gov/AssetDetail/e544f07d-ad5a-4886-97f3-5a9bd63f7e3c'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Minuteman+Missile+Historic+Site+MIMI&selectUsing=2.0&rows=20>'>catalog search for Minuteman Missile National Historic Site (MIMI)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.944839, 39.599651], "type": "Point"}, "properties": {"park": "Chesapeake and Ohio Canal National Historical Park (CHOH)", "popupContent": "Scene depicts the Union occupation of the Ferry Hill plantation, September 1862.<br><a href='http://npgallery.nps.gov/AssetDetail/6a522f54-9d5b-4438-8a57-0246f16641a9'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Chesapeake+and+Ohio+Canal+Historical+Park+CHOH&selectUsing=2.0&rows=20>'>catalog search for Chesapeake and Ohio Canal National Historical Park (CHOH)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.944839, 39.599651], "type": "Point"}, "properties": {"park": "Chesapeake and Ohio Canal National Historical Park (CHOH)", "popupContent": "Ferry Hill plantation, fall 1839: plantation owner John Blackford is shown talking with two laborers in the foreground with other workers and family members shown in the background.<br><a href='http://npgallery.nps.gov/AssetDetail/c2fe559d-7d2f-4423-8f6e-a95e72cdc341'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Chesapeake+and+Ohio+Canal+Historical+Park+CHOH&selectUsing=2.0&rows=20>'>catalog search for Chesapeake and Ohio Canal National Historical Park (CHOH)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-121.412102, 40.486179], "type": "Point"}, "properties": {"park": "Lassen Volcanic National Park (LAVO)", "popupContent": "Cutaway geologic diagram shows Lassen Peak, the world's largest plug dome volcano, erupting in May 1914. The ghosted image to the right of the peak shows that it developed as a volcanic vent on the northern flank of a larger extinct volcano, Mount Tehama.<br><a href='http://npgallery.nps.gov/AssetDetail/6f96e114-82e3-428a-aadc-b7206cf53c00'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Lassen+Volcanic+Park+LAVO&selectUsing=2.0&rows=20>'>catalog search for Lassen Volcanic National Park (LAVO)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
{"features": [{"geometry": {"coordinates": [-77.237923, 39.799309], "type": "Point"}, "properties": {"park": "Gettysburg National Military Park (GETT)", "popupContent": "Three Days in July<br><a href='http://npgallery.nps.gov/AssetDetail/09ad90ca-a3c4-44ac-8780-ab031b439acb'>NPGallery page</a><br><a href='https://eosfcweb01.eosfc-intl.net/N94044/OPAC/Search/SimpleSearch.aspx?txtSearch=Gettysburg+Military+Park+GETT&selectUsing=2.0&rows=20>'>catalog search for Gettysburg National Military Park (GETT)</a>'"}, "type": "Feature"}], "type": "FeatureCollection"},
]
};

// Navajo National Monument

//{"geometry": {"coordinates": [-131.7725, 55.42], "type": "Point"}, "properties": {"LC id": "LC_HABS_HAER_ak0002", "Library of Congress": "https://www.loc.gov/item/ak0002/", "State: ": "Alaska", "popupContent": "Totem Bight State Historical Park, Totem Bight Community House", "wikipedia": "https://en.wikipedia.org/wiki/Totem_Bight_State_Historical_Park"}, "type": "Feature"}
