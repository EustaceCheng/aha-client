type BasicInputProps = {
  placeholder: string;
};

const BasicInput = ({ placeholder }: BasicInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-auto h-[60px] rounded-md border-3 border-grey bg-inherit px-[18px] focus:border-orange focus:outline-none focus:text-white"
    />
  );
};

export default BasicInput;
