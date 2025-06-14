const needle = require("needle");
const args = process.argv.slice(2);

console.log(`Searching for Breed: ${args}`);

const breedFetcher = function(breed) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log("Error in breedFetcher");
      console.error(error);
    } else if (body.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(body[0].description);
    }
  });
};

breedFetcher(args);