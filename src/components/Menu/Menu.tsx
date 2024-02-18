import "./Menu.css";
import Logo from "../../assets/logo.png";

interface Props {
	topics: string[];
}

export const Menu = ({ topics }: Props) => {
	const isLastItem = (index: number) => { //Função que retorna true caso o item seja o ultimo do array
		return index === topics.length - 1;
	};

	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="Logo da empresa" />
			</div>
			<ul>
				{topics.map((topic, index) => (
					<>
						<li key={index}>
							<a>{topic}</a>
						</li>
						{!isLastItem(index) ? <span>/</span> : null}
					</>
				))}
			</ul>
		</header>
	);
};
