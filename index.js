const breedName = process.argv.slice(2);
const fetchBreedDescription = require('./breedFetcher');
console.log(`Searching for Breed: ${breedName}`);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});