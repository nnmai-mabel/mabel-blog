import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsGithub, BsLinkedin} from 'react-icons/bs'

export default function FooterComponent() {
    return (
        <Footer container className="border border-t-8 border-cyan-200">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link
                            to="/"
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-blue-800 via-cyan-600 to-teal-300 rounded-lg text-white'>
                                Mabel's
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://github.com/nnmai-mabel/mabel-blog"
                                    target="_blank"
                                    rel="noopenner noreferrer" // don't block popup
                                >
                                    Source code
                                </Footer.Link>
                                <Footer.Link
                                    href="/about"
                                    target="_blank"
                                    rel="noopenner noreferrer" // don't block popup
                                >
                                    Mabel's blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow me" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://github.com/nnmai-mabel"
                                    target="_blank"
                                    rel="noopenner noreferrer" // don't block popup
                                >
                                    GitHub
                                </Footer.Link>
                                <Footer.Link
                                    href="https://www.linkedin.com/in/mabelnguyen/"
                                    target="_blank"
                                    rel="noopenner noreferrer" // don't block popup
                                >
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="#"
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href="#"
                                >
                                    Terms &amp; Condition
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright 
                    href="#" 
                    by="Mabel's blog" 
                    year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href="https://github.com/nnmai-mabel" target="_blank" icon={BsGithub} />
                        <Footer.Icon href="https://www.linkedin.com/in/mabelnguyen/" target="_blank" icon={BsLinkedin} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}
