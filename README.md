# Express_MVC_React_Client_Server_rendering

Clients side frameworks are great. we can build interactive and fast web applications.
howeve There are several drawbacks, too. One of the main disadvantages is the initial loading speed And we might miss the seo urls because every HTML is build on client side.

So we can go with this kind of approch : First, we can render any component, [ basic html structure with seo data ] from server side.


	-	 As soon as the server responds to the browser request, the user will see the page.
	-	 Therefore the perceived speed is much faster then before.
	-	 and with second call [ from client ( browser ) side ] will attched the events to DOM.


Example Used as 

	- Fetch Data from table 
	- Api for View more data
	- Skeleton mvc structure with express & react ( Server/Client side ).

To Get running : Clone the git repo & go with this steps.

1 ) npm i 

2 ) create data base in mysql with name HCS [ You can cahnge the db config under ./config/db.js ]

3 ) look into ./Data file where table structure and Dump Data query's are available 

4 ) start app.js with : node app.js OR npm run test

5 ) http://localhost:8000/ OR http://localhost:8000/es6

6 ) POst Api : http://localhost:8000/viewMore

Note : 

This is basic skeleton structure to get start [ learning purpose ].
Please install webpack globally 

If you have make any changes to ./ReactComponent/Es6.js OR ./ReactComponent/table.js Then make webpack OR webpack -p before restarting server ( npm run test OR node app.js ).


		