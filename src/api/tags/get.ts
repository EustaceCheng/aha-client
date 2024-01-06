import axios from "axios";

type TagsResponse = {
  id: string;
  name: string;
  count: number;
}[];

export const getTags = async () => {
  const { data } = await axios.get<TagsResponse>(
    "https://avl-frontend-exam.herokuapp.com/api/tags"
  );

  return data;
};
