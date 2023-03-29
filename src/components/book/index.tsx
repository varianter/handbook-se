import style from './book.module.css';

type BookProps = React.PropsWithChildren<{
  filename: string;
}>;
const Book = ({ children }: BookProps) => {
  const editUrl = `https://github.com/varianter/handbook-se/`;
  return (
    <section>
      <article className="handbook">{children}</article>

      <footer className={style.footer}>
        <p>
          Ser du ett fel eller något som upplevs som otydligt?{' '}
          <a href={editUrl}>
            Skicka ett meddelande eller föreslå en ändring! 🥰
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Book;

export function BookSummary({ children }: BookProps) {
  return <div className="handbook">{children}</div>;
}
