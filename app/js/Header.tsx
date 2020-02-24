import React from 'react';
import { RouteComponentProps } from '@reach/router';

type HeaderProps = RouteComponentProps & {
  app?: React.ReactNode;
};

export function Header({ app }: HeaderProps) {
  return (
    <header>
      <h1>{app}</h1>
    </header>
  );
}