import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Misuradeco | En construcción',
  description: 'Estamos preparando un nuevo espacio para inspirarte. Muy pronto, cada detalle en su lugar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
