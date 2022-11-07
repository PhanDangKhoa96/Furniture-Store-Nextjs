import React, { Fragment } from 'react';
import { Else, If, Then } from 'react-if';
import { Menu, Transition } from '@headlessui/react';
import NextImage from '../../helper/NextImage/NextImage';
import classNames from '../../helper/classNames';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignIn = () => {
    const { data: session } = useSession();

    return (
        <If condition={session}>
            <Then>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                            <span className="sr-only">Open user menu</span>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <NextImage src={session?.user?.image} />
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
                                            active ? 'bg-gray-100' : '',
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
                                            active ? 'bg-gray-100' : '',
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
                                            active ? 'bg-gray-100' : '',
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
    );
};

export default SignIn;
