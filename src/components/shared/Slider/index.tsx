import { useState } from "react";
const Slider = () => {
  const [value, setValue] = useState(3);

  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        list="steplist"
        onChange={(e) => setValue(Number(e.target.value))}
        value={value}
        step="20"
        className="w-full bg-gradient-to-r from-#FF5C01 to-blue-500"
      />
      <div
        id="steplist"
        className="flex justify-between py-0 bg *:flex *:justify-center"
      >
        <option value={3}>3</option>
        <option className="indent-2.5" value={6}>
          6
        </option>
        <option className="indent-2.5" value={9}>
          9
        </option>
        <option className="indent-1.5" value={12}>
          12
        </option>
        <option value={15}>15</option>
        <option value={50}>50</option>
      </div>
    </>
  );
};

export default Slider;
