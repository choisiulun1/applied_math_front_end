// const fetch = require("node-fetch");
//
// const API_KEY = "08iV2P73FdVU68MPAwB7EtpZ4D8O5kN9Cwbdf02H";
// const query = "";
//
// async function main() {
//     // Step 1: Search for food
//     const searchRes = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${API_KEY}`);
//     const searchData = await searchRes.json();
//
//     if (!searchData.foods || !searchData.foods.length) {
//         console.error("No results found.");
//         return;
//     }
//
//     const fdcId = searchData.foods[0].fdcId;
//     // console.log(`Found food: ${searchData.foods[0]} (fdcId: ${fdcId})`);
//
//     console.log(searchData.foods[0]);
// }
//
// main().catch(console.error);