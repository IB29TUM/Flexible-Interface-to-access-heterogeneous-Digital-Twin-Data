import json
json_obj ='{"ID": "IfcOpeningElement_Windows_Sgl_Plain:1810x1210mm","Numbers": "5","Material": "Glass","Dimension": "1810x1210mm","Level": "0"}'
python_obj = json.loads(json_obj)
print("\nJSON data:")
print(python_obj)
print("const object={")
print("ID:","'",python_obj["ID"],"'")
print("Numbers: ","'",python_obj["Numbers"],"'")
print("Material: ","'",python_obj["Material"],"'")
print("},") 