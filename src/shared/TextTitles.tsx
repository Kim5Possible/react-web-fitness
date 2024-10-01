type Props = {
  children: React.ReactNode;
};

const TextTitle = ({ children }: Props) => {
  return <h1 className="text-3xl font-bold uppercase">{children}</h1>;
};

export default TextTitle;
