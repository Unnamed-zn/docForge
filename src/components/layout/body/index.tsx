type props = {
    Header: React.ReactNode;
    Main: React.ReactNode;
};

export function Body({Header, Main}: props) {
    return (
        <body className="flex flex-col w-screen h-screen bg-slate-200 dark:bg-mist-900">
            {Header}
            {Main}
        </body>
    )
}