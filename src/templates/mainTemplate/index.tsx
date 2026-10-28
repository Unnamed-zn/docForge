import { Sidebar } from "@/components/layout/sidebar";


export function MainTemplate() {
    return (
        <body className="grid grid-cols-[15vw_1fr] w-screen h-[100dvh] bg-main-white dark:bg-main-black">
            <Sidebar />
        </body>
    );
}