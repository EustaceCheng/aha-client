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
  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
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

  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }

  return (
    <div className="h-full">
      <Space>
        <Button type="link" icon={<LeftOutlined />} onClick={handleBack} />
        <Text className="text-2xl pb-5">Results</Text>
      </Space>
      {isEmpty(data?.pages) ? (
        <Empty
          className="relative top-[120px]"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<Text>No Data</Text>}
        />
      ) : (
        <>
          <div className="flex flex-wrap">
            {data?.pages?.map(({ avater, username, name, id }) => (
              <ResultCard
                key={id}
                imgUrl={avater}
                title={name}
                username={username}
              />
            ))}
          </div>
          <BasicButton
            label="MORE"
            onClick={async () => {
              await fetchNextPage;
            }}
          />
        </>
      )}
    </div>
  );
};

export default Results;
