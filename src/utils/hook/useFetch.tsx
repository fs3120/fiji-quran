import useSWR from "swr";

interface UseFetchProps {
  url: string;
  log?: boolean;
}

function fetchAPI(input: RequestInfo | URL, init?: RequestInit | undefined) {
  return fetch(input, init).then((res) => res.json());
}

export default function useFetch<T>({ url, log }: UseFetchProps) {
  return useSWR<T>(url, fetchAPI, {
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (log) {
        console.log(data);
      }
    },
  });
}
