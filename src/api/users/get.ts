import axios from "axios";

type UsersResponse = {
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

type UsersParams = {
  page?: number;
  pageSize?: number;
  keyword?: string;
};

export const getUsers = async (params?: UsersParams) => {
  const { data } = await axios.get<UsersResponse>(
    "https://avl-frontend-exam.herokuapp.com/api/users/all",
    { params }
  );

  return data;
};
