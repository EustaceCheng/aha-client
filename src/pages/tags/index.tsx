import { Empty, Spin, Typography } from "antd";
import { getTags } from "../../api/tags/get";
import { useQuery } from "@tanstack/react-query";
import TagCard from "../../components/pages/tags/TagCard";
import BasicLayout from "../../components/layout";

const { Text } = Typography;
const Tags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getTags"],
    queryFn: () => getTags(),
  });

  if (isLoading) {
    return <Spin />;
  }

  if (!data) {
    return <Empty />;
  }

  return (
    <BasicLayout>
      <div>
        <Text className="text-2xl">Tags</Text>
        <div className="flex flex-wrap mt-6 pr-[180px] xs:pr-0">
          {data?.map(({ name, count, id }) => (
            <TagCard key={id} title={name} count={count} />
          ))}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Tags;
