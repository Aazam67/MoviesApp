import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Review {
  movieId: string;
  review: string;
  reviewer: string;
  score: number;
  title: string;
}

interface Request {
  movieId?: string;
}

interface FetchReview {
  [key: string]: Review;
}
const useReview = ({ movieId }: Request) => {
  const [reviews, setReview] = useState<FetchReview>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    var requestParam = movieId ? `?orderBy="movieId"&equalTo="${movieId}"` : "";
    apiClient
      .get<FetchReview>(`/reviews.json${requestParam}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setReview(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { reviews, error, isLoading };
};
export default useReview;
