type props = {
    children: React.ReactNode;
}

export function Sidebar({children}:props) {
    return (
        <div className="fixed flex flex-col gap-3 top-12 p-4 left-0 w-1/6 h-full">
            {children}
        </div>
    )
}