import type { OptionalPageTypeType } from "@/components/context/types";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import generateLink from "./generateLink";
import generateState from "./generateState";

export default function CustomLink({
  changedData,
  children,
}: PropsWithChildren<{ changedData: OptionalPageTypeType }>) {
  const data = generateState({ data: changedData });
  const navigateLink = generateLink({ data });

  return <Link to={navigateLink}>{children}</Link>;
}