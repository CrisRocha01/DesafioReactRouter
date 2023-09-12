import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./Home.css";

export default function Home() {
    return(
        <>
            <Header />
            <Outlet />
        </>

    );
}