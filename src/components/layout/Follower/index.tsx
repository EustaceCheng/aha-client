import { Card, Typography } from "antd";
import { useState } from "react";
import FollowerList from "./FollowerList";
import FollowingList from "./FollowingList";

enum FollowerListTabKey {
  FOLLOWERS = "followers",
  FOLLOWING = "following",
}

const { Text } = Typography;

const tabListNoTitle = [
  {
    key: "followers",
    label: [<Text>Followers</Text>],
  },
  {
    key: "following",
    label: [<Text>Following</Text>],
  },
];

const content: Record<string, React.ReactNode> = {
  [FollowerListTabKey.FOLLOWERS]: <FollowerList />,
  [FollowerListTabKey.FOLLOWING]: <FollowingList />,
};

const Follower = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>("followers");
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        border: "none",
      }}
      headStyle={{
        borderColor: "grey",
      }}
      tabList={tabListNoTitle}
      activeTabKey={activeTabKey2}
      onTabChange={onTab2Change}
      tabProps={{
        size: "middle",
      }}
    >
      {content[activeTabKey2]}
    </Card>
  );
};

export default Follower;
