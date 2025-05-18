import type { PropsWithChildren } from "react";


export default function SelectorWrapper({
  title,
  children,
}: PropsWithChildren<{ title: string }>): React.ReactNode {
  return (
    <div className="grid grid-rows-2">
      <div>{title}</div>
      {children}
    </div>
  );
}