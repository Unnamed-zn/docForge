import { MainTemplate } from "@/templates/mainTemplate";
import { PageList } from "@/components/layout/pageList";

export function Pages() {
    return (
        <MainTemplate 
            PageList={<PageList/>}
        />
    );
}