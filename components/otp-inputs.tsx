"use client";

import { useEffect, useRef } from "react";

const DIGITS = ["1", "2", "3", "4", "5", "6"];

export function OtpInputs() {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const fields = inputs.current.filter((field): field is HTMLInputElement => field !== null);

    const cleanups = fields.map((input, index) => {
      const onInput = () => {
        if (input.value.length >= 1 && index < fields.length - 1) {
          fields[index + 1].focus();
          fields[index + 1].select();
        }
      };
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Backspace" && !input.value && index > 0) {
          fields[index - 1].focus();
        }
      };
      input.addEventListener("input", onInput);
      input.addEventListener("keydown", onKeyDown);
      return () => {
        input.removeEventListener("input", onInput);
        input.removeEventListener("keydown", onKeyDown);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="grid grid-cols-6 gap-2.5 sm:gap-3 mb-3.5">
      {DIGITS.map((digit, index) => (
        <input
          key={index}
          ref={(node) => {
            inputs.current[index] = node;
          }}
          className="w-full aspect-[1/1.1] text-center text-xl lg:text-2xl font-medium text-[#111] bg-white border border-[#e2e5e1] rounded-xl focus:border-black focus:ring-1 focus:ring-black outline-none transition-all shadow-sm"
          inputMode="numeric"
          maxLength={1}
          type="text"
          defaultValue={digit}
          aria-label={`Dígito ${index + 1}`}
        />
      ))}
    </div>
  );
}
