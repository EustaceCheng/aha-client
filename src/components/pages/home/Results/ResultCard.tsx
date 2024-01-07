import { Card, Image, Typography } from "antd";
import imageFallback from "../../../../assets/imageFallback.svg";

const { Text } = Typography;

type ResultCardProps = {
  imgUrl: string;
  title: string;
  username: string;
};

const ResultCard = ({ imgUrl, title, username }: ResultCardProps) => {
  return (
    <Card
      hoverable={false}
      style={{ width: 219, height: 197, marginRight: 34, marginBottom: 31 }}
      bodyStyle={{
        paddingTop: 12,
        paddingLeft: 0,
        paddingBottom: 0,
        backgroundColor: "transparent",
      }}
      cover={<Image preview={false} alt="example" src={imageFallback} />}
    >
      <div className="flex flex-col">
        <Text className="text-[14.9px] font-normal m-0">{title}</Text>
        <Text className="text-[11.175px] font-normal">{username}</Text>
      </div>
    </Card>
  );
};

export default ResultCard;
