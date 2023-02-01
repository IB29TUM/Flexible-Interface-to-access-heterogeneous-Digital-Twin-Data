import pandas as pd
data=pd.read_csv("hvac.csv")
print(data)
data.insert(0, 'ID', range(100, 100 + len(data)))
print("const object=[")
for index, row in data.iterrows():
    print("{")
    print("id:","'",row["ID"],"',")
    print("Date:","'",row["date"],"',", "\nTemperature: ","'",row["Temperature"],"',",
    "\nHumidity ","'",row["Humidity"],"',",
    "\nCO2 ","'",row["CO2"],"',",
    "\nHumidityRatio ","'",row["HumidityRatio"],"',",
    "\nLight ","'",row["Light"],"',",
    )
print("},\n ];") 