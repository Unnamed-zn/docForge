import { style } from './style';
import { Sidebar } from "@/components/layout/sidebar";

type props = {
    PageList?: React.ReactNode;
}

export function MainTemplate({ PageList }: props) {
    return (
        <main className={style.main}>
            <Sidebar />
            {PageList&& PageList}
        </main>
    );
}