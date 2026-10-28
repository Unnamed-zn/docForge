import style from './style.module.css';

export function Header() {
    return (
        <header className={`${style.titlebar} flex flex-row relative h-10 w-full`}>
            <div className="h-full flex flex-row gap-1 py-1 w-fit ml-1 items-center">
                <img src="docForgeTransparentSymbol.png" className="h-full" />
                <h1 className="font-primary text-yellow-300 text-xl">
                    DocForge
                </h1>
            </div>
        </header>
    )
}