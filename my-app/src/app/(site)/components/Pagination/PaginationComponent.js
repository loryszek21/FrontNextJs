
'use client'
import { useRouter } from "next/navigation";
import styles from "./PaginationComponent.module.scss"
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
              <button className={styles.button} onClick={() => handlePrevious(-1)}>Previous</button>

        <button className={styles.button} onClick={() => handlePrevious(1)}>Next</button>
      </>
  );


}
