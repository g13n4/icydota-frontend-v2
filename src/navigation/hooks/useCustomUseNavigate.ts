import type { NavigateOptions } from "react-router";
import { useNavigate } from "react-router";
import type {
  OptionalPageTypeType,
} from "src/components/context/types";
import generateLink from "../generateNavigationLink";
import generateState from "../generateState";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";

export default function useCustomUseNavigate() {
  const navigate = useNavigate();
  const prevData = usePageTypeContext();

  function customNavigate(changedData: OptionalPageTypeType, options?: NavigateOptions) {
    const newState = generateState({ data: { ...prevData, ...changedData }  });
    const navigateLink = generateLink({ data: newState });
    navigate(navigateLink, {replace: false, ...options});
  }

  return customNavigate;
}