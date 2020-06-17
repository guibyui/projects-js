import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import points_controller from "./controllers/points_controller";
import items_controller from "./controllers/items_controller";

// CONTROLLER FORMATS:
// index(many), show(one), create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new points_controller();
const itemsController = new items_controller();

routes.get("/items", itemsController.index);
routes.get("/points/", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.post("/points", upload.single('image'), pointsController.create);


// return response.json(items);

// return response.json('HI GUI');

export default routes;
