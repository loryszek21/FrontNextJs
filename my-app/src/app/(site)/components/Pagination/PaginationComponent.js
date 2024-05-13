// "use client";
// import { useRouter } from "next/router";
// import Link from "next/link";
// export default function PaginationComponent(page, count) {
//   console.log("dupa");
//   console.log(page.id);

//   function routing(dir) {
//     console.log(dir)
//     page.id = page.id + 1 * dir;
//     if (page.id < 0) {
//       page.id = 0;
//       //  return"/show/0"
//     } else if (page.id >= count / 10) {
//       page.id = count / 10;
//     }

//     // return count/10
//     return `/show/${page.id}`;
//   }
//   // const router = useRouter()

//   return (
//     <>
//       <Link href={routing(1)}>
//         <button>Next</button>
//       </Link>
//       <Link href={routing(-1)}>
//         <button>Back</button>
//       </Link>
//     </>
//   );
// }
'use client'
import { useRouter } from "next/navigation";
export default function PaginationComponent({page, count, sortType}) {
  const router = useRouter();
  console.log(sortType, page)
  const handlePrevious = (dir) => {
     let pagedir = page + dir;
      if(pagedir < 0)
          pagedir = 0;
      else if(pagedir >= count/10)
          pagedir = Math.trunc(count/10);
        console.log(count/10)
      router.push(`/show/${pagedir}/${sortType}`);
  }

  return (
      <>
              <button onClick={() => handlePrevious(-1)}>Previous</button>

        <button onClick={() => handlePrevious(1)}>Next</button>
      </>
  );


}
