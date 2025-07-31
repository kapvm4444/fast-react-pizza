import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={"Your Order number #"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
