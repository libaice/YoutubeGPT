import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import { Message } from "@/types/chat";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [messageState, setMessageState] = useState<{
    message: Message[];
    pending?: string;
    history: [string, string][];
    pendingSourceDocs?: Document[];
  }>({
    message: [
      {
        type: "apiMessage",
        message: "Hi, what would you like to learn about this document?",
      },
    ],
    history: [],
  });

  const { message, history } = messageState;
  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  return (
    <Layout>
      <div className="mx-auto flex flex-col gap-4">
        <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter text-center">
          Chat With Youtube Videos
        </h1>

        <main className={styles.main}>
          <div className={styles.cloud}>
            <div ref={messageListRef} className={styles.messageListRef}>
              {/* {messages.map((message, index) => {

              }))} */}
            </div>
          </div>
        </main>
      </div>

      <footer className="m-auto p-4">
        <a href="https://twitter.com/IAmBAICE">
          Power By LangChain , Build by BAICE
        </a>
      </footer>
    </Layout>
  );
}
