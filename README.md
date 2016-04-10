# SpyFinder

install postgres via homebrew or your chosen package manager.

start postgres:

  pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

create your postgres database for this application, naming it spy_finder, using psql or a GUI tool like pgAdmin3.


start grails:

  grails run-app


in a new tab, start gulp/webpack:

  gulp watch


navigate to localhost:8080, then live the dream.

grails --debug-jvm run app