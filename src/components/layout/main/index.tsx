type props = {
    Sidebar: React.ReactNode;
    Interface?: React.ReactNode;
};

export function Main({Sidebar, Interface}:props) {
    return (
        <main className="flex flex-row h-full w-full">
            {Sidebar}
            {Interface&& Interface}
        </main>
    )
}