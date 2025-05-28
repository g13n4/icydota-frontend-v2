import type { NavigateOptions } from "react-router";
import { useNavigate } from "react-router";
import type {
  OptionalPageTypeType,
} from "src/components/context/types";
import generateLink from "../generateLink";
import generateState from "../generateState";
import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";

export default function useCustomUseNavigate() {
  const navigate = useNavigate();
  const prevData = usePageTypeContext();

  function customNavigate(changedData: OptionalPageTypeType, options?: NavigateOptions) {
    const newState = generateState({ data: { ...prevData, ...changedData }  });
    const navigateLink = generateLink({ data: newState });
    console.log(navigateLink)
    navigate(navigateLink, {replace: false, ...options});
  }

  return customNavigate;
}