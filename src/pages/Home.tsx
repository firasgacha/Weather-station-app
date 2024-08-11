import { useState } from "react"
import { Tabs } from "../components/Tabs"
import { Container } from "../components/Container"
import { CloudHail } from "lucide-react"
import { Precipitation } from "../components/Precipitation"
import { Temperature } from "../components/Temperature"
import { Heading } from "../components/Heading"

/**
 * Liste des étiquettes des onglets.
 */
const TabsLabels = {
    Temperatures: "Températures",
    Precipitations: "Précipitations",
} as const

/**
 * Les types des étiquettes.
 */
type AllowedTabs = keyof typeof TabsLabels

/**
 * La page maison de notre projet.
 */
export function Home() {
    // L'onglet active.
    const [activeTab, setActiveTab] = useState<AllowedTabs>(
        // On prend l'onglet dans le stockage local sinon "Precipitations" par défaut.
        (localStorage.getItem("activeTab") as AllowedTabs) ?? "Precipitations",
    )

    /**
     * Gérer la modification de l'onglet.
     * @param tabName - La nouvelle valeur de l'onglet.
     */
    const handleChangeTab = (tabName: AllowedTabs) => {
        // Mettre à jour la state de l'onglet active.
        setActiveTab(tabName)
        // Sauvegarder la nouvelle valeur dans le stockage local.
        localStorage.setItem("activeTab", tabName)
    }

    return (
        <>
            <Heading title="Station météo" icon={<CloudHail />} />

            <Tabs
                activeTab={activeTab}
                setActiveTab={handleChangeTab}
                tabsLabels={["Precipitations", "Temperatures"]}
            />

            <Container>
                {activeTab == "Precipitations" ? (
                    <Precipitation />
                ) : (
                    <Temperature />
                )}
            </Container>
        </>
    )
}
