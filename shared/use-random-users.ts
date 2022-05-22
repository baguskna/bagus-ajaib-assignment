import useSWR from "swr";
import { ResponseRandomUserSchema } from "../lib/interfaces";
import API_URL from "./constants";

const useRandomUser = (path: string) => {
  const { data, error } = useSWR<ResponseRandomUserSchema, unknown>(
    `${API_URL}?${path}`,
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );

  return {
    data: data,
    error: error,
  } as const;
};

export default useRandomUser;
