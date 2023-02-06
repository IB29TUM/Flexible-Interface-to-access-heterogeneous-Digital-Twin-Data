import json

#json_obj ='{"ID": "IfcOpeningElement_Windows_Sgl_Plain:1810x1210mm","Numbers": "5","Material": "Glass","Dimension": "1810x1210mm","Level": "0"}'
json_obj ='{"name": "Grethes hus", "guid": "2bb286$Af9iuq951kXeLke", "type": "IfcBuilding"},{"name": "2. etasje", "guid": "2bb286$Af9iuq951jUNgRl", "type": "IfcBuildingStorey", "elevation": 2850.0},'
python_obj = json.loads(json_obj)
print("\nJSON data:")
print(python_obj)
print("const object={")
print("name:","'",python_obj["name"],"'")
print("guid: ","'",python_obj["guid"],"'")
print("type: ","'",python_obj["type"],"'")
print("elevation: ","'",python_obj["elevation"],"'")
print("},") 