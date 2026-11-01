import { style } from "./style";
import { ContentList } from "../contentList";

export function PageContent() {
    return (
        <div className={style.pageContent}>
            <ContentList />
        </div>
    );
}