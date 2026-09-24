import './globals.css';

export const metadata = {
  title: 'Misuradeco',
  description: 'Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
