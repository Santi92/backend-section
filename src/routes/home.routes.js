const { Router } = require("express");

module.exports = function ({ HomeController }){
    const route = Router();
    route.get("/", HomeController.index)
    
    return route;
}