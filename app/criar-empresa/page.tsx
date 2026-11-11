import type { Metadata } from "next";
import Link from "next/link";
import { BoundForm } from "@/components/live/actions";

export const metadata: Metadata = {
  title: "OZOU — Criar empresa",
};

function Chevron() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function CriarEmpresaPage() {
  return (
    <div className="min-h-screen bg-[#f7f9f6] text-[#1c1e21] flex flex-col justify-between p-8 sm:p-12 lg:px-16 lg:py-10">
      <header className="w-full flex items-center justify-between">
        <Link href="/" className="text-[26px] font-extrabold tracking-tight text-[#111315]">
          OZOU
        </Link>

        <nav aria-label="Passos de configuração" className="hidden md:flex items-center space-x-6 text-[13px] font-medium">
          <div className="flex items-center bg-[#f0f4ea] pl-1.5 pr-4 py-1.5 rounded-full space-x-2.5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1c1e21] text-white text-[12px] font-semibold">
              1
            </span>
            <span className="text-[#1c1e21] font-medium">A sua empresa</span>
          </div>
          <Link href="/ligar-canais" className="flex items-center space-x-2.5 text-[#5e6658] pl-1 pr-3 py-1">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e3e8de] text-[#4a5245] text-[12px] font-medium">
              2
            </span>
            <span className="font-normal text-[#50574b]">Os seus canais</span>
          </Link>
          <Link href="/convidar-equipa" className="flex items-center space-x-2.5 text-[#5e6658] pl-1 pr-3 py-1">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e3e8de] text-[#4a5245] text-[12px] font-medium">
              3
            </span>
            <span className="font-normal text-[#50574b]">A sua equipa</span>
          </Link>
        </nav>

        <div className="text-[13px] text-[#6d7568] font-normal tracking-wide">Configuração inicial</div>
      </header>

      <div className="md:hidden flex items-center justify-center space-x-3 my-6 text-[12px]">
        <div className="flex items-center bg-[#f0f4ea] px-3 py-1.5 rounded-full space-x-2">
          <span className="w-5 h-5 flex items-center justify-center bg-[#1c1e21] text-white rounded-full text-[10px] font-semibold">
            1
          </span>
          <span>Empresa</span>
        </div>
        <Link href="/ligar-canais" className="flex items-center space-x-1.5 text-[#6c7467]">
          <span className="w-5 h-5 flex items-center justify-center bg-[#e2e7dc] rounded-full text-[10px]">2</span>
          <span>Canais</span>
        </Link>
        <Link href="/convidar-equipa" className="flex items-center space-x-1.5 text-[#6c7467]">
          <span className="w-5 h-5 flex items-center justify-center bg-[#e2e7dc] rounded-full text-[10px]">3</span>
          <span>Equipa</span>
        </Link>
      </div>

      <main className="w-full flex-grow flex items-center justify-center py-8">
        <section className="w-full max-w-[780px] bg-white rounded-3xl border border-[#ebeee7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-8 sm:p-12 lg:p-14">
          <div className="mb-9">
            <h1 className="text-3xl sm:text-[34px] font-bold text-[#141618] tracking-tight leading-snug">
              Vamos dar casa ao seu negócio.
            </h1>
            <p className="text-[#646b5e] text-[14px] mt-2 font-normal">
              Crie a empresa que vai reunir a equipa, os contactos e os canais.
            </p>
          </div>

          <BoundForm intent="create-company" className="space-y-6">
            <div>
              <label className="block text-[13px] font-medium text-[#1c1e21] mb-2" htmlFor="create-company-name">
                Nome da empresa *
              </label>
              <input
                className="w-full h-[46px] px-4 rounded-xl border border-[#e1e5de] bg-white text-[14px] text-[#1c1e21] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1c1e21] focus:border-[#1c1e21] transition-colors"
                id="create-company-name"
                name="company-name"
                required
                type="text"
                defaultValue="Studio Workspace"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-medium text-[#1c1e21] mb-2" htmlFor="tax-id">
                  NIF / Identificação fiscal
                </label>
                <input
                  className="w-full h-[46px] px-4 rounded-xl border border-[#e1e5de] bg-white text-[14px] text-[#1c1e21] focus:outline-none focus:ring-1 focus:ring-[#1c1e21] focus:border-[#1c1e21] transition-colors"
                  id="tax-id"
                  name="tax-id"
                  type="text"
                  defaultValue="509 123 456"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#1c1e21] mb-2" htmlFor="industry-sector">
                  Setor de atividade
                </label>
                <div className="relative">
                  <select
                    className="w-full h-[46px] pl-4 pr-10 rounded-xl border border-[#e1e5de] text-[14px] text-[#1c1e21] appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-[#1c1e21] focus:border-[#1c1e21] transition-colors cursor-pointer"
                    id="industry-sector"
                    name="industry-sector"
                    defaultValue="servicos-profissionais"
                  >
                    <option value="servicos-profissionais">Serviços profissionais</option>
                    <option value="tecnologia">Tecnologia & Software</option>
                    <option value="comercio">Comércio a Retalho</option>
                    <option value="saude">Saúde e Bem-estar</option>
                    <option value="outro">Outro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5e6658]">
                    <Chevron />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-medium text-[#1c1e21] mb-2" htmlFor="create-country">
                  País
                </label>
                <div className="relative">
                  <select
                    className="w-full h-[46px] pl-4 pr-10 rounded-xl border border-[#e1e5de] text-[14px] text-[#1c1e21] appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-[#1c1e21] focus:border-[#1c1e21] transition-colors cursor-pointer"
                    id="create-country"
                    name="country"
                    defaultValue="ao"
                  >
                    <option value="ao">Angola</option>
                    <option value="na">Namíbia</option>
                    <option value="cg">Congo</option>
                    <option value="br">Brasil</option>
                    <option value="za">África do Sul</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5e6658]">
                    <Chevron />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#1c1e21] mb-2" htmlFor="create-timezone">
                  Fuso horário
                </label>
                <div className="relative">
                  <select
                    className="w-full h-[46px] pl-4 pr-10 rounded-xl border border-[#e1e5de] text-[14px] text-[#1c1e21] appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-[#1c1e21] focus:border-[#1c1e21] transition-colors cursor-pointer"
                    id="create-timezone"
                    name="timezone"
                    defaultValue="africa-luanda"
                  >
                    <option value="africa-luanda">África / Luanda</option>
                    <option value="africa-benguela">África / Benguela</option>
                    <option value="africa-huambo">África / Huambo</option>
                    <option value="utc">UTC</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5e6658]">
                    <Chevron />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f2f6ee] rounded-xl p-4 sm:p-5 text-[13px] text-[#2c3328] mt-6">
              <p className="font-semibold text-[#181d16] mb-1 text-[13.5px]">Cada empresa tem o seu próprio espaço.</p>
              <p className="text-[#596353] font-normal leading-relaxed text-[13px]">
                Contactos, canais e equipa ficam separados. Pode adicionar outras empresas mais tarde.
              </p>
            </div>

            <p className="text-[12px] text-[#788072] pt-1 font-normal">
              * Campo obrigatório. Os dados apresentados são exemplos editáveis.
            </p>

            <div className="pt-5 flex items-center justify-between">
              <Link
                href="/empresas"
                className="inline-flex items-center justify-center px-6 h-[44px] rounded-full border border-[#dcdecb] text-[#242921] text-[13.5px] font-medium hover:bg-gray-50 focus:outline-none transition-colors"
              >
                <span className="mr-2 text-sm leading-none">←</span> Voltar
              </Link>
              <button
                className="inline-flex items-center justify-center px-6 h-[44px] rounded-full bg-[#1b1e20] text-white text-[13.5px] font-medium hover:bg-black focus:outline-none transition-colors shadow-sm"
                type="submit"
              >
                Criar empresa e continuar <span className="ml-2 text-sm leading-none">→</span>
              </button>
            </div>
          </BoundForm>
        </section>
      </main>

      <footer className="w-full text-center py-4">
        <p className="text-[13px] text-[#717a6c] font-normal">A sua configuração fica guardada a cada passo.</p>
      </footer>
    </div>
  );
}
