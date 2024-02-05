"use client";
import { PrismicRichText } from "@prismicio/react";
import CookieConsent, { Cookies } from "react-cookie-consent";
const CookieConsentComp = ({
  cookie_consent_content,
}: {
  cookie_consent_content: any;
}) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      buttonClasses="w-40 _link"
      buttonWrapperClasses="mx-auto"
      cookieName="MedicalMarketing"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      {cookie_consent_content?.[0] ? (
        <PrismicRichText
          field={cookie_consent_content}
          components={{ paragraph: ({ children }) => <p>{children}</p> }}
        />
      ) : (
        "This website uses cookies to provide best user experience."
      )}
    </CookieConsent>
  );
};

export default CookieConsentComp;
