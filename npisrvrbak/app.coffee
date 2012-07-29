BEANSTALK_SERVER = "127.0.0.1"
BEANSTALK_PORT = "11300"

Server = require('npi_server').Server

npi = new Server()
npi.start()

