"use client";

import { useEffect } from "react";

const RandJokeClient = () => {
  useEffect(() => {
    fetch("/api/posts");
  }, []);
  return (
    <div>
      <h1>Client side data fetching</h1>
    </div>
  );
};

export default RandJokeClient;
