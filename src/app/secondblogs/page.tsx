import Link from "next/link";
import {blogs} from "../data/blogs"
import { Button } from "@/components/ui/button";
export default function NewBlogsPage(){
    return(
        <div>
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
  All Blogs - Cards
</h1>

            <ul className="flex">
                
                    {
                        blogs.map((eachBlog)=>(
                            <li className="flex-1 flex justify-center" key={eachBlog.id}>
                                <Button className="bg-blue-400 hover:bg-blue-200 m-1 ">
                                <Link className="hover: text-shadow-black " href={`secondblogs/${eachBlog.id}`}>This is blog{eachBlog.id} </Link>
                                </Button>
                            </li>
                        ))
                    }
                
            </ul>
        </div>
    )
}