import { useId } from "react";

type Props = {
  /** 0–1. Subtle by default; 0.18 feels like 35mm film. */
  opacity?: number;
  className?: string;
};

/**
 * Editorial film-grain overlay. Renders fractal noise via SVG turbulence,
 * scaled up and softened so it doesn't bloat memory the way a raster noise
 * image would. Tile it across whatever parent it's dropped into.
 */
export default function Grain({ opacity = 0.12, className = "" }: Props) {
  const id = useId();
  const filterId = `grain-${id}`;
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full mix-blend-soft-light ${className}`}
      style={{ opacity }}
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.6"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.85" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}
