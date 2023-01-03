import { useEffect, useState } from "react";

interface IUseFetch {
  url: string;
  log?: boolean;
}

export default function useFetch<T>({ url, log }: IUseFetch) {
  const [data, setData] = useState<T | any>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (log) {
          console.log(data);
        }
        setData(data);
      });
  }, []);

  return data;
}
