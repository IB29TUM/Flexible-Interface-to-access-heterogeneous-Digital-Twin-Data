import ifcopenshell
import json
def convert_entity(e):
    data = {
        'name': e.Name,
        'guid': e.GlobalId,
        'type': e.is_a()
    }
    return data

file = ifcopenshell.open("example.ifc")
data = {}
for i, e in enumerate(file.by_type("IfcProduct")):
    data[i] = convert_entity(e)

with open("example.json", "w") as outfile:
    json.dump(data, outfile)
