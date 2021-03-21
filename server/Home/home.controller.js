import React from "react";
import { renderToString } from "react-dom/server";
import HomeSearchComponent from "../../client/home/home-search";
import HomeHeaderComponent from "../../client/home/home-header";

async function Home(req, res, next) {
  let url = req.protocol + "://" + req.get("host");
  try {
    const HomeSearchContent = renderToString(<HomeSearchComponent />);
    const HomeHeaderContent = renderToString(<HomeHeaderComponent />);
    res.render("Home/home.pug", { HomeSearchContent, HomeHeaderContent, url });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export default Home;
