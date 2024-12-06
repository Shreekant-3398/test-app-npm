export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline';

export default interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
