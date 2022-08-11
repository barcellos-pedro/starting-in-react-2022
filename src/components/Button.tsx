type ButtonProps = {
  style?: object;
  onClick?: () => void;
  children: React.ReactNode;
};

export function Button({ style, onClick, children }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
