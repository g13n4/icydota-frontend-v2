import type { PropsWithChildren } from "react";

export default function SelectorWrapper({
  label,
  children,
}: PropsWithChildren<{ label: string }>): React.ReactNode {
  return (
    <div className="grid grid-rows-2">
      <div>{label}</div>
      {children}
    </div>
  );
}