import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle>About Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 mb-4">
                        Welcome to our Next.js app! We are passionate developers building modern web experiences using the latest technologies.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Powered by Next.js for fast, scalable apps</li>
                        <li>Styled with Tailwind CSS for rapid UI development</li>
                        <li>Enhanced with shadcn/ui components for beautiful design</li>
                        <li>Open to collaboration and learning</li>
                    </ul>
                    <Link href="/" >
                    <button className="default" >Back</button>
                    </Link>
                </CardContent>
            </Card>
        </main>
    );
}