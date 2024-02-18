import { Menu } from "../components/Menu/Menu";
import { AssinaturaNewsletter } from "../components/AssinaturaNewsletter/AssinaturaNewsletter";

export const HomePage = () => {
    const MenuTopics = ["Como fazer", "Ofertas", "Depoimentos", 'Vídeos', "Meu carrinho"];

    return (
        <>
        <Menu topics={MenuTopics} />
        <AssinaturaNewsletter />
        </>
    )
}