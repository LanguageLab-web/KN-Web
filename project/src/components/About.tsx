import React from 'react';
import Mission from './Mission';
import Team from './Team';
import Values from './Values';

export default function About() {
  return (
    <div className="pt-16">
      <Mission />
      <Team />
      <Values />
    </div>
  );
}