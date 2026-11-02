import type { ReactNode } from "react";
import { style } from "./style";

type Props = {
    ContentList?: ReactNode;
    children?: ReactNode;
};

export function PageContent({ ContentList, children }: Props) {
    return (
        <div className={style.pageContent}>
            {ContentList}
            <div className={style.mainContent}>
                {children}
            </div>
        </div>
    );
}
