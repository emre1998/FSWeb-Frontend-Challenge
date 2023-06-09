import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";
import Pizza from "../contents/pagePhotos/teknolojik-yemekler.png";
import Watchlist from "../contents/pagePhotos/Watclist.png";
import StarWars from "../contents/pagePhotos/Star-wars.png";
import shopping from "../contents/pagePhotos/shopping.png";
import TaskTracking from  "../contents/pagePhotos/Task-trackinglist.png"
import friends from "../contents/pagePhotos/friends.png";

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="projectsContainer">
      <div className="cizgi"></div>
      <div className="projectsText">
        <h1>{t("projectsTitle")}</h1>
      </div>
      <div className="projectItems">
        <Cards
          darkMode={darkMode}
          imgSrc={Pizza}
          title={t("PizzaTitle")}
          text={t("PizzaText")}
          githubLink="https://github.com/emre1998/fsweb-s7-challenge-pizza"
          siteLink="https://ordering-a-pizza-app.netlify.app"
          tags={["#React", "#Router", "#Form-Hook", "#Cypress"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={Watchlist}
          title={t("FilmsTitle")}
          text={t("FilmsText")}
          githubLink="https://github.com/emre1998/fsweb-s10g3-redux-watchlist/tree/main"
          siteLink="https://watchlistplus.netlify.app"
          tags={["#React", "#Router", "#Toastify", "#Redux", "#TailwindCss"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={StarWars}
          title={t("StarTitle")}
          text={t("StarText")}
          githubLink="https://github.com/emre1998/FSWeb-S6-Challenge"
          siteLink="https://may4th-wars-api.netlify.app"
          tags={["#React", "#Axios",]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={shopping}
          title={t("ShoppingTitle")}
          text={t("ShoppingText")}
          githubLink="https://github.com/emre1998/fsweb-s11g1-shopping-cart"
          siteLink="https://shopping-book.netlify.app"
          tags={["#React", "#Router", "#Axios", "#UseContext"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={TaskTracking}
          title={t("TaskTitle")}
          text={t("TaskText")}
          githubLink="https://github.com/emre1998/fsweb-s9g2-task-yonetimi-2"
          siteLink="https://tasktrackers.netlify.app"
          tags={["#React", "#Hook-form", "#Javascript-date-fns", "#Toastify"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={friends}
          title={t("FriendsTitle")}
          text={t("FriendsText")}
          githubLink="https://github.com/emre1998/fsweb-s11g2-client-auth-friends"
          siteLink="https://calm-madeleine-7cc1d9.netlify.app/login"
          tags={["#React", "#Router", "#Axios", "#useContext"]}
        />
      </div>
    </div>
  );
};

export default Projects;
