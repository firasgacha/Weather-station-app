/**
 * Interface pour les propriétés du composant des onglets.
 */
type TabsProps<T> = {
    // L'onglet actif.
    activeTab: T
    /**
     * Gérer la modification de l'onglet.
     * @param tabName - La nouvelle valeur de l'onglet.
     */
    setActiveTab: (tabName: T) => void
    // Liste des onglets à afficher.
    tabsLabels: T[]
}

/**
 * Composant des onglets.
 * @param props - Les propriétés des onglets.
 */
export function Tabs<T extends string>(props: TabsProps<T>) {
    return (
        <div>
            <div className="sm:hidden relative w-auto mx-auto rounded">
                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-selector"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#A0AEC0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                    </svg>
                </div>
                <select
                    onChange={(event) =>
                        props.setActiveTab(event.target.value as T)
                    }
                    aria-label="Selected tab"
                    className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
                >
                    {props.tabsLabels.map((tabName, index) => (
                        <option
                            value={tabName}
                            key={index}
                            className="text-sm text-gray-600"
                        >
                            {tabName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="justify-between flex-wrap hidden sm:block bg-white rounded shadow">
                <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                    <ul className="flex">
                        {props.tabsLabels.map((tabName, index) => (
                            <li
                                key={index}
                                onClick={() => props.setActiveTab(tabName)}
                                className={
                                    props.activeTab === tabName
                                        ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                                        : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                                }
                            >
                                <span className="mb-3 cursor-pointer">
                                    {tabName}
                                </span>
                                {props.activeTab === tabName && (
                                    <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
