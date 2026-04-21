"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(
    target.closest("a, button, [role='button'], [data-cursor='interactive']"),
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const coreX = useMotionValue(-100);
  const coreY = useMotionValue(-100);

  const smoothRingX = useSpring(ringX, { stiffness: 240, damping: 28, mass: 0.55 });
  const smoothRingY = useSpring(ringY, { stiffness: 240, damping: 28, mass: 0.55 });
  const smoothCoreX = useSpring(coreX, { stiffness: 460, damping: 34, mass: 0.38 });
  const smoothCoreY = useSpring(coreY, { stiffness: 460, damping: 34, mass: 0.38 });

  const mediaQuery = useMemo(
    () => (typeof window === "undefined" ? null : window.matchMedia("(hover: hover) and (pointer: fine)")),
    [],
  );

  useEffect(() => {
    if (!mediaQuery?.matches) {
      return undefined;
    }

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const handlePointerMove = (event: PointerEvent) => {
      ringX.set(event.clientX);
      ringY.set(event.clientY);
      coreX.set(event.clientX);
      coreY.set(event.clientY);
      setVisible(true);
    };

    const handlePointerOver = (event: PointerEvent) => {
      setHovered(isInteractiveTarget(event.target));
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setHovered(false);
      setPressed(false);
    };

    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const handleBlur = () => handlePointerLeave();

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("blur", handleBlur);
      document.body.classList.remove("has-custom-cursor");
      setEnabled(false);
    };
  }, [coreX, coreY, mediaQuery, ringX, ringY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="custom-cursor-ring"
        style={{ x: smoothRingX, y: smoothRingY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovered ? 84 : 28,
          height: hovered ? 44 : 28,
          scale: pressed ? 0.92 : hovered ? 1.06 : 1,
          borderRadius: hovered ? 22 : 999,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.7 }}
      />
      <motion.div
        className="custom-cursor-core"
        style={{ x: smoothCoreX, y: smoothCoreY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : hovered ? 0.72 : 1,
        }}
        transition={{ type: "spring", stiffness: 520, damping: 32, mass: 0.4 }}
      />
    </>
  );
}
