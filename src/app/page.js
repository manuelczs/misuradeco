import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="coming-soon">
      <Image
        className="wallpaper"
        src="/workshop.png"
        alt="Artesanos trabajando en la renovación de un interior"
        fill
        priority
        sizes="100vw"
      />
      <div className="shade" aria-hidden="true" />
      <header className="brand">misura<span>deco</span><span className="brand-dot">.</span></header>
      <section className="message" aria-labelledby="page-title">
        <p className="eyebrow"><span aria-hidden="true" /> Estamos trabajando</p>
        <h1 id="page-title">En construcción<span className="title-dot">.</span></h1>
        <p className="description">Estamos preparando un nuevo espacio para inspirarte.</p>
        <p className="return-note">Muy pronto, cada detalle en su lugar.</p>
        <div className="signature" aria-hidden="true" />
      </section>
      <footer><span>Misuradeco</span><span>Gracias por acompañarnos.</span></footer>
    </main>
  );
}
