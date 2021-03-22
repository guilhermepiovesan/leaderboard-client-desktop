import React from 'react';

type Props = {
  children?: JSX.Element;
};

export default function LeaderboardHeader(props: Props) {
  return (
    <header className="app-header">
      <h1>Leaderboard</h1>
      {props.children}
    </header>
  );
}
