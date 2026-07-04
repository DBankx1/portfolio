import { Fragment } from "react";

/**
 * Renders a string with lightweight highlight markers:
 *   **text** → .text-galaxy (cyan/violet/pink shimmer)
 *   __text__ → .text-solar (warm gold/rose shimmer)
 */
export function GalaxyText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="text-galaxy">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("__") && part.endsWith("__")) {
          return (
            <span key={i} className="text-solar">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
