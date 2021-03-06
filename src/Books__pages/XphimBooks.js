import React from "react";
import "./XphimBooks.css";
import Biographies from "./BooksAssets/biographies.png";
import History from "./BooksAssets/history.png";
import Spiritual from "./BooksAssets/spiritual.png";
import Health from "./BooksAssets/health.png";
import Education from "./BooksAssets/education.png";
import { Link, NavLink } from "react-router-dom";
import Book__banner from "./BooksAssets/book-banner.jpg";
import Jesus from "../Jesus";

const XphimBooks = () => {
  return (
    <div className="books__container">
      <div className="books__header">
        <h1>Books on XPHIM</h1>
      </div>
      <div className="category__wrapper">
        <div className="books__category">
          <h2>Shop by Category:</h2>
          <div className="category__items">
            <div className="items">
              <img src={Biographies} alt="Biographies" />
              <p>Biographies</p>
            </div>
            <div className="items">
              <img src={History} alt="History" />
              <p>History</p>
            </div>
            <div className="items">
              <img src={Spiritual} alt="Spiritual" />
              <p>Spiritual</p>
            </div>
            <div className="items">
              <img src={Health} alt="Health" />
              <p>Health</p>
            </div>
            <div className="items">
              <img src={Education} alt="Edication" />
              <p>Education</p>
            </div>
          </div>
        </div>
      </div>
      <div className="books__lists__container">
        <div className="books__Links">
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimBooks"
          >
            <h4>Books</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/MusicBooks"
          >
            <h4>Music</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimMovies"
          >
            <h4>Movies</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimAnimations"
          >
            <h4>Animations</h4>
          </NavLink>
        </div>
        <div className="books__lists">
          <Link exact to="/JesusBook">
            <img
              className="book__bannerImg"
              src={Book__banner}
              alt="books banner"
            />
          </Link>
          <h2>Books you may have missed</h2>
          <div className="books__section">
            <Link exact to="/JesusBook">
              <Jesus
                title="Who is Jesus?"
                price={18.99}
                image="https://files.stripe.com/links/MDB8YWNjdF8xSHBrVExDd2RNOWI0elhmfGZsX3Rlc3RfUmRCZFpMZkV6MTcwVWVTWklxUkk3N1F200f9psmcxN"
              />
            </Link>
            <Link exact to="/Adamtree">
              <Jesus
                title="Ad'am the Tree of Life"
                price={"Free"}
                image="https://xphimedia.com/img/1.png"
              />
            </Link>
            <Link exact to="/AdamBook">
              <Jesus
                title="Who was Ad'am?"
                price={18.99}
                image="https://xphimedia.com/img/3.png"
              />
            </Link>
            <Link exact to="/Awaken">
              <Jesus
                title="Awaken"
                price={18.99}
                image="https://xphimedia.com/img/4.png"
              />
            </Link>
            <Link exact to="/ThewhitelieBook">
              <Jesus
                title="White Lie Black Truth"
                price={18.99}
                image="https://xphimedia.com/img/5.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XphimBooks;
