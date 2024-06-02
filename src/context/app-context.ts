import { LinkByCitySlug } from "@/dummy/links";
import { createContext } from "react";
export const AppContext = createContext<{
  width?: number;
  modal?: any;
  openInvite?: any;
  setOpenInvite?: any;
  setOpenModalRe?: any;
  token?: string | null;
  typeModal?: string | null;
  setTypeModal?: any;
  slug?: keyof typeof LinkByCitySlug;
}>({ slug: "chelyabinsk" });
