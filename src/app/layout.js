import "./globals.css";

export const metadata = {
  title: "Role",
  description: "Um site para entrar um role",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
