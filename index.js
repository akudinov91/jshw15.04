// //задача 1.

// function createProductCard(productName, price, imageUrl) {
//   const cardContainer = document.createElement("div");
//   cardContainer.classList.add("product-card");

//   const imageElement = document.createElement("img");
//   imageElement.src = imageUrl;
//   imageElement.alt = productName;
//   imageElement.classList.add("product-image");

//   const nameElement = document.createElement("h2");
//   nameElement.textContent = productName;
//   nameElement.classList.add("product-name");

//   const priceElement = document.createElement("p");
//   priceElement.textContent = price;
//   priceElement.classList.add("product-price");

//   cardContainer.appendChild(imageElement);
//   cardContainer.appendChild(nameElement);
//   cardContainer.appendChild(priceElement);

//   return cardContainer;
// }

// const productName = "Iphone 11";
// const price = "1249 azn.";
// const imageUrl =
//   "https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-sbp-1105-sm-0209.png";

// const productCard = createProductCard(productName, price, imageUrl);

// document.body.appendChild(productCard);



// //задача 2. 

// function createCommentMessage(author, message, timestamp) {
 
//   let commentDiv = document.createElement('div');
//   commentDiv.classList.add('comment');

//   let authorPara = document.createElement('p');
//   authorPara.classList.add('author');
//   authorPara.textContent = author;

//   let messagePara = document.createElement('p');
//   messagePara.classList.add('message');
//   messagePara.textContent = message;

//   let timestampPara = document.createElement('p');
//   timestampPara.classList.add('timestamp');
//   timestampPara.textContent = timestamp;

  
//   commentDiv.appendChild(authorPara);
//   commentDiv.appendChild(messagePara);
//   commentDiv.appendChild(timestampPara);

  
//   return commentDiv;
// }

// let comment = createCommentMessage("Andrew", "Great post!", "2024-04-16 10:30 AM");
// document.body.appendChild(comment);



// //задача 3.


// function createMenuItem(name, price, description) {
  
//   let menuItem = document.createElement('div');
//   let nameElement = document.createElement('h2');
//   let priceElement = document.createElement('span');
//   let descriptionElement = document.createElement('p');

 
//   nameElement.textContent = name;
//   priceElement.textContent = price;
//   descriptionElement.textContent = description;

  
//   menuItem.classList.add('menu-item');
//   nameElement.classList.add('menu-item-name');
//   priceElement.classList.add('menu-item-price');
//   descriptionElement.classList.add('menu-item-description');

  
//   menuItem.appendChild(nameElement);
//   menuItem.appendChild(priceElement);
//   menuItem.appendChild(descriptionElement);

  
//   return menuItem;
// }


// let menuElement = createMenuItem("Стейк", "$20", "Нежный стейк из высококачественного мяса, приготовленный по вашему выбору.");
// document.body.appendChild(menuElement);