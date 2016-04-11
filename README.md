# SpyFinder

install postgres via homebrew or your chosen package manager.

start postgres:

`pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`

create your postgres database for this application, naming it spy_finder and adding columns id, name, age, gender, longitude, and latitude. You can use psql or a GUI tool like pgAdmin3.


start grails:

`grails run-app`


in a new tab, cd into ./frontend/SpyFinder, install npm modules, and then start gulp with the command below, which will be used as the task runner and webpack as the compiler. While developing, webpack's react component hot swapping is enabled which starts an additional node server on port 4002. Additionally, a small node server is running to map all requests to 3050 for the frontend app to a single html file for which the frontend app can bootstrap itself in the browser. Therefore, make sure ports 3050 and 4002 are free. Run these commands:

`cd frontend/SpyFinder`

`npm install`

`gulp watch`

in another tab run:

`node app.js`

in the browser, navigate to localhost:3050, then live the dream.
