"use client";

import { TECHNOLOGIES } from "@/constants/data";
import { useMemo } from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  const typewriterOptions = useMemo(
    () => ({
      strings: [...TECHNOLOGIES],
      autoStart: true,
      loop: true,
      delay: 80,
      deleteSpeed: 50,
    }),
    []
  );

  return <Typewriter options={typewriterOptions} />;
}
