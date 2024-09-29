// app/page.js
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [message, setMessage] = useState("");
  const input = "001";

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`/api/messages?input=${input}`);
      const data = await response.json();
      if (data.message) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    };

    fetchMessage();
  }, [input]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="message-output">
          <h2>Output Message:</h2>
          <p>{message}</p>
        </div>
      </main>
    </div>
  );
}