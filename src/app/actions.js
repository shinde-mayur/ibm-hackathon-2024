'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
export async function signout() {
    cookies().delete('token')
    redirect('/login')

}