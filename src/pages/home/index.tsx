import { Link } from "react-router-dom";
import { ArrowUpRight, FileText, Layers3 } from "lucide-react";
import { PageContent } from "@/components/layout/pageContent";
import { PageHeader } from "@/components/layout/pageHeader";
import { MainTemplate } from "@/templates/mainTemplate";

function HomeContent() {
    return (
        <div className="flex h-full flex-col gap-10">
            <PageHeader
                eyebrow="VISÃO GERAL"
                title="Bem-vindo ao DocForge"
                description="Organize seus conteúdos, defina padrões reutilizáveis e prepare documentos em PDF em um só lugar."
            />

            <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="font-primary text-2xl font-bold text-main-black dark:text-main-white">Acesso rápido</h2>
                    <p className="font-layout text-sm text-main-black/60 dark:text-main-white/60">Continue organizando seu projeto.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <Link
                        to="/pages"
                        className="group flex min-h-36 items-start justify-between gap-5 rounded-2xl border border-black/10 bg-white/40 p-6 transition-colors hover:bg-main-yellow/15 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-light-yellow/10"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-main-yellow/25 dark:bg-light-yellow/15">
                                <FileText className="size-5 text-main-black dark:text-main-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-primary text-xl font-bold text-main-black dark:text-main-white">Páginas</h3>
                                <p className="max-w-sm font-layout text-sm leading-relaxed text-main-black/60 dark:text-main-white/60">Organize os conteúdos que farão parte dos seus documentos.</p>
                            </div>
                        </div>
                        <ArrowUpRight className="size-5 shrink-0 text-main-black/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-main-white/45" />
                    </Link>

                    <Link
                        to="/patterns"
                        className="group flex min-h-36 items-start justify-between gap-5 rounded-2xl border border-black/10 bg-white/40 p-6 transition-colors hover:bg-main-yellow/15 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-light-yellow/10"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-main-yellow/25 dark:bg-light-yellow/15">
                                <Layers3 className="size-5 text-main-black dark:text-main-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-primary text-xl font-bold text-main-black dark:text-main-white">Padrões</h3>
                                <p className="max-w-sm font-layout text-sm leading-relaxed text-main-black/60 dark:text-main-white/60">Defina estruturas e estilos reutilizáveis para manter a consistência visual.</p>
                            </div>
                        </div>
                        <ArrowUpRight className="size-5 shrink-0 text-main-black/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-main-white/45" />
                    </Link>
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="font-primary text-2xl font-bold text-main-black dark:text-main-white">Fluxo de trabalho</h2>
                    <p className="font-layout text-sm text-main-black/60 dark:text-main-white/60">Uma sequência simples para preparar seus documentos.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="flex flex-col gap-2 rounded-xl border border-black/10 p-5 dark:border-white/10">
                        <span className="font-layout text-xs font-semibold tracking-widest text-main-black/45 dark:text-main-white/45">01</span>
                        <h3 className="font-primary text-lg font-bold text-main-black dark:text-main-white">Organize as páginas</h3>
                        <p className="font-layout text-sm leading-relaxed text-main-black/60 dark:text-main-white/60">Separe e estruture os blocos de conteúdo do documento.</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-black/10 p-5 dark:border-white/10">
                        <span className="font-layout text-xs font-semibold tracking-widest text-main-black/45 dark:text-main-white/45">02</span>
                        <h3 className="font-primary text-lg font-bold text-main-black dark:text-main-white">Configure os padrões</h3>
                        <p className="font-layout text-sm leading-relaxed text-main-black/60 dark:text-main-white/60">Escolha regras de apresentação para unificar o resultado.</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-black/10 p-5 dark:border-white/10">
                        <span className="font-layout text-xs font-semibold tracking-widest text-main-black/45 dark:text-main-white/45">03</span>
                        <h3 className="font-primary text-lg font-bold text-main-black dark:text-main-white">Prepare a saída</h3>
                        <p className="font-layout text-sm leading-relaxed text-main-black/60 dark:text-main-white/60">Revise a composição e gere o arquivo final em PDF.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export function Home() {
    return (
        <MainTemplate
            Content={
                <PageContent>
                    <HomeContent />
                </PageContent>
            }
        />
    );
}
