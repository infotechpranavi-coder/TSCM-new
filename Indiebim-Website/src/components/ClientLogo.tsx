'use client';

import { useMemo, useState } from 'react';

type ClientLogoProps = {
  name: string;
  logo: string;
  domain?: string;
  className?: string;
};

export function ClientLogo({ name, logo, domain, className }: ClientLogoProps) {
  const sources = useMemo(() => {
    const list = [logo];
    const isLocal = logo.startsWith('/clients/logos/');
    if (domain && !isLocal) {
      list.push(`https://logo.clearbit.com/${domain}`);
      list.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
    }
    return list;
  }, [logo, domain]);

  const [sourceIndex, setSourceIndex] = useState(0);

  return (
    <img
      src={sources[sourceIndex]}
      alt={`${name} logo`}
      className={className}
      loading="lazy"
      onError={() => {
        setSourceIndex((current) => (current < sources.length - 1 ? current + 1 : current));
      }}
    />
  );
}
