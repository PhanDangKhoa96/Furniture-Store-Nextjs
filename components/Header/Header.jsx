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

const Header = () => {
    const { pathname } = useRouter();
    const { y } = useWindowScroll();

    const [isScrollDown, setIsScrollDown] = useState(false);
    const [previousY, setPreviousY] = useState(y);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Shop', href: '/product' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    navigation.map((item) => {
        if (item.href === pathname) {
            return (item.current = true);
        }

        return (item.current = false);
    });

    const { data: session } = useSession();

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
                        <div className="flex h-16 items-center justify-between">
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
                                <div className="h-full relative z-10 cursor-pointer">
                                    <NextImage
                                        src="/logo-black.svg"
                                        alt="logo aries"
                                        objectPosition="0% 50%"
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

                            <Cart />
                            <If condition={session}>
                                <Then>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                                    <NextImage
                                                        src={
                                                            session?.user?.image
                                                        }
                                                    />
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'menu-item'
                                                            )}>
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'menu-item'
                                                            )}>
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={signOut}
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'menu-item'
                                                            )}>
                                                            Sign out
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </Then>
                                <Else>
                                    <button
                                        onClick={() => signIn()}
                                        className="bg-gray-900 text-white nav-link px-3 py-2 rounded-md cursor-pointer">
                                        Sign in
                                    </button>
                                </Else>
                            </If>
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
                            <div className="space-y-1 px-2 pt-2 pb-3">
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
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
