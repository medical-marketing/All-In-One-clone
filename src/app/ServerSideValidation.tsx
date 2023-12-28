/**
 * Goal: to use server-side rendering of component for default values
 * in case the Props for the client side component are not present
 */

import { ClientSideStyledBody } from "@/app/ClientComponents";
type StyledBodyParams = {
  bold_text_color: string;
  children: any;
};
export const StyledBody = async ({
  bold_text_color,
  children,
}: StyledBodyParams) => {
  return bold_text_color ? (
    <ClientSideStyledBody $strongColor={bold_text_color}>
      {children}
    </ClientSideStyledBody>
  ) : (
    <div>{children}</div>
  );
};
