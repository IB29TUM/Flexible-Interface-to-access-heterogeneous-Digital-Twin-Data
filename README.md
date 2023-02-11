# welcome to Flexible Interface to access heterogeneous Digital Twin Data

############Installation Guide#############

For server :-

1. Install npm 
https://docs.npmjs.com/cli/v8/commands/npm-install

Other dependencies :

2. Install 
    apollo-server: 3.10.3
    
    graphql: 16.6.0
    
    nodemon: 2.0.20
    
    prisma: 4.4.0
    
    uuid: 9.0.0
    
 ##########################################
 
 Python packages requirements : 
 
 1. pip install json
 2. pip install ifcopenshell
 https://github.com/IfcOpenShell/IfcOpenShell
 
 3. pip install pandas

 Alternatively just run the requirement.txt from your terminal 
OR

´´´echo "json\nifcopenshell\npandas" > requirements.txt´´´

# Steps to run the code 

1. Upload your IFC/CSV data in the cloned directory.
2. Run IFCJson.py that will convert out IFC file into a js object.(Dont forget the module exports after the file)
3. Also do the same if you have a csv file now run csvobjectmaker.py
4.Now once you have succesfully generated and polulated the database in the terminal write  'npm run dev'
6. If every step avove is correct you should get your server running and it  look like this 'Server is ready at http://localhost:4000/'
5. To run the interface open terminal on the cloned branch and 
launch the sever 'python -m http.server'

**Note**

You can query both at the apollo playground 'http://localhost:4000/'  

or  the interface  at 
'http://localhost:8000/front.html'

Enjoy the playinf with the elements !!!
