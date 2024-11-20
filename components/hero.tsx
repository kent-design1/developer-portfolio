"use client";
import React from "react";
import {FlipWordsDemo} from "@/components/ui/flashingtext";
import "../app/globals.css"
export function Hero() {
    return (
        <div className="min-h-screen padding flex flex-col items-center justify-center relative w-full">
        <FlipWordsDemo />
            </div>
            );
            }