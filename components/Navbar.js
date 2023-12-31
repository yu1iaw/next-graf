import Link from 'next/link';
import Image from 'next/image';

import { NavLinks } from '../constants';
import AuthProviders from './AuthProviders';



const Navbar = () => {
    const session = {};

    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="Dribble" width={115} height={43} />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map(l => (
                        <Link href={l.href} key={l.key}>{l.text}</Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        User Photo
                        <Link href="/create-project">
                            Share Work
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    )
}

export default Navbar;