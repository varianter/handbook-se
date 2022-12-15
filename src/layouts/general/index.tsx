import favicon from '@variant/profile/lib/logo/favicon.png';
import Head from 'next/head';
import PageHero from 'src/components/page-hero';
import { and } from 'src/utils/css';
import { LayoutProps } from '../signature';
import style from './layout.module.css';

const title = 'Variant Handbok';

export default function GeneralLayout({
  frontmatter,
  toc,
  noSidebar = false,
  children,
}: LayoutProps) {
  const subHeadings = toc[0]?.children.map((c) => c.value) ?? [];
  const classes = and(style.main, !noSidebar ? style.main__sidebar : undefined);

  return (
    <div className={classes}>
      <Head>
        <title>{frontmatter?.title ?? title}</title>
        <link rel="icon" href={favicon} />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta property="og:title" content={frontmatter?.title ?? title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://handbook.variant.no/" />
        <meta
          property="og:image"
          content="https://www.variant.no/og-header-min.png"
        />
      </Head>

      <PageHero />

      {/* <nav className={and(style.nav, style.nav__active)}>
        <section className={style.nav__inner}>
          {subHeadings.length > 0 ? (
            <>
              <p>Innhold</p>
              <ul>
                {subHeadings.map((heading) => {
                  return (
                    <li key={heading} className={style.nav__inner__link}>
                      <a href={`#${slugify(heading, { lower: false })}`}>
                        {heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : null}
        </section>
      </nav> */}
      <section className={style.content}>{children}</section>

      <footer className={style.footer}>
        <div className={style.footer__inner}>
          <ul className={style.footer__social}>
            <li>
              <a
                href="https://blog.variant.no"
                title="Variant Blogg"
                rel="external"
              >
                <img
                  src={require('./logos/medium.svg')}
                  alt="Variant på Medium.com"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/variant_as"
                title="Variant på Twitter"
                rel="external"
              >
                <img
                  src={require('./logos/twitter.svg')}
                  alt="Variant på Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/varianter"
                title="Variant på Github"
                rel="external"
              >
                <img
                  src={require('./logos/github.svg')}
                  alt="Variant på Github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/variant_as"
                title="Variant på Instagram"
                rel="external"
              >
                <img
                  src={require('./logos/instagram.svg')}
                  alt="Variant på Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://fb.me/varianter"
                title="Variant på Facebook"
                rel="external"
              >
                <img
                  src={require('./logos/facebook.svg')}
                  alt="Variant på Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/variant-as/"
                title="Variant på LinkedIn"
                rel="external"
              >
                <img
                  src={require('./logos/linkedin.svg')}
                  alt="Variant på LinkedIn"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
