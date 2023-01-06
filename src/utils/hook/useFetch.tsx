import useSWR from "swr";

interface UseFetchProps {
  url: string;
  log?: boolean;
}

async function fetchAPI(input: any, init: any) {
  const res = await fetch(input, init);
  return await res.json();
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
