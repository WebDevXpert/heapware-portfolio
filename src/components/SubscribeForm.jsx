"use client";

import { useState } from "react";
import { sendForm } from "@/lib/sendForm";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      await sendForm({ type: "subscribe", email, website });
      setEmail("");
      setStatus({ state: "success", message: "Thanks for subscribing!" });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Your email"
        className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Your Email..."
      />
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60"
      >
        {status.state === "sending" ? "Subscribing..." : "Subscribe Now"}
      </button>
      {status.message && (
        <p
          role="status"
          className={`mt-2 text-sm ${
            status.state === "error" ? "text-red-600" : "text-green-700"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
