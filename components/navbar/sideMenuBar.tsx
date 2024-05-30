"use client"

import {SyntheticEvent} from 'react';

export default function SideMenuBar({ onBackdropClick }: {onBackdropClick: () => void}) {

    function handleNonBackdropClick(e: SyntheticEvent) {
        e.stopPropagation();
    }

    return <>
        <div className="fixed right-0 top-0 bottom-0 h-dvh backdrop-blur-sm w-full" onClick={
            () => onBackdropClick()
        }>
            <div className="w-[50dvw] bg-white dark:bg-background-100 absolute right-0 top-0 bottom-0 h-dvh z-40 animate-apppearFromRight" onClick={handleNonBackdropClick}></div>
        </div>
    </>
}