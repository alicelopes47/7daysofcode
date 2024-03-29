import './RegularButton.css'

interface Props {
    label: string;
}

export const RegularButton = ({label}: Props) => {
    return (
        <button className="regular-button">{label}</button>
    )
}