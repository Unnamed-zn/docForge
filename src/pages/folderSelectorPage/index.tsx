import { SecondaryContentTemplate } from "@/templates/secondaryContentTemplate";
import { FileText } from "lucide-react";

export function ProjectFolderSelector() {
    return (
        <SecondaryContentTemplate
            Icon={FileText}
            title="DocForge"
            description="Onde ideias tomam forma sem complicações."
            nextSteps="Escolha uma pasta para armazenar gerenciar seus projetos. Não se assuste, a escolha pode ser alterada."
        />
    );
}