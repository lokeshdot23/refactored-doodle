import Link from "next/link";

const Products=[
    {id:'1', product:'product 1'},
    {id:'2', product:'product 2'},
    {id:'3', product:'product 3'},
];
export default function AllProducts(){
    return(
        <div>
            <h1>All Products in list</h1>
            <ul className="px-4 py-2 rounded-md border-2 border-zinc-200 text-amber-700 font-medium hover:bg-blue-200 transition">
                {
                    Products.map((eachproduct)=>(
                        <li className="px-4 py-2 rounded-md border-2 text-amber-700 font-medium hover:border-blue-500 transition bg-white" key={eachproduct.id}>
                            <Link href={`products/${eachproduct.id}`}>This is product {eachproduct.id}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}