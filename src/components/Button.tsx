type ButtonProps = {
  type?: "submit" | "reset" | "button";
  style?: object;
  onClick?: () => void;
  children: React.ReactNode;
};

export function Button({
  type = "button",
  style,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button type={type} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
