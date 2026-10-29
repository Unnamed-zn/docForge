import { Sidebar } from "@/components/layout/sidebar";


export function MainTemplate() {
    return (
        <main className="grid grid-cols-[16vw_1fr] w-screen h-dvh bg-main-white dark:bg-main-black">
            <Sidebar />
        </main>
    );
}