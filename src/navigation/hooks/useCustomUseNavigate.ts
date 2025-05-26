import type { NavigateOptions } from "react-router";
import { useNavigate } from "react-router";
import type {
  OptionalPageTypeType,
} from "src/components/context/types";
import generateLink from "../generateLink";
import generateState from "../generateState";

export default function useCustomUseNavigate() {
  const navigate = useNavigate();

  function customNavigate(changedData: OptionalPageTypeType, options?: NavigateOptions) {
    const data = generateState({ data: changedData });
    const navigateLink = generateLink({ data });
    navigate(navigateLink, options);
  }

  return customNavigate;
}