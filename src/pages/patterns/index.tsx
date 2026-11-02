import { Layers3 } from "lucide-react";
import { ContentList } from "@/components/layout/contentList";
import { EmptyState } from "@/components/layout/emptyState";
import { PageContent } from "@/components/layout/pageContent";
import { PageHeader } from "@/components/layout/pageHeader";
import { MainTemplate } from "@/templates/mainTemplate";

function PatternsContent() {
    return (
        <div className="flex h-full flex-col gap-10">
            <PageHeader
                eyebrow="ESTRUTURA DO DOCUMENTO"
                title="Padrões"
                description="Crie e organize padrões reutilizáveis para definir a apresentação dos seus conteúdos e manter uma identidade visual consistente entre os documentos."
            />

            <EmptyState
                Icon={Layers3}
                title="Nenhum padrão criado"
                description="Os padrões do projeto serão exibidos aqui. Eles poderão ser aplicados às páginas para padronizar elementos como tipografia, espaçamento e estrutura."
            />
        </div>
    );
}

export function Patterns() {
    return (
        <MainTemplate
            Content={
                <PageContent
                    ContentList={
                        <ContentList
                            title="Biblioteca"
                            description="Padrões deste projeto"
                            emptyMessage="Seus padrões aparecerão aqui quando forem criados."
                        />
                    }
                >
                    <PatternsContent />
                </PageContent>
            }
        />
    );
}
