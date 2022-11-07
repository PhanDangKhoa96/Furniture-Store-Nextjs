import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from './../../helper/classNames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NextImage from '../../helper/NextImage/NextImage';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Else, If, Then } from 'react-if';
import { useWindowScroll } from 'react-use';
import Cart from '../Cart/Cart';
import Image from 'next/image';
import SignIn from './SignIn';

const Header = () => {
    const { pathname } = useRouter();
    const { y } = useWindowScroll();

    const [isScrollDown, setIsScrollDown] = useState(false);
    const [previousY, setPreviousY] = useState(y);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/product' },
        { name: 'Blog', href: '/blog' },
        { name: 'Checkout', href: '/checkout' }
    ];

    navigation.map((item) => {
        if (item.href === pathname) {
            return (item.current = true);
        }

        return (item.current = false);
    });

    useEffect(() => {
        if (y < previousY) {
            setIsScrollDown(true);
        } else {
            setIsScrollDown(false);
        }
        setPreviousY(y);
    }, [y]);

    return (
        <Disclosure
            as="nav"
            className={`bg-white-chocolate absolute w-full z-[1000] transition duration-500 ${
                y > 100 ? 'shadow-lg !fixed' : ''
            } ${
                isScrollDown && y > 300 ? '-translate-y-full' : 'translate-y-0'
            }`}>
            {({ open }) => (
                <>
                    <div className="container">
                        <div className="grid grid-cols-[1fr_auto_1fr] h-16 items-center">
                            <div className="flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <Link href="/">
                                <div className="h-16 relative z-10 aspect-square cursor-pointer">
                                    <Image
                                        src="/logo-black.svg"
                                        layout="fill"
                                        objectPosition="0% 50%"
                                        alt="logo aries"
                                    />
                                </div>
                            </Link>
                            <div className="hidden flex-1 items-center justify-center md:items-stretch md:justify-start md:flex">
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-2">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}>
                                                <span
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md nav-link cursor-pointer'
                                                    )}>
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-x-2 justify-self-end items-center">
                                <Cart />
                                <div className="hidden md:block">
                                    <SignIn />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition duration-300 ease-out"
                        enterFrom="scale-95 opacity-0 -translate-y-5"
                        enterTo="scale-100 opacity-100 translate-y-0"
                        leave="transition duration-200 ease-out"
                        leaveFrom="scale-100 opacity-100 translate-y-0 "
                        leaveTo="scale-95 opacity-0 -translate-y-5">
                        <Disclosure.Panel className="md:hidden">
                            <div className="container pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                        <Disclosure.Button
                                            as="span"
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-900 text-white'
                                                    : 'hover:bg-gray-700',
                                                'block px-3 py-2 rounded-md text-base nav-link'
                                            )}
                                            aria-current={
                                                item.current
                                                    ? 'page'
                                                    : undefined
                                            }>
                                            {item.name}
                                        </Disclosure.Button>
                                    </Link>
                                ))}

                                <SignIn />
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
