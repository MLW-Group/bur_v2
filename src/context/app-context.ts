import { LinkByCitySlug } from "@/dummy/links";
import { createContext } from "react";
export const AppContext = createContext<{
  width?: number;
  modal?: any;
  openInvite?: any,
  setOpenInvite?: any;
  setOpenModalRe?: any;
  slug: keyof typeof LinkByCitySlug;
}>({ slug: "chelyabinsk" });
