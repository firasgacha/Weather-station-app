import { QueryClient, QueryClientProvider } from "react-query"
import { Home } from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
    // Création d'une instance de QueryClient, qui gérera toutes les requêtes de l'application.
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    )
}

export default App
