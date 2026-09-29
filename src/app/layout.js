import { Montserrat } from 'next/font/google';
import { Provider } from '../components/ui/provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Misura Deco | En construcción',
  description: 'Estamos preparando un nuevo espacio para inspirarte. Muy pronto, cada detalle en su lugar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
