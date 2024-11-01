import { UI } from "./ui.js";
import { Details } from "./details.js";
export let id;

let nav = document.querySelectorAll(".navbar-nav li button");
// let navactive = document.querySelector('.navbar-nav li button.active');
let navArr = Array.from(nav);

export class Game {
  constructor() {
    this.getgGame("mmorpg");
    this.uiGame = new UI();
    navArr.forEach((el) => {
      el.addEventListener("click", (e) => {
        document
          .querySelector(".navbar-nav li button.active")
          .classList.remove("active");
        e.currentTarget.classList.add("active");
        this.getgGame(e.currentTarget.textContent.trim());
        // console.log(e.currentTarget.textContent.trim());
      });
    });
  }
  //get data ==> cards
  async getgGame(category) {
    document.querySelector(".loading").classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
      this.uiGame.displayGames(result);
      document.querySelector(".loading").classList.add("d-none");
      this.getClicked();
    } catch (error) {
      console.error(error);
    }
  }
  //gat the clicked card
  getClicked() {
    document.querySelectorAll("#games .card").forEach((el) => {
      el.addEventListener("click", (e) => {
        document.getElementById("games").classList.add("d-none");
        document.getElementById("details").classList.remove("d-none");
        const id = e.target.closest('.col-content').getAttribute("data-id");
        
        let details = new Details(id);

        //   this.datails.getDetails
      });
    });
  }
}

// getgGame();
