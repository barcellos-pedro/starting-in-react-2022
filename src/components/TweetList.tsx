import { Tweet } from "../App";
import { TweetItem } from "./TweetItem";

type TweetListProps = {
  items: Tweet[];
  children?: React.ReactNode;
};

export function TweetList({ items, children }: TweetListProps) {
  return (
    <>
      {children}

      <div>
        {items.map((item) => (
          <TweetItem text={item.text} key={item.id} />
        ))}
      </div>
    </>
  );
}
