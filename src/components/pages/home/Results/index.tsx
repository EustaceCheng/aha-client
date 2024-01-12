import { Button, Empty, Space, Spin, Typography } from "antd";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../api/users/get";
import BasicButton from "../../../../components/shared/BasicButton";
import { LeftOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import { isEmpty } from "ramda";

const { Text } = Typography;
type ResultType = {
  avater: string;
  username: string;
  name: string;
  id: string;
};

const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || undefined;
  const pageSize = Number(searchParams.get("pageSize")) || undefined;
  const page = Number(searchParams.get("page")) || undefined;
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: {
        pageSize: pageSize,
        page: 1,
        keyword: keyword,
      },

      queryKey: ["getUsers"],
      select: ({ pages, pageParams }) => {
        const result: ResultType[] = [];
        pages.forEach((record) => {
          record.data.forEach((event) => {
            result.push({
              ...event,
            });
          });
        });
        return { pages: result, pageParams };
      },
      queryFn: () => getUsers({ keyword, pageSize, page }),
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) =>
        lastPage.page + 1 > lastPage.totalPages
          ? undefined
          : {
              pageSize: pageSize,
              page: lastPage.page + 1,
              keyword: keyword,
            },
    });

  const handleBack = () => {
    setSearchParams({
      type: "search",
    });
  };

  if (isLoading || isFetchingNextPage) {
    return (
      <div className="h-[calc(100vh-32px)]">
        <Spin />
      </div>
    );
  }

  console.log({ isLoading, isFetchingNextPage });

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
      {isEmpty(data?.pages) ? (
        <Empty
          className="relative top-[120px]"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<Text>No Data</Text>}
        />
      ) : (
        <div className="h-[calc(100vh-160px)] overflow-y-auto flex flex-col justify-between">
          <div className="flex flex-wrap">
            {data?.pages?.map(({ avater, username, name, id }, index) => (
              <ResultCard
                key={id + index}
                imgUrl={avater}
                title={name}
                username={username}
              />
            ))}
          </div>
          <div className="w-[343px]">
            <BasicButton
              label="MORE"
              onClick={async () => {
                await fetchNextPage();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
