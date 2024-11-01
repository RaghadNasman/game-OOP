import { UI } from "./ui.js";
export class Details {
  constructor(id) {
    document.getElementById("closeDetails").addEventListener("click", () => {
      document.getElementById("games").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });
    this.uiDetails = new UI();
    this.getDetails(id);
  }
  async getDetails(id) {
    document.querySelector(".loading").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1811d7884cmsh36a66df510d56e2p1968e7jsn480ac64e2c0e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.uiDetails.displayDetails(result);
      document.querySelector(".loading").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }
}
