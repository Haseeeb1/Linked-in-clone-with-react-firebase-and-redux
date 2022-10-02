import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("House of dragons season 1", "Top-News-12000 Readers ")}
      {newsArticle("React.js Challenge", "Code-Challenges 9000 Readers ")}
      {newsArticle("Github Advanced Security", "Add-new-skills ")}
      {newsArticle("React: Design Patterns", " free for 24 hours ")}
      {newsArticle("React: Building Styles with CSS Modules", "16000 Readers ")}
    </div>
  );
}

export default Widgets;
