import axios from "axios";

type FollowerResponse = {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: {
    id: string;
    name: string;
    username: string;
    avater: string;
    isFollowing: boolean;
  }[];
};

export const getFollowers = async () => {
  const { data } = await axios.get<FollowerResponse>(
    "https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10"
  );

  return data;
};
