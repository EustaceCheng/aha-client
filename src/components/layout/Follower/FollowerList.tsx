import { useQuery } from "@tanstack/react-query";
import { getFollowers } from "../../../api/follower/get";
import { Avatar, List, Typography } from "antd";
import ContainedButton from "../../shared/ContainedButton";
import OutlinedButton from "../../shared/OutlinedButton";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const FollowerList = () => {
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["getFollowers"],
    queryFn: () => getFollowers(),
  });

  return (
    <List
      loading={isLoading}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[item.isFollowing ? <FollowingButton /> : <FollowButton />]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                style={{ backgroundColor: "#f56a00" }}
                shape="square"
                size="large"
                src={<UserOutlined />} /*{item.avater} */
              />
            }
            title={<Text>{item.name}</Text>}
            description={<Text className="text-grey">{item.username}</Text>}
          />
        </List.Item>
      )}
    />
  );
};

export default FollowerList;

const FollowButton = () => {
  return <ContainedButton label="Follow" />;
};

const FollowingButton = () => {
  return <OutlinedButton label="Following" />;
};
