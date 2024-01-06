import { Card, Typography } from "antd";

const { Text } = Typography;

type MetaCardProps = {
  title: string;
  count: number;
};

const TagCard = ({ title, count }: MetaCardProps) => {
  return (
    <Card
      hoverable={false}
      style={{ width: 150, height: 200, marginRight: 24, marginBottom: 36 }}
      bodyStyle={{
        paddingTop: 10,
        paddingLeft: 0,
        paddingBottom: 0,
        backgroundColor: "transparent",
      }}
      cover={<div className="w-[150px] h-[150px] bg-grey rounded-lg" />}
    >
      <div className="relative flex flex-col">
        <div className="absolute bottom-16 left-2.5 text-white text-2xl font-bold rounded-lg border-4 p-3">
          Tag
        </div>
        <Text
          className="text-[14.9px] font-normal m-0"
          ellipsis={{ tooltip: true }}
        >
          {title}
        </Text>
        <Text className="text-[11.175px] font-normal">{count} Results</Text>
      </div>
    </Card>
  );
};

export default TagCard;
