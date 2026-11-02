import { FileText } from "lucide-react";
import { ContentList } from "@/components/layout/contentList";
import { EmptyState } from "@/components/layout/emptyState";
import { PageContent } from "@/components/layout/pageContent";
import { PageHeader } from "@/components/layout/pageHeader";
import { MainTemplate } from "@/templates/mainTemplate";

function PagesContent() {
    return (
        <div className="flex h-full flex-col gap-10">
            <PageHeader
                eyebrow="CONTEÚDO DO PROJETO"
                title="Páginas"
                description="Gerencie as páginas que compõem seus documentos. Cada página pode reunir um ou mais blocos de texto organizados para a exportação."
            />

            <EmptyState
                Icon={FileText}
                title="Nenhuma página criada"
                description="Quando você adicionar páginas ao projeto, elas serão organizadas aqui. Você poderá selecionar uma página na lista lateral para consultar e editar seu conteúdo."
            />
        </div>
    );
}

export function Pages() {
    return (
        <MainTemplate
            Content={
                <PageContent
                    ContentList={
                        <ContentList
                            title="Biblioteca"
                            description="Páginas deste projeto"
                            emptyMessage="Suas páginas aparecerão aqui quando forem criadas."
                        />
                    }
                >
                    <PagesContent />
                </PageContent>
            }
        />
    );
}
