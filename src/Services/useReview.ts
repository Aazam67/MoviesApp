import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

//review data structure
export interface Review {
  movieId: string;
  review: string;
  reviewer: string;
  score: number;
  title: string;
}

//movieId as a paramatere to filter the movie reviews
interface Request {
  movieId?: string;
}

interface FetchReview {
  [key: string]: Review;
}
const useReview = ({ movieId }: Request) => {
  //reviews state
  const [reviews, setReview] = useState<FetchReview>({});
  //error state
  const [error, setError] = useState("");
  //loading state
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    //allow abortation
    const controller = new AbortController();
    //enable loading by set the hook true
    setLoading(true);
    //generate request query regarding the movieId paramatere
    var requestParam = movieId ? `?orderBy="movieId"&equalTo="${movieId}"` : "";
    //call the api by get
    apiClient
      .get<FetchReview>(`/reviews.json${requestParam}`, {
        signal: controller.signal,
      })
      //handle response when data fetched
      .then((res) => {
        //set result to state
        setReview(res.data);
        //set loading state off
        setLoading(false);
      })
      //handle error during data retrieval
      .catch((err) => {
        //if it is cancelled just return
        if (err instanceof CanceledError) return;
        //set error state whith the message
        setError(err.message);
        //set loading satate off
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  //return the states
  return { reviews, error, isLoading };
};
export default useReview;
