import type { MDXComponents } from 'mdx/types';
import React from 'react';
import slugify from 'slugify';
import style from 'src/layouts/handbook/handbook.module.css';

function getNodeText(node: React.ReactNode): string {
  if (typeof node == 'string') return node;
  if (typeof node == 'number') return String(node);
  if (typeof node == 'boolean') return '';
  if (typeof node == 'bigint') return String(node);
  if (node == null) return '';
  if (Array.isArray(node)) return node.map(getNodeText).join('');
  if (React.isValidElement(node)) {
    return getNodeText((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}

function createLinkable(el: 'h2' | 'h3' | 'h4') {
  return ({ children, ...props }: React.JSX.IntrinsicElements[typeof el]) => {
    const textContent = getNodeText(children);
    const slug = slugify(textContent, { lower: false });
    const childList = React.Children.toArray(children);
    return React.createElement(
      el,
      { ...props, id: slug, key: slug },
      childList.concat(
        <a className={style.anchor} key="link" href={`#${slug}`}></a>,
      ),
    );
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: createLinkable('h2'),
    h3: createLinkable('h3'),
    h4: createLinkable('h4'),
    ...components,
  };
}
