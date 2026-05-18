import Layout from '../general';
import Book from 'src/components/book';
import { LayoutProps } from '../signature';

export default function HandbookLayout({ children, ...props }: LayoutProps) {
  return (
    <Layout {...props}>
      <Book filename="">{children}</Book>
    </Layout>
  );
}
