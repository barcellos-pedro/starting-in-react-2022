import { useEffect, useState } from "react";

import { Tweet } from "../pages/Tweets";
import { tweetService } from "../services/TweetsService";

export function useTweets(intialValue: Tweet[] = []) {
  const [tweets, setTweets] = useState<Tweet[]>(intialValue);
  const [error, setError] = useState<boolean>(false);

  function clearTweets() {
    setTweets([]);
  }

  async function fetchData() {
    try {
      setError(false);
      let { data } = await tweetService.getTweets();
      setTweets(data);
    } catch (err) {
      setError(true);
    }
  }

  async function createTweet(newTweet: Tweet) {
    try {
      setError(false);
      await tweetService.createTweet(newTweet);
    } catch (err) {
      setError(true);
    }
  }

  // component lifecycle aware
  useEffect(() => {
    fetchData();
  }, []); // [] to only run on mouting, not on update

  return { createTweet, fetchData, clearTweets, tweets, error };
}
