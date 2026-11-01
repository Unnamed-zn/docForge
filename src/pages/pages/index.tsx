import { MainTemplate } from "@/templates/mainTemplate";
import { PageContent } from "@/components/layout/pageContent";

export function Pages() {
    return (
        <MainTemplate
            Content={<PageContent/>}
        />
    );
}