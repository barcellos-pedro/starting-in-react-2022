import { Link } from "react-router-dom";
import { Tweet } from "../pages/Tweets";

type TweetListProps = {
  items: Tweet[];
};

export function TweetList({ items }: TweetListProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginBottom: "1em",
      }}
    >
      {items.map((item) => (
        <Link to={`/tweets/${item.id}`} key={item.id}>
          {item.text}
        </Link>
      ))}
    </div>
  );
}
