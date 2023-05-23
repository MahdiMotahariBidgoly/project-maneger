const Application = require("./app/server")
const DB_URL ="mongodb//localhost:27017/ProjectManegerDB"
new Application(5000,DB_URL)