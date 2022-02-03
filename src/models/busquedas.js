import axios from "axios";
import "dotenv/config";

export class Busquedas {
  historial = "";
  constructor() {
    // TODO: leer db
  }

  get paramsMapbox() {
    return {
      limit: 5,
      language: "es",
      access_token: process.env.MAPBOX_KEY
    };
  }

  async ciudad(lugar = "") {
    try {
      // Peticion http
      //let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?limit=5&language=es&access_token=${process.env.MAPBOX_KEY}`;

      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox
      });
      const resp = await instance.get();
      return resp.data.features.map(lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lnt: lugar.center[1]
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
