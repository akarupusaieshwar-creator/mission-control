import { useState, type FormEvent } from "react";

type LoginPageProps = {
  setUser: (name: string) => void;
};

export default function LoginPage({ setUser }: LoginPageProps) {
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) setUser(trimmedName);
  };

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>🔐 Welcome to Mission Control</h2>
        <label htmlFor="user-name">Your name</label>
        <input
          id="user-name"
          name="name"
          type="text"
          autoComplete="given-name"
          maxLength={40}
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <button type="submit" disabled={!name.trim()}>
          Enter
        </button>
      </form>
    </main>
  );
}
