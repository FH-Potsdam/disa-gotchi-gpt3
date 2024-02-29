import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [inputPrompt, setInputPrompt] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_prompt: inputPrompt }),
    });
    const data = await response.json();
    setResult(data.result);
    // setInputPrompt("");
  }

  return (
    <div>
      <Head>
        <title>DISA Gotchi</title>
        <link rel="icon" href="/boo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/boo.png" className={styles.icon} />
        <h3>Hi, I'm Boo. <br/> Is something out there bothering you?</h3>
        <form onSubmit={onSubmit}>
          <textarea
            type="text"
            name="input_prompt"
            placeholder="Enter a thought, insecurity or thing you are planning."
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
          />
          <div className={styles.config}>
            <div>
              <strong>Who is Boo?: </strong>
              <label>
                <input type="radio" />
                A friendly ghost
              </label>
              <label>
                <input type="radio" />
                My own anxiety as a partner
              </label>
            </div>
            <div>
              <strong>Tone: </strong>
              <label>
                <input type="checkbox" />
                Humorous
              </label>
              <label>
                <input type="checkbox" />
                Provocative
              </label>
            </div>
            <div>
              <strong>Need: </strong>
              <label>
                <input type="checkbox" />
                I need some encouragement
              </label>
              <label>
                <input type="checkbox" />
                I need some advice
              </label>
            </div>
          </div>
          <input type="submit" value="Share it with Boo" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
