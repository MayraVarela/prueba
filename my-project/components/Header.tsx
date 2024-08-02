"use client";

import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header({ onSearch }: { onSearch: (query: string) => void }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleSearch = () => {
        onSearch(query)
        setQuery('')
        setSearchOpen(false)
    }

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://www.ipglobal.es/wp-content/uploads/2017/12/logo-ipg-techhub.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="cursor-pointer object-contain invert"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">
                    <Link href="/mylist"> My List</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <div className="relative">
                    <SearchIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => setSearchOpen(!searchOpen)}
                    />
                    {searchOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white p-2 rounded shadow-lg">
                            <input
                                type="text"
                                placeholder="Search movies..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="border p-1 rounded text-black"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-blue-500 text-white p-1 rounded mt-2"
                            >
                                Search
                            </button>
                        </div>
                    )}
                </div>
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account">
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header
