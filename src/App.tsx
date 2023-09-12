import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import HomeBody from "./routes/HomeBody";
import Products from "./routes/Products";
import SobreNos from "./routes/SobreNos";
import Computer from "./routes/Computer";
import Eletronic from "./routes/Eletronic";
import Book from "./routes/Book";
import NotFound from "./routes/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomeBody />} />
                    <Route path="/produtos" element={<Products />}>
                        <Route
                            path="/produtos/computadores"
                            element={<Computer />}
                        />
                        <Route
                            path="/produtos/eletronicos"
                            element={<Eletronic />}
                        />
                        <Route path="/produtos/livros" element={<Book />} />
                    </Route>
                    <Route path="/sobre" element={<SobreNos />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
