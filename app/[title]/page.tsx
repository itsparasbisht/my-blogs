import React from "react";

export default function Blog({ params }: { params: { title: string } }) {
  return <div>{params.title}</div>;
}
