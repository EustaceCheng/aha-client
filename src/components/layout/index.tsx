import { Drawer, Layout } from "antd";
import { LogoIcon } from "../icons/Logo";
import NavigationMenu from "./NavigationMenu";
import { SIDER_WIDTH } from "../../constants/shared/layout";

const { Header, Content } = Layout;

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="min-h-screen bg-black xs:px-[21px] sm:pl-[211px] sm:pt-[54px]">
      <Header className="bg-black h-[70px] pl-0 pt-7 sm:hidden">
        <span>
          <LogoIcon />
        </span>
      </Header>
      <Content>
        <Drawer
          width={SIDER_WIDTH}
          className="xs:hidden"
          placement="left"
          open
          mask={false}
          closable={false}
          style={{
            backgroundColor: "black",
          }}
        >
          <NavigationMenu />
        </Drawer>
        <div>{children}</div>
      </Content>
      <footer className="bg-black py-[21px] sm:hidden">
        <span>
          <NavigationMenu />
        </span>
      </footer>
    </Layout>
  );
};

export default BasicLayout;
