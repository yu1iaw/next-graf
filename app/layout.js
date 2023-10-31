// import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';
// const inter = Inter({ subsets: ['latin'] });


export const metadata = {
    title: 'Next App',
    description: 'Manual next settings'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='text-gray-800'>
                <main>
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            
            </body>
        </html>
    )
}