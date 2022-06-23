import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let images;

export default class ImagesDAO {
  static async injectDB(conn) {
    if (images) {
      return;
    }
    try {
      images = await conn.db(process.env.RESTREVIEWS_NS).collection("images");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async getRestaurantByID(id) {
    let urls = [];
    try {
      urls = await images.distinct("images");
      return urls;
    } catch (e) {
      console.error(`Something went wrong in getImagesByID: ${e}`);
      throw e;
    }
  }
}
