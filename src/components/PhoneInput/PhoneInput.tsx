"use client";
import { ReactEventHandler, useState } from "react";
import Image from "next/image";
import styles from "./phoneInput.module.css";
import clsx from "clsx";
import ArrowLottieAnimation from "./ArrowLottieAnimation";
const PhoneInput = ({ webhook_url }: { webhook_url: string }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  function handlePhoneInput(event: any) {
    event.preventDefault();
    setPhoneNumber(event.target.value);
    if (!validPhoneNumber) validatePhoneNumber(event.target.value);
  }
  function validatePhoneNumber(phoneNumber: string) {
    let cleanedPhoneNumber = phoneNumber
      .replaceAll(" ", "")
      .replaceAll("+", "")
      .replaceAll("-", "");
    if (!cleanedPhoneNumber.startsWith("34")) {
      cleanedPhoneNumber = "34" + cleanedPhoneNumber;
    }
    cleanedPhoneNumber = "+" + cleanedPhoneNumber;

    // console.log("phoneNumber", phoneNumber);

    if (cleanedPhoneNumber.length == 12) {
      setValidPhoneNumber(true);
      return true;
    } else {
      setValidPhoneNumber(false);
      return false;
    }
  }
  function handleSubmit() {
    if (validatePhoneNumber(phoneNumber)) {
      fetch(webhook_url, {
        method: "POST",
        body: JSON.stringify({
          phone: phoneNumber,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("response", data);
        })
        .catch((err) => {
          console.error("error: failed to submit phone number");
        });
    }
  }
  return (
    <div className="w-full px-4">
      <div className="bg-[#e7e7e7] max-w-2xl w-full h-14 mx-auto rounded-full overflow-hidden">
        <div className="flex h-full w-full">
          <div className="mx-5 inline-block h-full pt-3">
            <Image
              src="/form-hand.webp"
              alt="hello"
              height={42}
              width={42}
              className={styles.shake}
            ></Image>
          </div>
          <div className="w-full relative">
            <input
              className={clsx(
                "h-full w-full bg-transparent text-xl",
                styles.input
              )}
              type="number"
              value={phoneNumber}
              onChange={handlePhoneInput}
              // onInput={handlePhoneInput}
              placeholder="your phone number"
            ></input>
            {!validPhoneNumber && (
              <div className="absolute bottom-0 text-sm text-red-500 text-center w-full">
                Not a valid Spanish Phone Number
              </div>
            )}
          </div>
          <div
            className="w-48 h-full bg-[#cff128] flex items-center cursor-pointer"
            onClick={handleSubmit}
          >
            <div className="w-full text-xl text-center pl-3 text-black font-bold">
              Do It
            </div>
            <div className="w-24">
              <ArrowLottieAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
