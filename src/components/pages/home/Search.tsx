import { Divider, Typography } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BasicButton from "../../shared/BasicButton";
import BasicInput from "../../shared/BasicInput";
import BasicSlider from "../../shared/BasicSlider";
import { DEFAULT_CURRENT_PAGE } from "../../../constants/shared/pagination";

const { Text } = Typography;

enum FormItemName {
  KEYWORD = "keyword",
  PAGE_SIZE = "pageSize",
}

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState("3");
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    setSearchParams({
      [FormItemName.KEYWORD]: inputValue,
      [FormItemName.PAGE_SIZE]: sliderValue,
      page: String(DEFAULT_CURRENT_PAGE),
      type: "results",
    });
  };

  return (
    <div className="h-[calc(100vh-32px)] flex flex-col justify-between overflow-y-auto pr-[130px]">
      <div>
        <div className="flex flex-col text-left">
          <Text className="text-2xl pb-5">Search</Text>
          <BasicInput
            placeholder="Keyword"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <Divider className="my-[30px]" />
        <div className="flex flex-col text-left">
          <Text className="text-2xl pb-5"># of results per page</Text>
          <div className="pb-5">
            <Text className="text-5xl pr-2.5">30</Text>
            <Text className="text-base">results</Text>
          </div>
          <BasicSlider
            value={Number(sliderValue)}
            onChange={(e) => {
              setSliderValue(String(e));
            }}
          />
        </div>
        <Divider className="my-[30px]" />
      </div>
      <div className="w-[311px]">
        <BasicButton label="SEARCH" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
