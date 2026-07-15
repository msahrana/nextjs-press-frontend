import Link from "next/link";
import LikeButton from "./ui/LikeButton";


export default function Home() {
  console.log('console by Root Route')
  return (
    <div>
      Hello Next.js World !!

      Blog Page: <Link href={"/blogs/1"}>Blogs</Link>

      <LikeButton/>
      </div>
  );
}
