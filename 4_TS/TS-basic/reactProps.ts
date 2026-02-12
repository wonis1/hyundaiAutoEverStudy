interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const defaultProps: ButtonProps = {
    text: '클릭',
    onClick: () => console.log('클릭됨'),
    variant: 'primary',
    disabled: false,
    size: 'medium'
}