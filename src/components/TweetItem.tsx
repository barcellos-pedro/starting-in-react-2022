type TweetItemProps = {
  text: string;
};

export function TweetItem({ text }: TweetItemProps) {
  return <p>{text}</p>;
}
