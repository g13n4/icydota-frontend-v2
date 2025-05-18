import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardInterface {
  children?: React.ReactNode;
  className?: string;
}

function CardBase({ children, className }: CardInterface) {
  return <Card className={cn("", className)}>{children}</Card>;
}

function CardBottom({ children, className }: CardInterface) {
  return (
    <CardBase className={cn("h-120 overflow-auto", className)}>
      {children}
    </CardBase>
  );
}

function CardTop({ children, className }: CardInterface) {
  return (
    <CardBase className={cn("flex-none h-26 shrink-0", className)}>
      {children}
    </CardBase>
  );
}

interface CardSelectorInterface {
  header?: string;
  children?: React.ReactNode;
  className?: string;
}

function SelectorCard({ header, children, className }: CardSelectorInterface) {
  return (
    <Card className={cn("flex flex-col", className)}>
      {header && (
        <CardHeader className="text-justify">
          <CardTitle>{header}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export { CardBottom, CardTop, SelectorCard };
