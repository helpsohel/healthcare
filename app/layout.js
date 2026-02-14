'use client'
import '@/styles/globals.css'
import { useState } from "react";
import Header from "@/components/header";
import LeftDrawer from "@/components/left-drawer";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

export default function HomePage({children}){
    const [drawerStatus, setDrawerStatus] = useState('close');
    
    return (
        <html>
            <body data-drawer={drawerStatus}>
                <Header setDrawerStatus={()=>{setDrawerStatus('open')}}/>
                <LeftDrawer setDrawerStatus = {()=>{setDrawerStatus('close')}} />
                <MainContent content={children}/>
                <Footer/>
            </body>
        </html>
    );
}