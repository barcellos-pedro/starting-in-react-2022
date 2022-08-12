import { Button } from "./Button";
import { Input } from "./Input";

type TweetFormProps = {
  value: string;
  onSubmit: () => void;
  onInputChange: (value: any) => void;
};

export function TweetForm({ value, onSubmit, onInputChange }: TweetFormProps) {
  function handleInputChange(event: any) {
    onInputChange(event);
  }

  function handleSubmit(e: any) {
    onSubmit();
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tweet">Create e tweet</label>
      <br />
      <br />
      <Input
        id="tweet"
        placeholder="Digite um tweet"
        value={value}
        onInputChange={handleInputChange}
      />
      <Button type="submit" style={styles.button}>
        Tweet
      </Button>
    </form>
  );
}

const styles = {
  button: {
    marginLeft: "1em",
    backgroundColor: "#1a8cd8",
  },
};
