import "../../globals.css";

export const metadata = {
  title: "Home",
  description: "Um site para entrar um role",
};

export default function RootLayout({ children }) {
  return (
      <div>{children}</div>
  );
}
