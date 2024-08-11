import { useQuery } from "react-query"
import API from "../api/Api"
import { Error } from "./Error"
import { Loading } from "./Loading"
import { WeatherChart, WeatherChartOptions } from "./WeatherChart"
import { useMemo } from "react"

export function Temperature() {
    // Récupérer les données de température.
    const { data, isLoading, isError } = useQuery({
        // "temp" est utilisé comme clé unique pour cette requête.
        queryKey: ["temp"],
        // La fonction qui sera appelée pour récupérer les données.
        queryFn: API.getTemperatureData,
    })

    // Mémoriser les options du graphique.
    const option: WeatherChartOptions = useMemo(
        () => ({
            xTitle: "Date",
            yTitle: "Températures",
            label: "Températures",
        }),
        [],
    )

    // Si les données sont en cours de chargement, le composant "Loading" est retourné.
    if (isLoading) {
        return <Loading />
    }

    // Si une erreur survient ou si les données ne sont pas disponibles, le composant "Error" est retourné.
    if (isError || !data) {
        return <Error />
    }

    // Sinon, le composant "WeatherChart" est rendu avec les données récupérées et les options définies.
    return <WeatherChart data={data} option={option} />
}
