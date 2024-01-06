import { ButtonProps } from "antd";

type BasicButtonProps = ButtonProps & {
  label: string;
};

const BasicButton = ({ label, onClick }: BasicButtonProps) => {
  return (
    <button
      name="button"
      className="w-[335px] h-10 bg-white text-sm border-white border text-black rounded font-bold hover:bg-black hover:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BasicButton;
