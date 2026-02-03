"use client";

import Typewriter from "typewriter-effect";

const TECHNOLOGIES = [
  "JavaScript",
  "Python",
  "C#",
  "React.js",
  "Angular",
  "Vue.js",
  "Next.js",
  "Nuxt.js",
  "TypeScript",
  "jQuery",
  "Styled Components",
  "Tailwind CSS",
  "Bootstrap",
  "Express",
  "Socket.io",
  "Nest.js",
  "Django",
  "Flask",
  "Entity Framework",
  "PostgreSQL",
  "Figma",
  "Jest",
  "Selenium",
  "Docker",
];

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: TECHNOLOGIES,
        autoStart: true,
        loop: true,
        delay: 80,
        deleteSpeed: 50,
      }}
    />
  );
}
