import { Menu } from "../components/Menu/Menu";

export const HomePage = () => {
    const MenuTopics = ["Como fazer", "Ofertas", "Depoimentos", 'Vídeos', "Meu carrinho"];

    return (
        <>
        <Menu topics={MenuTopics} />
        </>
    )
}