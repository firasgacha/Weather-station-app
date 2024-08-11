import { ReactNode } from "react"

/**
 * Interface pour les propriétés du composant de l'en-tête.
 */
interface HeadingProps {
    // L'étiquette de l'en-tête.
    title: string
    // l’icône de l'en-tête (facultatif).
    icon?: ReactNode
}

/**
 * Composant de l'en-tête.
 * @param props - Les propriétés de l'en-tête.
 */
export function Heading(props: HeadingProps) {
    return (
        <div className="justify-between flex-wrap hidden sm:block bg-white rounded shadow">
            <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                <ul className="flex items-center">
                    {props?.icon}
                    <li
                        className={
                            "text-sm text-gray-600 py-3 ml-1 mr-10 font-normal hover:text-gray-800"
                        }
                    >
                        <span className="mb-3">{props.title}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
