var faker = require("faker");
console.log("===================================");
console.log("        Welcome to My Shop");
console.log("===================================");

for (var i = 0; i < 10; i++) {
  var prdName = faker.commerce.productName();
  var prdPrice = faker.commerce.price();
  console.log(prdName + "  -  $" + prdPrice);

}
// This is a comment
