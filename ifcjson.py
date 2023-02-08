# """
# File name: ifcjson.py
# Description: In this script with IFC openshell we convert to a json ,from where we make it compatible to our database as js object
# """

import ifcopenshell
import json

def convert_entity(e):
    data = {
        'name': e.Name,
        'guid': e.GlobalId,
        'type': e.is_a()
    }

    # *************************************************************************************************************************
    # Change to the desired IFC object you want to study, make sure you have the IFC uploaded in the directory
    # in our case we were only interested in "IfcBuildingStorey" & "IfcOpeningElement" you can add any or replace any ;)
    # So if you want more information you have to make changes below !!

    # **************************************************************************************************************************

    if e.is_a("IfcBuildingStorey"):
        data['elevation'] = e.Elevation
    
    if e.is_a("IfcOpeningElement"):
        data['opening_type'] = e.is_a()
        data['object_placement'] = e.ObjectPlacement.RelativePlacement.Location.Coordinates
    
    return data

file = ifcopenshell.open("Grethes-hus-bok-2.ifc")                       # Put your  IFC file directory here
data = {}
for i, e in enumerate(file.by_type("IfcProduct")):
    data[i] = convert_entity(e)

with open("convertedifc2json.json", "w") as outfile:
    json.dump(data, outfile)

import pandas as pd 
df = pd.read_json('convertedifc2json.json')
ifc_conv=df.T

    # *************************************************************************************************************************
    # The below code will make the json file write to a javascript object which we will use as a database
    # **************************************************************************************************************************

filename = "db1.js"
with open(filename, 'w') as file:
    file.write("const IFCservices=[" + "\n")
    for index, row in ifc_conv.iterrows():
        file.write("{" + "\n")
        file.write("id: " + "'" + str(row["guid"]) + "'" + "," + "\n")
        file.write("type: " + "'" + str(row["type"]) + "'" + "," + "\n")
        file.write("elevation: " + "'" + str(row["elevation"]) + "'" + "," + "\n")
        file.write("opening_type: " + "'" + str(row["opening_type"]) + "'" + "," + "\n")
        file.write("object_placement: " + "'" + str(row["object_placement"]) + "'" + "\n")
        file.write("}" + "," + "\n")
    file.write("\n ];")