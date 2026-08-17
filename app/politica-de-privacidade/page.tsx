import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/content";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | CVM Odontologia",
  description:
    "Como a CVM Odontologia coleta, usa e protege seus dados, incluindo o uso de cookies de mensuração (Google Analytics e Google Tag Manager), em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

const lastUpdated = "17 de agosto de 2026";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-void/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center" aria-label={`${clinic.name} — página inicial`}>
            <Image
              src="/images/logo-cvm.png"
              alt={clinic.name}
              width={170}
              height={50}
              className="h-9 w-auto sm:h-10"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-ink-soft transition-colors hover:text-teal-bright"
          >
            ← Voltar para o site
          </Link>
        </div>
      </header>

      <main className="bg-void">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            LGPD
          </span>
          <h1 className="mt-3 text-3xl font-normal leading-tight sm:text-4xl">
            Política de Privacidade e Cookies
          </h1>
          <p className="mt-3 text-sm text-ink-muted">Última atualização: {lastUpdated}</p>

          <div className="mt-10 flex flex-col gap-10 text-ink-soft leading-relaxed">
            <section>
              <h2 className="text-xl font-normal text-ink">1. Quem somos</h2>
              <p className="mt-3">
                Esta política explica como a {clinic.name} (“nós”) trata os dados
                pessoais coletados através deste site, em conformidade com a Lei
                Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD). Ao
                navegar por aqui, você concorda com o tratamento descrito abaixo,
                sempre respeitando as escolhas que você fizer na barra de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">2. Quais dados coletamos</h2>
              <p className="mt-3">
                Este site não possui formulários de cadastro — o agendamento é
                feito diretamente pelo WhatsApp ou telefone, fora da nossa
                página. Os únicos dados coletados automaticamente aqui são de
                navegação, por meio de cookies e ferramentas de mensuração:
                páginas visitadas, tempo de permanência, tipo de dispositivo e
                navegador, origem do acesso (ex.: se você veio de uma busca no
                Google ou de um anúncio) e localização aproximada (cidade/região,
                a partir do IP).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">3. Cookies utilizados</h2>
              <p className="mt-3">
                Usamos o Google Tag Manager (GTM) para gerenciar as tags do site
                e o Google Analytics 4 (GA4) para entender como os visitantes
                usam o site e melhorar nossos conteúdos e campanhas.
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-panel-soft text-left text-ink">
                      <th className="px-4 py-3 font-semibold">Categoria</th>
                      <th className="px-4 py-3 font-semibold">Finalidade</th>
                      <th className="px-4 py-3 font-semibold">Requer consentimento?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-line">
                      <td className="px-4 py-3 align-top">Necessários</td>
                      <td className="px-4 py-3 align-top">
                        Lembrar sua escolha na barra de cookies e permitir o
                        funcionamento básico do site.
                      </td>
                      <td className="px-4 py-3 align-top">Não</td>
                    </tr>
                    <tr className="border-t border-line bg-panel-soft/40">
                      <td className="px-4 py-3 align-top">
                        Mensuração e marketing (GA4 / GTM)
                      </td>
                      <td className="px-4 py-3 align-top">
                        Entender como o site é utilizado e medir a origem e o
                        resultado de campanhas de divulgação.
                      </td>
                      <td className="px-4 py-3 align-top">Sim</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Você pode alterar sua escolha a qualquer momento apagando os
                cookies do site nas configurações do seu navegador, o que faz a
                barra de consentimento aparecer novamente na sua próxima
                visita.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">
                4. Finalidade e base legal do tratamento
              </h2>
              <p className="mt-3">
                Os dados de navegação coletados por cookies de mensuração são
                tratados com base no seu consentimento (art. 7º, inciso IX, e
                art. 8º da LGPD), concedido de forma livre e informada através
                da barra de cookies. Você pode retirar esse consentimento a
                qualquer momento, sem prejuízo para a navegação no site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">
                5. Compartilhamento de dados
              </h2>
              <p className="mt-3">
                Os dados coletados pelo GA4 e pelo GTM são processados pelo
                Google, conforme as políticas de privacidade da própria Google,
                e podem ser armazenados em servidores localizados fora do
                Brasil. Não vendemos nem compartilhamos seus dados com
                terceiros para finalidades diferentes das descritas nesta
                política.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">6. Seus direitos</h2>
              <p className="mt-3">Conforme o art. 18 da LGPD, você tem direito a:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Confirmar a existência de tratamento dos seus dados;</li>
                <li>Acessar os dados que temos sobre você;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  Solicitar anonimização, bloqueio ou eliminação de dados
                  desnecessários;
                </li>
                <li>Solicitar a portabilidade dos seus dados;</li>
                <li>Ser informado sobre com quem compartilhamos seus dados;</li>
                <li>Revogar o seu consentimento a qualquer momento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">
                7. Como exercer seus direitos
              </h2>
              <p className="mt-3">
                Para qualquer solicitação relacionada aos seus dados pessoais,
                fale com a nossa recepção pelo telefone{" "}
                <a href={clinic.phoneHref} className="text-teal underline underline-offset-2 hover:text-teal-bright">
                  {clinic.phoneDisplay}
                </a>{" "}
                ou pelo WhatsApp{" "}
                <a
                  href={`https://wa.me/${clinic.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2 hover:text-teal-bright"
                >
                  {clinic.whatsappDisplay}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal text-ink">
                8. Alterações nesta política
              </h2>
              <p className="mt-3">
                Esta política pode ser atualizada periodicamente para refletir
                mudanças nas ferramentas que usamos ou na legislação aplicável.
                A data no topo desta página indica a versão mais recente.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
