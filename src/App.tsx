import React, { useEffect, useState } from "react";

import { TweetList } from "./components/TweetList";
import { Button } from "./components/Button";
import "./App.css";
import { TweetForm } from "./components/TweetForm";

export type Tweet = {
  id: number;
  text: string;
};

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([
    { id: 1, text: "Tweet 1" },
    { id: 2, text: "Tweet 2" },
    { id: 3, text: "Tweet 3" },
  ]);

  const [tweet, setTweet] = useState<string>("");

  function clearTweets() {
    setTweets([]);
  }

  function handleChange(value: string) {
    setTweet(value);
  }

  function handleSubmit() {
    const id = tweets.length + 1;
    setTweets([...tweets, { id, text: tweet }]);
    setTweet("");
  }

  /** Keep an eye on tweets */
  useEffect(() => console.log(tweets), [tweets]);

  return (
    <div>
      <TweetList items={tweets} />

      <TweetForm
        value={tweet}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <br />

      <Button style={styles.button} onClick={clearTweets}>
        Clear tweets
      </Button>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "rebeccapurple",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    color: "#fff",
  },
};

export default App;
