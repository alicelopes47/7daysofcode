import './FormInput.css';

interface Props {
    placeholder?: string;
    type?: 'email' | 'password' | 'text' | 'number';
}

export const FormInput = ({placeholder, type}: Props) => {
    return (
        <input className='form-input' type={type} placeholder={placeholder} />
    )
};
