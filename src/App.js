import React, { useState } from "react";
import "./App.css";

import {  faMedium,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


var bgColor = "Black";
var textColor = "white";
// var message = "none";

var emojiDictionary = {
  "😊": "Smiling",
  "😃": "Happy",
  "😂": "Laughing",
  "❤️": "Heart",
  "🤗": "Hug",
  "😳": "Surprise",
  "😑": "Annoyance",
  "😔": "Sad",
  "😡": "Angry",
  "🙃": "Sarcasm",
  "😐": "Neutral",
  "😋": "Savouring",
  "😎":"Cool",
  "😍": "Smiling face with heart eyes.",
  "😉": "winking face.",
  "😘":"face blowing a kiss."
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "uhh,uhh Don't know this one.";
      setMeaning(meaning);
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  // <span style={{ color: textColor }}> Emoji </span> translator..!
  return (
    <div className="main">
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>
        <span style={{color:textColor }}>Welcome to
        the Emoji translator!!</span>
      </h1>
      <br />

      <input
        onChange={emojiInputHandler}
        placeholder="Let's Search."
      />
      <h2> {meaning}</h2>

      <h2 style={{ color: "gray" }}>Emojis we know</h2>
      {emojisweknow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              padding: "2px"
            }}
            keys={emoji}
          >
            {emoji}
          </span>
        );
      })}

      
    </div>
    <footer class="main-footer">
    <nav>
        <ul class="main-footer__links">
            <li class="main-footer__link">
            <FontAwesomeIcon icon={faLinkedin} />    <a href="https://www.linkedin.com/in/ravi-kumar-5ab056143/"> Linkedin</a>
            </li>
            <li class="main-footer__link">
              <FontAwesomeIcon icon={faGithub} />  <a href="https://github.com/Raviikumar001">Github</a>
            </li>
            <li class="main-footer__link">
            <FontAwesomeIcon icon={faMedium} /> <a href="https://medium.com/@kumarraviabhi007">Medium</a>
          </li>
        </ul>
    </nav>
</footer>
    </div>
  );
}
