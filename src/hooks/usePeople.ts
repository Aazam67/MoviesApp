import { DependencyList, useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface People {
  bio: string;
  imageUrl: string;
  name: string;
  role: string;
}

interface Request {
  peopleId?: string;
  role_code?: string;
  dependency?: DependencyList;
}

interface FetchPeople {
  [key: string]: People;
}
const usePeople = ({ peopleId, role_code, dependency }: Request) => {
  const [peoples, setPeoples] = useState<FetchPeople>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      var requestParam = peopleId
        ? `?orderBy="$key"&equalTo="${peopleId}"`
        : role_code
        ? `?orderBy="role"&equalTo="${role_code}"`
        : "";
      apiClient
        .get<FetchPeople>(`/people.json${requestParam}`, {
          signal: controller.signal,
        })
        .then((res) => {
          setPeoples(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    dependency ? dependency : []
  );

  return { peoples, error, isLoading };
};
export default usePeople;
