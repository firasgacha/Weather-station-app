import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from "chart.js"

/**
 * Enregistrement des modules dans ChartJS.
 */
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
)

/**
 * Les données du graphique.
 */
export interface WeatherChartData {
    // Les étiquettes de l'axe des x.
    labels: string[]
    // Les valeurs de l'axe des y.
    values: string[]
}

/**
 * Les options du graphique.
 */
export interface WeatherChartOptions {
    // Titre pour l'axe des x (optionnel).
    xTitle?: string
    // Titre pour l'axe des y (optionnel).
    yTitle?: string
    // Légende pour la série de données (optionnel).
    label?: string
}

/**
 * Les propriétés du composant de la carte météo.
 */
interface WeatherChartProps {
    data: WeatherChartData
    option?: WeatherChartOptions
}

/**
 * Composant de la carte météo.
 * @param props - Les propriétés de la carte météo.
 * @returns
 */
export function WeatherChart(props: WeatherChartProps) {
    // Configuration des options du graphique.
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: props?.option?.xTitle,
                },
            },
            y: {
                title: {
                    display: true,
                    text: props?.option?.yTitle,
                },
            },
        },
    }

    // Création des données du graphique.
    const WeatherChartData = {
        labels: props.data.labels,
        responsive: true,
        datasets: [
            {
                label: props?.option?.label,
                data: props.data.values,
                borderColor: "rgba(75, 192, 192, 1)",
            },
        ],
    }

    return (
        <Line
            options={options}
            data={WeatherChartData}
            className="h-52 bg-white rounded-md p-4"
        />
    )
}
