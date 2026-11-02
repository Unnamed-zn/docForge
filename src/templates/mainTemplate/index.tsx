import { style } from './style';
import { Sidebar } from "@/components/layout/sidebar";

type props = {
    Content?: React.ReactNode;
}

export function MainTemplate({ Content }: props) {
    return (
        <main className={style.main}>
            <Sidebar />
            {Content&& Content}
        </main>
    );
}