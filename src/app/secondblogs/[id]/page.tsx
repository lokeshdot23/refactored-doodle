"use client";
import Link from 'next/link';
import {blogs} from '../../data/blogs'
import { Card } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
type prop={
    params:{id:string};
};

export default function SinglePost({params}:prop){
    const[comment,setComment]=useState('');
    const[allComments,setAllComments]=useState<string[]>([]);
    const blog=blogs.find((b)=>b.id.toString()===params.id) ;
    const handleCommentSubmit =()=>{
        if(comment.trim()){
            setAllComments((prev)=>[...prev,comment])
            setComment('');
        }
    };
    return (
            <div className='flex justify-center items-center min-h-screen bg-grey-50'>
                <Card className='max-w-md w-full flex' >
                    <CardHeader className='flex justify-center'>Card id: {blog?.id}</CardHeader>
                    <CardTitle className='flex justify-center'>{blog?.title}</CardTitle>
                    <CardDescription className='flex justify-center'>{blog?.description}</CardDescription>
                    <Textarea  placeholder='Add your comments' value={comment} onChange={(e)=>setComment(e.target.value)} className='mb-2 '></Textarea>
                    <Button  onClick={handleCommentSubmit}>Submit Comment</Button>
                    <CardFooter className='flex justify-center'>{blog?.date} </CardFooter>
                    <div>
                    <h1>Latest comments on the post</h1>
                    <ul>
                        {allComments.map((cmt,index)=>(
                            <li key={index}>{cmt}</li>
                        ))}
                    </ul>
                </div>
                    <Link  href="/secondblogs">
                        <Button className=' mx-auto focus:outline-none text-white bg-green-700      hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg     text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600     dark:hover:bg-green-700  dark:focus:ring-green-800'>back        
                        </Button>
                    </Link>
                    
                </Card>
                
                
            </div>
    )

}