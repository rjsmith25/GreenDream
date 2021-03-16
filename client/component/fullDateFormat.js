import React from "react";

function FullDateFormat(date_object) {
  const day_of_week = {
    0: "Sun",
    1: "Mon",
    2: "Tues",
    3: "Weds",
    4: "Thurs",
    5: "Fri",
    6: "Sat",
  };

  const Months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  let day = day_of_week[date_object.getDay()];
  let date = date_object.getDate();
  let year = date_object.getFullYear();
  let month = Months[date_object.getMonth()];

  return `${day}, ${month} ${date}, ${year}`;
}

export default FullDateFormat;
