import { useQuery } from "@tanstack/react-query";
import { Avatar, List } from "antd";
import { getFollowings } from "../../../../api/following/get";
import OutlinedButton from "../../../shared/OutlinedButton";
import { UserOutlined } from "@ant-design/icons";

const FollowingList = () => {
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["getFollowings"],
    queryFn: () => getFollowings(),
  });

  return (
    <List
      loading={isLoading}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={[<FollowingButton />]}>
          <List.Item.Meta
            avatar={
              <Avatar
                style={{ backgroundColor: "#f56a00" }}
                src={<UserOutlined />}
                /*{item.avater} */ shape="square"
                size="large"
              />
            }
            title={item.name}
            description={item.username}
          />
        </List.Item>
      )}
    />
  );
};

export default FollowingList;

const FollowingButton = () => {
  return <OutlinedButton label="Following" />;
};
