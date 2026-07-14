"use client";

import { MotionConfig } from "framer-motion";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function AppExperience({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </MotionConfig>
  );
}
