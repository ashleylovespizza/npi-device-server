Server = require('npi_server').Server
Website = require('npi_website').Website

npi = new Server()
npi.start()

npi_website = new Website();
npi_website.start();
