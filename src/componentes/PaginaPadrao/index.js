import { Outlet } from "react-router-dom";
import Banner from "../Banner";


export default function PaginaPadrao() {
  return (
    <main>
        <Banner/>
        <Outlet/>

        {/* Renderizar conteudo da rota aqui */}
    </main>
  )
}
