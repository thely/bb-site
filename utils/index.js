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

function formatDateSmall(d) {
  let date = new Date(d);
  // console.log(date);
  return moment(Number(date))
    .utcOffset("+04:00")
    .format("MM/DD/YY");
}

/* eslint-disable prettier/prettier */
// require("dotenv").config();

function buildMeta(args) {
  let d = "Becky Brown";
  let site = args.base;

  let retVal = {
    title: args.title,
    meta: [
      {
        hid: "og:title",
        name: "og:title",
        content: args.title || d,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: args.title || d,
      },
      {
        hid: "description",
        name: "description",
        content: args.description || "",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: args.description || "",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: args.description || "",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: site + args.url,
      },
      {
        hid: "og:type",
        name: "og:type",
        content: args.type || "website",
      },
    ],
  };

  if (args.image) {
    retVal.meta.push({
      hid: "twitter:image",
      name: "twitter:image",
      content: site + args.image.substr(1) || "",
    });
    retVal.meta.push({
      hid: "og:image",
      name: "og:image",
      content: site + args.image.substr(1) || "",
    });
  }

  if (args.type == "article") {
    retVal.meta.push({
      hid: "article:section",
      name: "article:section",
      content: args.section || "Posts",
    });
  }
  if (args.published) {
    retVal.meta.push({
      hid: "article:published_time",
      name: "article:published_time",
      content: args.published,
    });
  }

  return retVal;
}

export { sortByDate, formatPostDate, formatDateSmall, buildMeta };
