import { Button, Space, Spin, Typography } from "antd";
import MetaCard from "../../components/pages/results/Card";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/users/get";
import BasicButton from "../../components/shared/BasicButton";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const Results = () => {
  const navigate = useNavigate();
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers(),
  });

  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }

  return (
    <div>
      <Space>
        <Button
          type="link"
          icon={<LeftOutlined />}
          onClick={() => navigate("/")}
        />
        <Text className="text-2xl pb-5">Results</Text>
      </Space>
      <div className="flex flex-wrap">
        {data?.map(({ avater, username, name }, index) => (
          <MetaCard
            key={index}
            imgUrl={avater}
            title={name}
            username={username}
          />
        ))}
      </div>
      <BasicButton label="MORE" />
    </div>
  );
};

export default Results;
