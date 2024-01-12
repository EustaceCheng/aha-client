import { Button, Empty, Space, Spin, Typography } from "antd";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../api/users/get";
import BasicButton from "../../../../components/shared/BasicButton";
import { LeftOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import { isEmpty } from "ramda";
import { DEFAULT_CURRENT_PAGE } from "../../../../constants/shared/pagination";

const { Text } = Typography;

const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || undefined;
  const pageSize = Number(searchParams.get("pageSize")) || undefined;

  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: { keyword, pageSize, page: DEFAULT_CURRENT_PAGE },
      queryKey: ["getUsers", keyword],
      queryFn: ({ pageParam }) => getUsers(pageParam),
      refetchOnWindowFocus: false,
      getNextPageParam: (res) => ({ keyword, pageSize, page: res.page + 1 }),
    });

  const handleBack = () => {
    setSearchParams({
      type: "search",
    });
  };
  const { pages = [] } = data || {};

  if (isLoading || isFetchingNextPage) {
    return (
      <div className="h-[calc(100vh-32px)]">
        <Spin />
      </div>
    );
  }
  const flag =
    pages?.[pages.length - 1].totalPages !== pages?.[pages.length - 1].page;
  return (
    <div className="h-full">
      <Space className="mb-5">
        <Button
          type="link"
          icon={<LeftOutlined style={{ color: "white" }} />}
          onClick={handleBack}
        />
        <Text className="text-2xl">Results</Text>
      </Space>
      {isEmpty(pages) ? (
        <Empty
          className="relative top-[120px]"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<Text>No Data</Text>}
        />
      ) : (
        <div className="h-[calc(100vh-160px)] overflow-y-auto flex flex-col justify-between">
          <div className="flex flex-wrap">
            {pages.map(({ data }, index) =>
              data.map(({ id, avater, name, username }) => (
                <ResultCard
                  key={id + index}
                  imgUrl={avater}
                  title={name}
                  username={username}
                />
              ))
            )}
          </div>
          {flag && (
            <div className="w-[343px]">
              <BasicButton
                label="MORE"
                onClick={() => {
                  fetchNextPage();
                }}
                disabled={isFetchingNextPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
