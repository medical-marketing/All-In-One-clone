"use client";
import { PrismicNextLink } from "@prismicio/next";
import CookieConsent, { Cookies } from "react-cookie-consent";
const CookieConsentComp = ({
  terms_and_conditions_link,
}: {
  terms_and_conditions_link: any;
}) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      buttonClasses="w-40"
      buttonWrapperClasses="mx-auto"
      cookieName="MedicalMarketing"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "12px", color: "#40A2E3" }}>
        <PrismicNextLink field={terms_and_conditions_link}>
          Terms and Conditions
        </PrismicNextLink>
      </span>
    </CookieConsent>
  );
};

export default CookieConsentComp;
