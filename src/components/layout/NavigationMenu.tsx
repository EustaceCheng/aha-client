import {
  MailOutlined,
  AppstoreOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps, Typography } from "antd";
import { SIDER_WIDTH } from "../../constants/shared/layout";
import { LogoIcon } from "../icons/Logo";

const { Text } = Typography;
const items: MenuProps["items"] = [
  {
    label: <Text className="xs:hidden">Home</Text>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <Text className="xs:hidden">Tags</Text>,
    key: "app",
    icon: <AppstoreOutlined />,
  },
];

const NavigationMenu = () => {
  return (
    <ul className="menu flex sm:flex-col xs:flex-row">
      <li className="mb-9 xs:hidden">
        <LogoIcon />
      </li>
      <li className="sm:mb-[22px] xs:mr-[50px]">
        <a className="flex flex-col items-center">
          <FolderOutlined style={{ color: "white", fontSize: "24px" }} />
          <Text className="text-[12px] xs:hidden">Home</Text>
        </a>
      </li>
      <li>
        <a className="flex flex-col items-center">
          <FolderOutlined style={{ color: "white", fontSize: "24px" }} />
          <Text className="text-[12px] xs:hidden">Tags</Text>
        </a>
      </li>
    </ul>
  );
};

export default NavigationMenu;
