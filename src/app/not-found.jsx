import Link from "next/link";
const NotFound=()=>{
  return(
    <div>
      <h2>Not Found</h2>
      <p>Sorry no page fouund at this Url</p>
      <Link href="/">Return home</Link>
    </div>
  );
}

export default NotFound