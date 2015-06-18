Nodebraco.Runtime (Moriyama.Runtime)
=

A node.js Umbraco runtime that was proposed by Darren Ferguson (http://blog.darren-ferguson.com/2015/06/14/a-runtime-for-umbraco/). This implementation has no dependency on Umbraco or any particular CMS.

a node implimentation of the runtime would prove to all you're friends just how much of an hoopy frood you are - It would need some trendy hosting but would mean you could run it on a mac without needed parallels. 


Express
-
This version of the runtime uses ExpressJs (http://expressjs.com/) which makes all the web bits really easy. 

Request Pipeline
-

**Router**

All requests come into the index.js route - this passes them off to the runtime provider

**Provider**

The runtime provider takes the requested url and looks for a content.json file in the home folder (so / becomes /home/content.json). 

it then loads the json up and returns it to the router and an object

**Router - to view**
the router packages up the object if gets and passes it to a view whose name matches the Template value in the json. 

**Views**
the view gets two objects, 

CurrentPage: 
using Handlebars - you can reference any of the content section of the current page using {{{curentPage.name}} so it's just like dynamicObject umbraco!

you also get a Model - if you want to get umbraco stuff like {{{Model.UpdateDate}}} 
 

