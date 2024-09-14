import { DependencyList, useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

//People data structure
export interface People {
  bio: string;
  imageUrl: string;
  name: string;
  role: string;
}

//request parameters
interface Request {
  //to pass peopleID
  peopleId?: string;
  //to pass Role {actor/director}
  role_code?: string;
  //dependency to inform for hook
  dependency?: DependencyList;
}
//return data type
interface FetchPeople {
  [key: string]: People;
}
const usePeople = ({ peopleId, role_code, dependency }: Request) => {
  //poeple state
  const [peoples, setPeoples] = useState<FetchPeople>({});
  //error state
  const [error, setError] = useState("");
  //loading state
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      //allow abortation
      const controller = new AbortController();
      //enable loading by set the hook true
      setLoading(true);
      //generate request query regarding the requested paramateres
      //if peopleId passed request by that
      //else if rolce passed get all people with the passed role
      var requestParam = peopleId
        ? `?orderBy="$key"&equalTo="${peopleId}"`
        : role_code
        ? `?orderBy="role"&equalTo="${role_code}"`
        : "";
      //call the api by get
      apiClient
        .get<FetchPeople>(`/people.json${requestParam}`, {
          signal: controller.signal,
        })
        //handle response when data fetched
        .then((res) => {
          //set result to state
          setPeoples(res.data);
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
    },
    //set dependencies
    dependency ? dependency : []
  );
  //return the states

  return { peoples, error, isLoading };
};
export default usePeople;
