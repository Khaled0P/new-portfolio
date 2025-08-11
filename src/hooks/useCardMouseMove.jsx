import { useCallback, useRef } from "react";

export function useCardMouseMove(cardRefs) {
  const rafId = useRef(null);

  const handleMouseMove = useCallback(
    (index) => (e) => {
      if (rafId.current) return;

      rafId.current = requestAnimationFrame(() => {
        const card = cardRefs.current[index];
        if (!card) {
          rafId.current = null;
          return;
        }

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(y, x) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty("--start", angle + 60);

        rafId.current = null;
      });
    },
    [cardRefs]
  );

  return handleMouseMove;
}
