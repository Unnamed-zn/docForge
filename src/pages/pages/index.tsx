import { MainTemplate } from "@/templates/mainTemplate";
import { PageList } from "@/components/layout/pageList";
import { PageContent } from "@/components/layout/pageContent";

export function Pages() {
    return (
        <MainTemplate 
            PageList={<PageList/>}
            Content={<PageContent/>}
        />
    );
}