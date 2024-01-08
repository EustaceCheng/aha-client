import { FolderOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { LogoIcon } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const NavigationMenu = () => {
  const navigate = useNavigate();

  return (
    <ul className="menu flex sm:flex-col xs:flex-row">
      <li className="mb-9 xs:hidden">
        <LogoIcon />
      </li>
      <li className="sm:mb-[22px] xs:mr-[50px]">
        <button
          className="flex flex-col items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <FolderOutlined style={{ color: "white", fontSize: "24px" }} />
          <Text className="text-[12px] xs:hidden">Home</Text>
        </button>
      </li>
      <li>
        <button
          className="flex flex-col items-center"
          onClick={() => {
            navigate("/tagList");
          }}
        >
          <FolderOutlined style={{ color: "white", fontSize: "24px" }} />
          <Text className="text-[12px] xs:hidden">Tags</Text>
        </button>
      </li>
    </ul>
  );
};

export default NavigationMenu;
