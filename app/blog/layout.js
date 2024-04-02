"use client";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export default function MdxLayout({ children }) {
  return (
    <>
      <Prose>{children}</Prose>
    </>
  );
}
