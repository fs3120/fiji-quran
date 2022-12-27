import { useEffect, useState } from "react";

interface Data {
  nama: string;
}

const useFetch = (url:string) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return {data};
}
 
export default useFetch;