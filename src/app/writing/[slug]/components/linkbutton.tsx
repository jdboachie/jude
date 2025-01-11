'use client';

import * as React from 'react';
import styles from './styles.module.css'
import { Check, Link } from '@phosphor-icons/react';

export default function LinkButton ({
  link,
} : {
  link: string,
}) {

  const [copied, setCopied] = React.useState<boolean>(false);

  function handleClick() {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  return (
    <button
      onClick={handleClick}
      className={styles.linkbutton}
    >
      {copied ? <Check /> : <Link />}
    </button>
  )
}