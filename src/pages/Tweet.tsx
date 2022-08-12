import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { tweetService } from "../services/TweetsService";
import { NotFound } from "./NotFound";
import { Tweet } from "./Tweets";

export function SingleTweet() {
  const params = useParams();
  const id = params.tweetId;

  return <h1>Tweet with {id}</h1>;
}
