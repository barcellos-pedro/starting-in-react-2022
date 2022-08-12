import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Button } from "../components/Button";
import { TweetForm } from "../components/TweetForm";
import { TweetList } from "../components/TweetList";
import { tweetService } from "../services/TweetsService";

export type Tweet = {
  id: number;
  text: string;
};

export function Tweets() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [post, setPost] = useState<string>("");

  let tweetsCount = tweets.length;

  async function fetchData() {
    console.log("fetch");
    try {
      let { data } = await tweetService.getTweets();
      setTweets(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [tweetsCount]);

  function handleTweetChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.trim();
    setPost(value);
  }

  async function handleSubmit() {
    try {
      const newTweet = { id: tweetsCount + 1, text: post };
      await tweetService.createTweet(newTweet);
      setTweets([...tweets, newTweet]);
      setPost("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>{`Showing ${tweetsCount} tweets`} </h1>
      <TweetList items={tweets} />

      <TweetForm
        value={post}
        onSubmit={handleSubmit}
        onInputChange={handleTweetChange}
      />

      <br />

      <Button style={styles.button} type="button" onClick={() => setTweets([])}>
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
