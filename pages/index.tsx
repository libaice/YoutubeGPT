import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return <Layout>
    <div className="mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter text-center" >
        Chat With Youtube Videos
      </h1>
    </div>
  </Layout>;
}
