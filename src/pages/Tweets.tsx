import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Button } from "../components/Button";
import { TweetForm } from "../components/TweetForm";
import { TweetList } from "../components/TweetList";
import { useTweets } from "../hooks/UseTweets";

export type Tweet = {
  id: number;
  text: string;
};

export function Tweets() {
  const { createTweet, fetchData, tweets, error, clearTweets } = useTweets();
  const [post, setPost] = useState<string>("");
  const tweetsCount = tweets.length;

  function isPostEmpty() {
    return !post.trim();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPost(value);
  }

  async function handleSubmit() {
    if (isPostEmpty()) {
      setPost("");
      return;
    }

    try {
      await createTweet({ id: tweetsCount + 1, text: post });
      await fetchData(); // updates the list
      setPost(""); // clears the input
    } catch (err) {
      console.log(err);
    }
  }

  // if api fetch gets error
  if (error) {
    return (
      <div>
        <h1>Error to load tweets</h1>
        <button onClick={() => fetchData()}>Try again</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{`Showing ${tweetsCount} tweets`} </h1>
      <TweetList items={tweets} />

      <TweetForm
        value={post}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />

      <br />

      <Button style={styles.button} type="button" onClick={() => clearTweets()}>
        Clear tweets
      </Button>

      <Outlet />
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "rebeccapurple",
  },
};
