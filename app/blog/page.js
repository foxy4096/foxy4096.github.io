import { BlogTable } from "@/app/components/BlogList";
export const metadata = {
  title: "Blog • @foxy4096",
};
const page = () => {
  return (
    <>
      <main>
        <BlogTable />
      </main>
    </>
  );
};

export default page;
