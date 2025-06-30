import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import type { NavigateOptions } from "react-router";
import { useNavigate } from "react-router";
import type { OptionalPageTypeType } from "src/components/context/types";
import generateLink from "../generateNavigationLink";
import generateState from "../generateState";

export default function useCustomUseNavigate(newTab = false ) {
  const navigate = useNavigate();
  const prevData = usePageTypeContext();

  function customNavigate(
    changedData: OptionalPageTypeType,
    options?: NavigateOptions,
  ) {
    const newState = generateState({ data: { ...prevData, ...changedData } });
    const navigateLink = generateLink({ data: newState });
    if (newTab) {
//      window.open(navigateLink, "_blank", "rel=noopener noreferrer");
      window.open(navigateLink, "_blank"  );
    } else {
      navigate(navigateLink, { replace: false, ...options });
    }
  }

  return customNavigate;
}