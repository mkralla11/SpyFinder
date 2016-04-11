# SpyFinder

install postgres via homebrew or your chosen package manager.

start postgres:

`pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`

create your postgres database for this application, naming it spy_finder and adding columns id, name, age, gender, longitude, and latitude. You can use psql or a GUI tool like pgAdmin3. Alternatively, utilize the `structure.sql` file in the root of the project.

I will be using Grails 3, so see https://grails.github.io/grails-doc/3.0.x/guide/introduction.html for more information, including installation and setup.
start grails:

`grails run-app`


in a new tab, cd into ./frontend/SpyFinder, install npm modules, and then start gulp with the command below, which will be used as the task runner and webpack as the compiler. While developing, webpack's react component hot swapping is enabled which starts an additional node server on port 4002. Additionally, a small node server is running to map all requests to 3050 for the frontend app to a single html file for which the frontend app can bootstrap itself in the browser. Therefore, make sure ports 3050 and 4002 are free. Run these commands:

`cd frontend/SpyFinder`

`npm install`

`gulp watch`

in another tab run:

`node app.js`

in the browser, navigate to localhost:3050, then live the dream.


#Notes

I completed this small project in around two days. The most enjoyable part of the project was wiring up the frontend and utilizing leaflet (I usually reach for the google maps api when doing map projects, so this was a fun change). An interesting challenge was making the React map component, because it essentially side-steps the usual React idealogy (aka utilize the render function to display any fresh props/state), instead making the component function more similarly to a canvas component. Basically, I needed to communicate with the leaflet api *after* render, in order to redraw the new props via available functions that leaflet provides. I chose to avoid using an existing store implementation on the frontend, such as redux, because I thought the state could easily be represented through a simple store extending EventEmitter. I chose to use React because of it's powerful virtual DOM diffing, and to facilitate syncing the state of an application in the UI. Also, Gulp and Webpack work very well together when running and compiling assets for the frontend.

Overall, this project should demonstrate well encasulated, elegantly styled frontend components, correctly synced data as demonstrated in the UI, a simple server-side api application that has CORS enabled, and an underlying structure that can easily be scaled well beyond the current project.

