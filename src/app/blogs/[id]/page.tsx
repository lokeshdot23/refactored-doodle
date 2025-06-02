import Link from "next/link";
type newProp ={
    params:{id:string};
};

export default function EachPost({params}:newProp){
    return(
        <div>
            <h1>post id:{params.id}</h1>
            <p>This is the post with id : {params.id}</p>
            <Link href="/blogs"> 
                <button className="default">
                    back to all blogs
                </button>
            </Link>
        </div>
    )

}