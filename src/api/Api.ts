// @ts-nocheck
import Papa from "papaparse"
import { WeatherChartData } from "../components/WeatherChart"

interface CSVRow {
    date: string
    value: string
}

class Api {
    /**
     * Récupérer les données de température depuis un fichier CSV.
     * @returns - Un objet au format "WeatherChartData".
     */
    async getTemperatureData(): Promise<WeatherChartData> {
        // Initialisation des tableaux pour stocker les dates et les valeurs extraites du fichier CSV.
        const dates: string[] = []
        const values: string[] = []

        try {
            // Récupération du fichier CSV depuis le chemin spécifié.
            const res = await fetch("/data/20240730_temperature.csv")
            // Lecture du contenu du fichier CSV en tant que texte.
            const txt = await res.text()

            await new Promise((res) => {
                // Utilisation de la bibliothèque "PapaParse" pour parser le texte CSV.
                Papa.parse(txt, {
                    // Indique que la première ligne du CSV contient les en-têtes.
                    header: true,
                    complete: (result) => {
                        // Parcours de chaque ligne parsée pour extraire les dates et valeurs.
                        result.data.forEach((element: CSVRow) => {
                            // Conversion de la date en année seulement et ajout au tableau des dates.
                            dates.push(
                                new Date(element.date).getFullYear().toString(),
                            )
                            // Ajout de la valeur au tableau des valeurs.
                            values.push(element.value)
                        })
                        // Résolution de la promesse après le parsing.
                        res(0)
                    },
                })
            })
        } catch (error) {
            // Gestion des erreurs de récupération ou de parsing du fichier CSV.
            console.error("Erreur dans l'extraction du fichier CSV :", error)
        }

        // Retourne les données formatées pour être utilisées dans un graphique.
        return { labels: dates, values: values }
    }

    /**
     * Récupérer les données de précipitations à partir d'un fichier CSV.
     * @returns - Un objet de type WeatherChartData.
     */
    async getPrecipitationData(): Promise<WeatherChartData> {
        // Initialisation des tableaux pour stocker les dates et les valeurs extraites du fichier CSV.
        const dates: string[] = []
        const values: string[] = []

        try {
            // Récupération du fichier CSV depuis le chemin spécifié.
            const res = await fetch("/data/20240730_rain-level.csv")
            // Lecture du contenu du fichier CSV en tant que texte.
            const txt = await res.text()

            await new Promise((res) => {
                // Utilisation de PapaParse pour parser le texte CSV.
                Papa.parse(txt, {
                    // Indique que la première ligne du CSV contient les en-têtes.
                    header: true,
                    complete: (result) => {
                        // Parcours de chaque ligne parsée pour extraire les dates et valeurs.
                        result.data.forEach((element: CSVRow) => {
                            // Conversion de la date en heure:minute:seconde pour l'affichage.
                            const date = new Date(parseInt(element.date))
                            const hours = String(date.getHours()).padStart(
                                2,
                                "0",
                            )
                            const minutes = String(date.getMinutes()).padStart(
                                2,
                                "0",
                            )
                            const seconds = String(date.getSeconds()).padStart(
                                2,
                                "0",
                            )
                            // Ajout de la date formatée au tableau dates.
                            dates.push(`${hours}:${minutes}:${seconds}`)
                            // Ajout de la valeur au tableau values.
                            values.push(element.value)
                        })
                        // Résolution de la promesse après le parsing.
                        res(0)
                    },
                })
            })
        } catch (error) {
            // Gestion des erreurs de récupération ou de parsing du fichier CSV.
            console.error("Erreur dans l'extraction du fichier CSV :", error)
        }

        // Retourne les données formatées pour être utilisées dans un graphique.
        return { labels: dates, values: values }
    }
}

// Création d'une instance de la classe Api pour être utilisée dans le projet.
const API = new Api()
export default API
