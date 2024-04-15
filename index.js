function createProductCard(productName, price, imageUrl) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("product-card");

  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.alt = productName;
  imageElement.classList.add("product-image");

  const nameElement = document.createElement("h2");
  nameElement.textContent = productName;
  nameElement.classList.add("product-name");

  const priceElement = document.createElement("p");
  priceElement.textContent = price;
  priceElement.classList.add("product-price");

  cardContainer.appendChild(imageElement);
  cardContainer.appendChild(nameElement);
  cardContainer.appendChild(priceElement);

  return cardContainer;
}

const productName = "Iphone 11";
const price = "1249 azn.";
const imageUrl =
  "https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-sbp-1105-sm-0209.png";

const productCard = createProductCard(productName, price, imageUrl);

document.body.appendChild(productCard);
