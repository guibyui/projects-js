import { Request, Response } from 'express';
import knex from '../database/connection'

class pointsController {
    async create(request: Request, response: Response) {

    // const name = request.body.name;
    // const email = request.body.email;
    // ...

    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      uf,
      city,
      items
    } = request.body;

    const trx = await knex.transaction();
    const point = {
      // name: name,
      // ...
      image: "image-null",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      uf,
      city,
    };

    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id: point_id,
      };
    })
    await trx("point_items").insert(pointItems);

    return response.json({
        id: point_id,
        ... point,
    })
  }
}

export default pointsController;