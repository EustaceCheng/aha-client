type OutlinedButtonProps = {
  label: string;
};

const OutlinedButton = ({ label }: OutlinedButtonProps) => {
  return (
    <button
      name="button"
      className="w-auto h-7 text-xs px-[10px] text-white rounded-3xl border-white border font-semibold hover:bg-white hover:text-black"
    >
      {label}
    </button>
  );
};

export default OutlinedButton;
