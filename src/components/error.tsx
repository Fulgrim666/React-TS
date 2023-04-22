import React from "react";

interface ErrorProprs {
  error: string;
}

export function Error({ error }: ErrorProprs) {
  return <p className="text-center text-red-600">{error}</p>;
}
