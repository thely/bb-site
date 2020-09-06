const moment = require("moment");

function sortByDate(events) {
  for (let i = 0; i < events.length; i++) {
    events.sort(function(a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    return events;
  }
}

function formatPostDate(d) {
  let date = new Date(d);
  // console.log(date);
  return moment(Number(date))
    .utcOffset("+04:00")
    .format("MMMM D, YYYY");
}

export { sortByDate, formatPostDate };
