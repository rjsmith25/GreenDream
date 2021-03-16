import React from "react";
import { renderToString } from "react-dom/server";
import HomeSearchComponent from "../../client/home/home-search";

async function Home(req, res, next) {
  try {
    const content = renderToString(<HomeSearchComponent />);
    res.render("Home/home.pug", { content });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export default Home;
