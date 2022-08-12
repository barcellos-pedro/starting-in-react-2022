type NotFoundProps = {
  message: string;
};

export function NotFound({ message }: NotFoundProps) {
  return <h1>{message}</h1>;
}
