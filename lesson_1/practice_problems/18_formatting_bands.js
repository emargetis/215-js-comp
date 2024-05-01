let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name.split(" ")
                  .map(word => word[0].toUpperCase() + word.slice(1))
                  .join(" ");
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

processBands(bands);

console.log(bands);
// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

/*
-Iterate through each band
  - set country to canada
  - capitalized bands first name
  - remove periods from name (use regex)
*/