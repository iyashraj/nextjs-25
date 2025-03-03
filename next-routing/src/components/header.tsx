import React from "react";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <nav className="flex justify-between p-5">
      <div className="font-bold text-2xl">Home</div>
      <div className="flex gap-4">
        <Link href={"/performance"}>Performance</Link>
        <Link href={"/reliability"}>Reliability</Link>
      </div>
    </nav>
  );
};

export default HeaderComponent;
