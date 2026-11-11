"use client";

import { useState } from "react";

const PRICES = { Email: 6, WhatsApp: 10, SMS: 15 } as const;
type PaidChannel = keyof typeof PRICES;
type ChannelChoice = PaidChannel | "todos";

const MIN = 1_000;
const MAX = 200_000;
const STEP = 500;

function kz(value: number) {
  return `${value.toLocaleString("pt-PT")} Kz`;
}

export function WalletSimulator() {
  const [amount, setAmount] = useState(10_000);
  const [channel, setChannel] = useState<ChannelChoice>("todos");
  const shown = channel === "todos" ? (Object.keys(PRICES) as PaidChannel[]) : [channel];

  return (
    <div className="bg-white border border-[#e7e8e1] rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mb-2">Simulador</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Quanto rende este carregamento?</h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xl leading-relaxed">
            Arrasta o seletor. O valor em kwanzas e o número de envios atualizam ao mesmo tempo.
          </p>
        </div>
        <div className="text-left lg:text-right">
          <div className="text-[11px] text-gray-400">Carregamento</div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{kz(amount)}</div>
        </div>
      </div>

      <label className="block text-xs font-semibold text-gray-700 mb-3" htmlFor="wallet-amount">
        Valor do carregamento
      </label>
      <input
        id="wallet-amount"
        className="w-full accent-[#111315] cursor-pointer"
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <div className="flex justify-between text-[11px] text-gray-400 mt-2 mb-6">
        <span>{kz(MIN)}</span>
        <span>{kz(MAX)}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {(["todos", "Email", "WhatsApp", "SMS"] as const).map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${channel === option ? "bg-[#111315] text-white border-[#111315]" : "bg-white text-gray-700 border-[#e7e8e1] hover:bg-gray-50"}`}
            type="button"
            onClick={() => setChannel(option)}
          >
            {option === "todos" ? "Comparar os três" : option}
          </button>
        ))}
      </div>

      <div className={`grid gap-3 ${shown.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"}`}>
        {shown.map((name) => {
          const sends = Math.floor(amount / PRICES[name]);
          return (
            <div key={name} className="rounded-2xl bg-[#f7f8f4] border border-[#e7e8e1] p-4">
              <div className="text-xs font-semibold text-gray-500">{name}</div>
              <div className="text-2xl font-extrabold tracking-tight mt-1">{sends.toLocaleString("pt-PT")}</div>
              <div className="text-[11px] text-gray-500 mt-1">envios neste carregamento</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
