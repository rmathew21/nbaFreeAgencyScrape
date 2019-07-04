const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function() {
    // Make a request for a user with a given ID
axios.get('https://www.espn.com/nba/story/_/id/26914752/2019-nba-free-agency-latest-buzz-news-reports')
.then(function (response) {
  // handle success
  const $ = cheerio.load(response.data);

  $("p").each(function(i, element){
      const results = {}
      results.timestamp = $(element)
      .children("strong").text()
    
      results.summary = $(element)
      .text()
      console.log(results);
  })

})
.catch(function (error) {
  // handle error
  console.log(error);
})
// .finally(function () {
//   // always executed
// });
}

scrape()