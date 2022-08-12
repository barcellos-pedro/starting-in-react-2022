import axios from "axios";
import { Tweet } from "../pages/Tweets";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const tweetService = {
  getTweets() {
    return apiClient.get<Tweet[]>("/tweets");
  },
  getTweet(id: number) {
    return apiClient.get(`/tweets/${id}`);
  },
  createTweet(tweet: Tweet) {
    return apiClient.post("tweets/", tweet);
  },
};
