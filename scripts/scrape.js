const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function (cb) {
  // console.log("hello from scrape.js")
  // Make a request for a user with a given ID
  // Old URL https://www.espn.com/nba/story/_/id/26914752/2019-nba-free-agency-latest-buzz-news-reports
  axios.get('https://www.foxsports.com/nba/player-news').then(function(response){

  //function (err, res, body) {
    const $ = cheerio.load(response.data);

    const articles = [];

    $(".wisbb_newsStory").each(function (i, element) {
      // console.log($(element).children(".wisbb_storyContent").children(".wisbb_headline").children(".wisbb_content").text())

      const headline =$(element).children(".wisbb_storyContent").children(".wisbb_headline").children(".wisbb_content").text().trim();

      // const content = $(this).children(".wisbb_content").text().trim();

      // console.log("h", headline);
      // console.log("c", content);
      if (headline) {
        const headNeat = headline.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        // const contentNeat = content.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        const addData = {
          headline: headNeat,
          // con: contentNeat
        };
        // console.log(addData);
        articles.push(addData);
      }
      console.log(articles);
    });
    cb(articles);
  });
    // .then(function(response) {
    // handle success

    // console.log("scrape");




  // return articles;

  // $("p").each(function(i, element){
  //     const results = {}
  //     results.timestamp = $(element)
  //     .children("strong").text()

  //     results.summary = $(element)
  //     .text()
  //     console.log(results);
  // })

  // });
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });

};

// scrape()

module.exports = scrape;