import { Divider, Typography } from "antd";
import BasicInput from "../../components/shared/BasicInput";
import BasicSlider from "../../components/shared/BasicSlider";
import BasicButton from "../../components/shared/BasicButton";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/results");
  };
  return (
    <>
      <div className="flex flex-col text-left">
        <Text className="text-2xl pb-5">Search</Text>
        <BasicInput placeholder="Keyword" />
      </div>
      <Divider className="my-[30px]" />
      <div className="flex flex-col text-left">
        <Text className="text-2xl pb-5"># of results per page</Text>
        <div className="pb-5">
          <Text className="text-5xl pr-2.5">30</Text>
          <Text className="text-base">results</Text>
        </div>
        <BasicSlider />
      </div>
      <Divider className="my-[30px]" />
      <div className="absolute bottom-[87px]">
        <BasicButton label="SEARCH" onClick={handleClick} />
      </div>
    </>
  );
};

export default Home;
