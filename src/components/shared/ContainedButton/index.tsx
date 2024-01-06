type ContainedButtonProps = {
  label: string;
};

const ContainedButton = ({ label }: ContainedButtonProps) => {
  return (
    <button
      name="button"
      className="w-auto h-7 text-xs px-[10px] text-black bg-white rounded-3xl border-white border font-semibold hover:bg-black hover:text-white"
    >
      {label}
    </button>
  );
};

export default ContainedButton;
