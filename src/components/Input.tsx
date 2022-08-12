type InputProps = {
  value: string;
  placeholder?: string;
  id?: string;
  onInputChange: (event: any) => void;
};
export function Input({ value, placeholder, id, onInputChange }: InputProps) {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
}
