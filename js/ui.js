// display data
// display details
let gameImg = document.getElementById("gameImg");
let datailsTitle = document.getElementById("datailsTitle");
let detailsCategory = document.getElementById("detailsCategory");
let detailsPlatform = document.getElementById("detailsPlatform");
let detailsStatus = document.getElementById("detailsStatus");
let description = document.getElementById("description");
let gameURL = document.getElementById("gameURL");

/*let card = `
 <!-- start card -->
    <a href="#" class="col-content">
        <div class="card p-0 border border-dark bg-transparent text-white">
            <div class="card-img p-3 pb-0">
                <img src="images/thumbnail.jpg" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <span>mmorpg mmorpg</span>
                    <span class="px-2 py-1 rounded-2 bg-primary mb-2">Free</span>
                </div>
                <p class="card-text text-center">Some quick example text to build on the card title
                    and make up
                </p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between align-items-center">
                    <span
                        class="fs-small bg-secondary bg-opacity-25 px-2 py-1 rounded-2">mmorpg</span>
                    <span
                        class="fs-small bg-secondary bg-opacity-25 px-2 py-1 rounded-2">mmorpg</span>
                </div>
            </div>
        </div>
    </a>
// `;*/
export function creatCard() {
  let cardA = document.createElement("div");
  cardA.style.cursor = "pointer";
  cardA.classList.add("col-content");

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "p-0",
    "border",
    "border-dark",
    "bg-transparent",
    "text-white"
  );
  

  cardA.append(card);

  let cardImgDiv = document.createElement("div");
  cardImgDiv.classList.add("card-img", "p-3", "pb-0");

  let cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImgDiv.append(cardImg);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardBodyTitle = document.createElement("div");
  cardBodyTitle.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let cardBodyTitleName = document.createElement("span");
  cardBodyTitleName.setAttribute("id", "gameName");
  let cardBodyTitleFree = document.createElement("span");
  cardBodyTitleFree.classList.add('px-2', 'py-1', 'rounded-2', 'bg-primary', 'mb-2')
  cardBodyTitleFree.textContent = "Free";
  cardBodyTitle.append(cardBodyTitleName, cardBodyTitleFree);

  let cardBodyP = document.createElement("p");
  cardBodyP.classList.add('text-center', 'my-2', 'text-secondary');
  cardBodyP.setAttribute("id", "shortDescription");
  cardBody.append(cardBodyTitle, cardBodyP);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  let cardFooterFlex = document.createElement("div");
  cardFooterFlex.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  cardFooter.append(cardFooterFlex);

  let cardFooterSpan1 = document.createElement("span");
  cardFooterSpan1.classList.add(
    "fs-small",
    "bg-secondary",
    "bg-opacity-25",
    "px-2",
    "py-1",
    "rounded-2"
  );
  cardFooterSpan1.setAttribute("id", "genre");
  let cardFooterSpan2 = document.createElement("span");
  cardFooterSpan2.classList.add(
    "fs-small",
    "bg-secondary",
    "bg-opacity-25",
    "px-2",
    "py-1",
    "rounded-2"
  );
  cardFooterSpan2.setAttribute("id", "platform");

  cardFooterFlex.append(cardFooterSpan1, cardFooterSpan2);

  card.append(cardImgDiv, cardBody, cardFooter);

  return (cardA);
}

let cardsRow = document.querySelector(".cards-row");

export class UI {
  displayGames(data) {//hereeeeee
    cardsRow.innerHTML =""
    for (let i = 0; i < data.length; i++) {
        let gameCard = creatCard();
        gameCard.setAttribute('data-id', data[i].id);
        gameCard.querySelector('.card-img-top').src = data[i].thumbnail;
        gameCard.querySelector('#gameName').innerHTML = data[i].title;
        gameCard.querySelector('#shortDescription').innerHTML = data[i].short_description.split(" ", 8).join(" ");
        gameCard.querySelector('#genre').innerHTML = data[i].genre;
        gameCard.querySelector('#platform').innerHTML = data[i].platform;
      cardsRow.append(gameCard.cloneNode(true));
      
    //   console.log(data[i].thumbnail);
      
    }
  }
  displayDetails(data) {
    gameImg.src = data.thumbnail;
    datailsTitle.innerHTML = data.title;
    detailsCategory.innerHTML = data.genre;
    detailsPlatform.innerHTML = data.platform;
    detailsStatus.innerHTML = data.status;
    description.innerHTML = data.description;
    gameURL.href = data.game_url;
  }
}
