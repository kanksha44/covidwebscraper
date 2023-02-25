const request = require("request");
const cheerio = require("cheerio");
// const {chalk} = require("chalk");
// import {chalk} from 'chalk';
//feature - =>  request
// console.log("before");

request("https://www.worldometers.info/coronavirus/", cb);

// console.log("after");
function cb(error, response, html) {
  if (error) {
    console.error("error:", error); // Print the error if one occurred
  } else {
    handlehtml(html); // Print the HTML for the Google homepage.
  }
}
function handlehtml(html) {
  let selTool = cheerio.load(html);
  // console.log(selTool,"asedf");
  let contentArr = selTool("#maincounter-wrap span");
  // console.log(contentArr,"2nd console");
  for (let i = 0; i < contentArr.length; i++) {
    ``;
    let data = selTool(contentArr[i]).text();
    // console.log("data", data);
  }

  let total = selTool(contentArr[0]).text();
  let deaths = selTool(contentArr[1]).text();
  let recovered = selTool(contentArr[2]).text();
  console.log("Total cases:" + total);
  console.log("Deaths:" + deaths);
  console.log("Recovered:" + recovered);
}
