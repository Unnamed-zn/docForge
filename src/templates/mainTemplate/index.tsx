import { style } from './style';
import { Sidebar } from "@/components/layout/sidebar";

type props = {
    PageList?: React.ReactNode;
    Content: React.ReactNode;
}

export function MainTemplate({ PageList, Content }: props) {
    return (
        <main className={style.main}>
            <Sidebar />
            {PageList&& PageList}
            {Content&& Content}
        </main>
    );
}