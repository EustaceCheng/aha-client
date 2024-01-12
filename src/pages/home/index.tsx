import { useSearchParams } from "react-router-dom";
import Follower from "../../components/pages/home/Follower";
import Search from "../../components/pages/home/Search";
import Results from "../../components/pages/home/Results";
import BasicLayout from "../../components/layout";

const Home = () => {
  const [searchParams] = useSearchParams({
    type: "search",
  });
  const type = searchParams.get("type");

  return (
    <BasicLayout>
      <div className="flex ">
        <div className="w-[calc(100%-375px)] pt-[22px] pb-[87px] lg:w-full xs:pr-0">
          {type === "results" ? <Results /> : <Search />}
        </div>
        <div className="lg:hidden bg-black">
          <Follower />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Home;
