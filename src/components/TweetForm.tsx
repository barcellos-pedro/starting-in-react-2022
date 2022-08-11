type TweetFormProps = {
  value: string;
  onChange: (value: any) => void;
  onSubmit: () => void;
};

export function TweetForm({ value, onChange, onSubmit }: TweetFormProps) {
  function handleChange(e: any) {
    onChange(e.target.value);
    e.preventDefault();
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tweet">Create e tweet</label>
      <br />
      <br />
      <input
        id="tweet"
        type="text"
        placeholder="Tweet something"
        value={value}
        onChange={handleChange}
      />
      <button typeof="button" style={{ marginLeft: "1em" }}>
        Tweet
      </button>
    </form>
  );
}
