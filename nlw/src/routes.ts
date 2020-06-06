import express from "express";
import knex from "./database/connection";

import points_controller from "./controllers/points_controller";
import items_controller from "./controllers/items_controller";

  // CONTROLLER FORMATS:
  // index(many), show(one), create, update, delete

const routes = express.Router();

const pointsController = new points_controller();
const itemsController = new items_controller();


routes.get("/items", itemsController.index);

  routes.post("/points", pointsController.create);
  routes.get("/points/", pointsController.index);
  routes.get("/points/:id", pointsController.show);

  // return response.json(items);

  // return response.json('HI GUI');

export default routes;
