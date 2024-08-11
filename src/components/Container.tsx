import { ReactNode } from "react"

/**
 * Interface pour les propriétés du composant conteneur.
 */
interface ContainerProps {
    title?: string
    children: ReactNode
}

/**
 * Composant d'un conteneur.
 * @param props - Les propriétés du conteneur.
 */
export function Container(props: ContainerProps) {
    return (
        <div className="bg-gray-100 min-h-screen">
            {props.title && (
                <header className="bg-white shadow">
                    <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {props.title}
                        </h1>
                    </div>
                </header>
            )}
            <main className="p-8">
                <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    {props.children}
                </div>
            </main>
        </div>
    )
}
