import { ButtonProps } from "antd";

type BasicButtonProps = ButtonProps & {
  label: string;
  disabled?: boolean;
};

const BasicButton = ({
  disabled = false,
  label,
  onClick,
}: BasicButtonProps) => {
  return (
    <button
      name="button"
      disabled={disabled}
      className="w-full h-10 bg-white text-sm border-white border text-black rounded font-bold hover:bg-black hover:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BasicButton;
