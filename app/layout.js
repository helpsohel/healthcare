'use client'
import '@/styles/globals.css'
import { useState } from "react";
import Header from "@/components/header";
import LeftDrawer from "@/components/left-drawer";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";


export default function HomePage({children}){
    const [drawerStatus, setDrawerStatus] = useState('close');
    
    return (
        <html lang="en" suppressHydrationWarning>
            <body data-drawer={drawerStatus}>
                <ThemeProvider 
                    attribute="data-theme"
                    defaultTheme="system"
                    enableSystem={true}
                    disableTransitionOnChange>

                    <Header setDrawerStatus={()=>{setDrawerStatus('open')}}/>
                    <LeftDrawer setDrawerStatus = {()=>{setDrawerStatus('close')}} />
                    <MainContent content={children}/>
                    <Footer/>
                </ThemeProvider>
                
            </body>
        </html>
    );
}