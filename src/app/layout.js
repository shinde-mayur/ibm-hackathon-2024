import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "UniVicinity",
};


import { ToastContainer } from 'react-toastify';
export default function RootLayout({ children }) {
    return (

        <html className="h-full ">
            <body className="h-full bg-white">
                {children}
                <ToastContainer />
            </body>
        </html >
    );
}
