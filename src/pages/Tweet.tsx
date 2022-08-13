import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tweetService } from "../services/TweetsService";
import { NotFound } from "./NotFound";
import { Tweet } from "./Tweets";

export function SingleTweet() {
  const params = useParams();
  const id = params?.tweetId;
  const notFound = <NotFound message="Tweet not found." />;

  if (!id) {
    return notFound;
  }

  const [tweet, setTweet] = useState<Tweet>({ id: 0, text: "" });
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getTweet(id: string | number) {
      try {
        let { data } = await tweetService.getTweet(+id);
        setTweet(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    getTweet(id);
  }, []);

  if (error) {
    return notFound;
  }

  return (
    <h1>
      #{id} - {tweet.text}
    </h1>
  );
}
