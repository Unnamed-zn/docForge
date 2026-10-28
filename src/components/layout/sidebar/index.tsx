type props = {
    children: React.ReactNode;
}

export function Sidebar({children}:props) {
    return (
        <div className="relative flex flex-col gap-3 p-4 w-60 h-full">
            {children}
        </div>
    )
}