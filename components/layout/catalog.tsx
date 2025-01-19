import Link from "next/link";
import React from "react";

const Catalog = () => {
  return (
    <>
      You can also{" "}
      <span className="text-primary">
        <Link href={"/catalog/cat.pdf"} target="_blank">
          download
        </Link>
      </span>{" "}
      our full catalog.
    </>
  );
};

export default Catalog;
