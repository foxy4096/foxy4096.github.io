import {
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { posts } from "../../posts";
import Link from "next/link";

export const BlogTable = () => {
  return (
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Title</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.date}</Td>
              <Td>
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
                </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  );
};
