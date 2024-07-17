import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const page = async () => {
  // const url = "https://localhost:3000/api/blog";

  // console.log(url);

  // const res = await fetch(url, { cache: "no-cache" });
  // const data = await res.json();
  // console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Link href="/admin">
        <Button variant="destructive">Craete Your Blog Here</Button>
      </Link>
    </div>
  );
};

export default page;
