const Application = require("./app/server");
const DB_URL="mongodb://0.0.0.0:27017/ProjectManegerDB"
const DB_URL2="mongodb://0.0.0.0:27017/ProjectManegerDB2"
new Application(5000,DB_URL)
new Application(3500,DB_URL)