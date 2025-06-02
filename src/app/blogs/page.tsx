import Link from "next/link";
const posts=[
    {id:'1', title:'post 1'},
    {id:'2', title:'post 2'},
    {id:'3',title:'post 3'},
];
export default function BlogPosts(){
    return(
        <div className=" p-2.5">
            <h1>All Posts</h1>
            <ul>
                {posts.map((post)=>(
                    <li className="border-2 bg-blue-600 w-3xs" key={post.id}>
                        <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}