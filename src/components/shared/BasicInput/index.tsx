import { ChangeEventHandler } from "react";

type BasicInputProps = {
  placeholder: string;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const BasicInput = ({ placeholder, value, onChange }: BasicInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-auto h-[60px] text-white rounded-md border-3 border-grey bg-inherit px-[18px] placeholder:text-grey focus:border-orange focus:outline-none focus:text-white"
    />
  );
};

export default BasicInput;
