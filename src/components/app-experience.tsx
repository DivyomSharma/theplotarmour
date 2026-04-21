"use client";

import { MotionConfig } from "framer-motion";
import { CustomCursor } from "@/components/custom-cursor";
import { PageTransitionShell } from "@/components/page-transition-shell";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function AppExperience({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <CustomCursor />
        <PageTransitionShell>{children}</PageTransitionShell>
      </SmoothScrollProvider>
    </MotionConfig>
  );
}
