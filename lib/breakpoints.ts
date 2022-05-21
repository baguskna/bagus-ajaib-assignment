// breakpoints at mobile, tablet, and desktop sizes
const breakpoints = [600, 1024, 1400];

// Css breakpoint min width for emotion.
export const bp = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

// Css breakpoint max width for emotion.
export const bpOnly = breakpoints.map(
  (bp) => `@media (max-width: ${bp - 1}px)`
);
