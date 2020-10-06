import React from 'react';

export default function Layout({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
