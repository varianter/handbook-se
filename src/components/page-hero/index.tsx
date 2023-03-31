import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import style from './page-hero.module.css';

export type PageHeroProps = PropsWithChildren<{}>;
export default function PageHero({}: PageHeroProps) {
  return (
    <header className={style.header}>
      <Link href="https://www.variant.se" className={style.header__logo}>
        <Image src="/variant.svg" alt="Varian" width={301} height={75} />
      </Link>

      <ul className={style.header__tag}>
        <li>Generös</li>
        <li>Transparent</li>
        <li>Glädje att lära</li>
      </ul>
    </header>
  );
}
