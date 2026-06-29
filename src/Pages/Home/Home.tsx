import { useEffect } from "react";
import { getImages } from "../../services/api";

export default function Home() {
  useEffect(() => {
    getImages().then(console.log);
  }, []);

  return <div>Home</div>;
}

