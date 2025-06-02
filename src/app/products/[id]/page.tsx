import Link from "next/link";
type newProps={
    params:{id:string};
};

export default function ProductDetails({params}:newProps){
    return(
        <div>
            <h1>This is product number {params.id}</h1>
            <Link href='/products'>Back to all products</Link>
        </div>
    )
}