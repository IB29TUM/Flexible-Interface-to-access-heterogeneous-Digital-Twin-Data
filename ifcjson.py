import ifcopenshell
import json

def convert_entity(e):
    data = {
        'name': e.Name,
        'guid': e.GlobalId,
        'type': e.is_a()
    }

    if e.is_a("IfcBuildingStorey"):
        data['elevation'] = e.Elevation
    
    if e.is_a("IfcOpeningElement"):
        data['opening_type'] = e.is_a()
        data['object_placement'] = e.ObjectPlacement.RelativePlacement.Location.Coordinates
    
    return data

file = ifcopenshell.open("Grethes-hus-bok-2.ifc")
data = {}
for i, e in enumerate(file.by_type("IfcProduct")):
    data[i] = convert_entity(e)

with open("example.json", "w") as outfile:
    json.dump(data, outfile)

import pandas as pd 
df = pd.read_json('example.json')
ifc_conv=df.T
# print(ifc_conv)

for index, row in ifc_conv.iterrows():
    print("{")
    print("id:","'",row["guid"],"',")
    print("type:","'",row["type"],"',", "\nelevation: ","'",row["elevation"],"',",
    "\nopening_type ","'",row["opening_type"],"',",
    "\nobject_placement ","'",row["object_placement"],
    "}",",",)
print("},\n ];") 