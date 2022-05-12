import axios from "axios";
import { useMutation } from "react-query";

type useEditOpinionPayload = {
  id: number;
  review?: string;
  points?: number;
};

export const useEditOpinion = (onSuccess: () => void) => {
  const editOpinion = ({
    id,
    review,
    points,
  }: useEditOpinionPayload) => {
    return axios
      .patch(`http://127.0.0.1:8000/api/clientopinion/${id}/`,{
        review,
        points,
      })
      .catch((error) => console.log(error));
  };

  const { mutate, isLoading } = useMutation(editOpinion, { onSuccess });

  return { mutate, isLoading };
};