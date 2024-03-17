"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function CompanyAbout () {
    const router = useRouter();
    return (
        <div>
        <h1>About Us</h1>
        <p>We are a technology company specializing in phones and tablets</p>
        </div>
    )
}