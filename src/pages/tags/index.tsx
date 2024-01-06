import { Empty, Spin, Typography } from "antd";
import { getTags } from "../../api/tags/get";
import { useQuery } from "@tanstack/react-query";
import TagCard from "../../components/pages/tags/TagCard";

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
    <div>
      <Text className="text-2xl mb-6">Tags</Text>
      <div className="flex flex-wrap">
        {data?.map(({ name, count, id }) => (
          <TagCard key={id} title={name} count={count} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
