import axios from "axios";

type FollowingResponse = {
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

export const getFollowings = async () => {
  const { data } = await axios.get<FollowingResponse>(
    "https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10"
  );

  return data;
};
