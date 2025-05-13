import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardInterface {
  children?: React.ReactNode;
  className?: string;
}

const baseStyles = "m-4 p-2"
function CardBase({ children, className }: CardInterface) {
  return <Card className={cn(baseStyles, className)}>{children}</Card>;
}

function CardBottom({ children, className }: CardInterface) {
  return (
    <CardBase
      className={cn(
        "h-120 overflow-auto",
        className,
      )}
    >
      {children}
    </CardBase>
  );
}


function CardTop({ children, className }: CardInterface) {
  return <CardBase className={cn("flex-none h-20 shrink-0", className)}>{children}</CardBase>;
}

function PseudoCard({ children, className }: CardInterface) {
  return <div className={cn("h-20 grid grid-cols-4 m-4", className)}>{children}</div>;
}

export { CardBottom, CardTop, PseudoCard };
