const stockList = [
  { name: "Sonos Roam Speaker", category: "electronics", price: 179.00, inventory: 4 },
  { name: "Adidas Ultraboost Shoes", category: "apparel", price: 190.00, inventory: 6 },
  { name: "Almonds", category: "groceries", price: 8.49, inventory: 15 },
  { name: "Method All-Purpose Cleaner", category: "household", price: 5.25, inventory: 20 },
  { name: "Sharpie Pen Set", category: "education", price: 11.99, inventory: 10 }
];

for (const item of stockList) {
  switch (item.category) {
    case "electronics":
      item.price *= 0.8; // 20% off
      break;
    case "apparel":
      item.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      item.price *= 0.9; // 10% off
      break;
    default:
      break; // No discount
  }
}

const shopperProfiles = ["student", "senior", "regular"];

for (let i = 0; i < 3; i++) {
  const shopperType = shopperProfiles[i];
  let purchaseTotal = 0;

  for (const item of stockList) {
    if (item.inventory > 0) {
      purchaseTotal += item.price;
      item.inventory -= 1;
    }
  }
  if (shopperType === "student") {
    purchaseTotal *= 0.95;
  } else if (shopperType === "senior") {
    purchaseTotal *= 0.93;
  }

  console.log(`Shopper ${i + 1} (${shopperType}) - Total after discounts: $${purchaseTotal.toFixed(2)}`);
}

console.log("\nProduct snapshot after discounts (Sonos Roam Speaker):");
const displayItem = stockList[0];
for (const attribute in displayItem) {
  console.log(`${attribute}: ${displayItem[attribute]}`);
}

console.log("\nUpdated Inventory Overview:");
for (const item of stockList) {
  const entryDetails = Object.entries(item);
  const summary = entryDetails.map(([key, value]) => `${key}: ${value}`).join(" | ");
  console.log(summary);
}