import { ConfigProvider } from "antd";

const ThemeConfigProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#FFF",
          colorTextSecondary: "rgb(0, 0, 0)",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfigProvider;
