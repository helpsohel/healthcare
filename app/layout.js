import Link from "next/link";

export default function HomePage({children}){

    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}