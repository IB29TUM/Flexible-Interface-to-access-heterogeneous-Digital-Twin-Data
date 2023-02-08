# """
# File name: csvobjectmaker.py
# Description: In this script we convert a CSV ,from where we make it compatible to our database as javascript object
# """

import pandas as pd

data=pd.read_csv("hvac.csv")                   # upload your your havac data in csv format and paste the directory here 
data.insert(0, 'ID', range(100, 100 + len(data)))
filename = "db1.js"
with open(filename, 'a') as file:
    file.write("\nconst HVACservices=[" + "\n")
    for index, row in data.iterrows():
        file.write("{" + "\n")
        file.write("id: " + "'" + str(row["ID"]) + "'" + "," + "\n")
        file.write("Date: " + "'" + str(row["date"]) + "'" + "," + "\n")
        file.write("Temperature: " + "'" + str(row["Temperature"]) + "'" + "," + "\n")
        file.write("Humidity: " + "'" + str(row["Humidity"]) + "'" + "," + "\n")
        file.write("CO2: " + "'" + str(row["CO2"]) + "'" + ","+ "\n")
        file.write("HumidityRatio: " + "'" + str(row["HumidityRatio"]) + "'" + ","+ "\n")
        file.write("Light: " + "'" + str(row["Light"]) + "'" + "\n")
        file.write("}" + "," + "\n")
    file.write("\n ];")