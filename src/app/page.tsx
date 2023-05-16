'use client'
import { createContext } from 'react';

import Unicorn from "./popover";
import { FiArrowUpRight } from "react-icons/fi";
import "./globals.css";



export default function Home() {
  return (
    <div className="App">
    <div className="header">
      <h2>@pepperthedev</h2>
      <Unicorn />
    </div>
    <div className="pin_container">
      <div className="hello card card_small">
        <p className="hoverTxt">
          <a
            href="https://thoracic-roll-6f6.notion.site/pepperthewebdev-ffce0b319db24ea79df172c1ef0d6de4"
            target="_blank"
          >
            view in notion
          </a>
          <FiArrowUpRight />
        </p>
      </div>
      <div className="gallery card card_medium">
        <p className="hoverTxt">
        coming soon
          <FiArrowUpRight />
        </p>
      </div>
      <div className=" summary card card_large">
        <p>
          As a Texas-based freelance developer, I excel in React and
          prioritize the seamless integration of design and user experience.
        </p>
        <p className="linkTo">
          <a href="mailto:pepperthewebdev@gmail.com" target="_blank">
            contact me
          </a>{" "}
          <FiArrowUpRight />
        </p>
      </div>
      <div className="codepen card card_small">
        <p className="hoverTxt">
          <a href="https://codepen.io/pepperthewebdev" target="_blank"> view in Codepen</a>
          <FiArrowUpRight />
        </p>
      </div>
      <div className=" card card_medium">
        <p className="hoverTxt">
        coming soon
          <FiArrowUpRight />
        </p>
      </div>
      <div className="process card card_large">
        <p>
          <i>Creating platforms that help people, share their passions</i>
        </p>
        <p>
          From big businesses to small brands, apps to website: gaining an
          audience is providing a smooth user experience, clean code, and
          creative design. Across all platforms, I help design an experience
          people love.
        </p>
        <p className="linkTo">
          <a
            href="https://thoracic-roll-6f6.notion.site/Why-I-think-building-a-digital-presence-is-holistic-b22835e8a70c4961ad040c41d51306c8"
            target="_blank"
          >
            the whole process{" "}
          </a>{" "}
          <FiArrowUpRight />
        </p>
      </div>

      <div className=" music card card_small">
        <p className="hoverTxt">
          playlists soon...
          <FiArrowUpRight />
        </p>
      </div>
      <div className="afs card card_medium">
        <p className="hoverTxt">
          <a href="https://afreshsip.com/" target="_blank">view project</a>
          <FiArrowUpRight />
        </p>
      </div>
      <div className=" github card card_small">
        <p className="hoverTxt">
          <a href="https://github.com/pepperthewebdev" target="_blank">
            view in github{" "}
          </a>
          <FiArrowUpRight />
        </p>
      </div>
      <div className=" contact card card_large">
        <p className="linkTo">
          <a href="mailto:pepperthewebdev@gmail.com">email</a>{" "}
          <FiArrowUpRight />
        </p>
        <p className="linkTo">
          <a href="https://www.upwork.com/freelancers/~015825eddca03ebfd2?viewMode=1">upwork <FiArrowUpRight /></a>
        </p>
        <p className="linkTo">
         <a href="https://www.fiverr.com/pepperthedev?public_mode=true" target="_blank">fivver
          <FiArrowUpRight /></a>
        </p>
        <p className="linkTo">
         <a href="https://codepen.io/pepperthewebdev" target="_blank"> codepen
          <FiArrowUpRight /></a>
        </p>
      </div>

      <div className=" card card_medium">
        <p className="hoverTxt">
          coming soon
          <FiArrowUpRight />
        </p>
      </div>
      <div className=" linkedIn card card_small">
        <p className="hoverTxt">
          view in LinkedIn
          <FiArrowUpRight />
        </p>
      </div>
      <div className=" card card_medium">
        <p className="hoverTxt">
        coming soon          <FiArrowUpRight />
        </p>
      </div>
    </div>
  </div>

  )
}
