import './globals.css';

export const metadata = {
  title: 'Misuradeco | En construcción',
  description: 'Estamos preparando un nuevo espacio para inspirarte. Muy pronto, cada detalle en su lugar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
