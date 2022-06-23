import ImagesDAO from "../dao/imagesDAO.js";

export default class ImagesController {
  static async apiGetImages(req, res, next) {
    try {
      let id = req.params.id || {};
      let restaurant = await ImagesDAO.getRestaurantByID(id);
      if (!restaurant) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(restaurant);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
