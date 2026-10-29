import { SecondaryContentTemplate } from "@/templates/secondaryContentTemplate";
import { LucideMessageCircleWarning } from "lucide-react";

export function NotFound() {
    return (
        <SecondaryContentTemplate
            Icon={LucideMessageCircleWarning}
            title="Ops"
            description="Algo deu errado, a página digitada não foi encontrada!"
            nextSteps="Verifique o link digitado ou clique no botão abaixo para retornar à página de seleção de projeto."
        />
    );
}