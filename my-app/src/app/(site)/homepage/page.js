import Link from "next/link";
import Button  from "react-bootstrap/Button";
import Menu from "../components/Menu/Menu"
export default function Home(){
    return(
        
        <>
<Menu/>
    <header>
    <h1 className="">siema</h1>
    <Button variant="btn btn-primary">Primary</Button>
    <Link href="/add">Add users</Link>
    <Link href="/show/">Show users</Link>
        <a href="show/0">Show users</a>
    </header>
    </>
    )
}