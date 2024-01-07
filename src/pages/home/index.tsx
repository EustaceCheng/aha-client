import { useSearchParams } from "react-router-dom";
import Follower from "../../components/pages/home/Follower";
import Search from "../../components/pages/home/Search";
import Results from "../../components/pages/home/Results";

const Home = () => {
  const [searchParams] = useSearchParams({
    type: "search",
  });
  const type = searchParams.get("type");

  return (
    <div className="flex min-h-screen">
      <div className="w-[calc(100%-375px)] pr-[130px] h-full lg:w-full xs:pr-0">
        {type === "results" ? <Results /> : <Search />}
      </div>
      <div className="lg:hidden">
        <Follower />
      </div>
    </div>
  );
};

export default Home;
