import { Image } from "antd";
import logo from "../../assets/logo.svg";

export const LogoIcon = () => {
  return <Image preview={false} width={35} height={15} src={logo} alt="Logo" />;
};
