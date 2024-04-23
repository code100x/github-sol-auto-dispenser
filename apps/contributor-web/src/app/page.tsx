'use client';
import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';

export default function Home() {
  return (
    <>
      <section>
        <div className='wrapper grid justify-items-center'>
          <img
            src={logo.src}
            alt="LOGO"
            className="drop-shadow-[0_0px_100px_#f97316] hover:drop-shadow-[0_5px_5px_rgba(245,158,11,1)] duration-500"
            />
            <div className="flex items-center mb-8 from-[#c0c1ee] to-[#2f10f8] animate-fade-in-up">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 via-pink-400 to-orange-200 bg-clip-text text-transparent drop-shadow-xl select-none font-montserrat">
                SOLIDPULL
              </h1>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-x-2">
                <span className="icon">💰</span>
                <span className="bg-gradient-to-r from-slate-50 via-yellow-500 to-orange-500 bg-clip-text text-transparent select-none">
                  GitHub Gold Rush - Pull, Earn, Repeat!
                </span>
              </h2>
              <p className="text-lg font-medium select-none text-transparent bg-gradient-to-r from-slate-400/70 via-slate-300/70 to-pink-200/70 bg-clip-text">
                A platform for developers to earn money by contributing to
                open-source projects.
              </p>
          </div>
        </div>
      </section>
      <section className='full-width-split-screen'>
        <div className='gap-8'>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Unlock GitHub Success with CodeCoin Analytics
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Elevate your GitHub contributions with CodeCoin Analytics, a
            cutting-edge AI-powered platform. Gain an unparalleled advantage
            in open-source development by harnessing our advanced algorithms
            to analyze pull requests and identify optimal strategies. Stay
            ahead of the curve and maximize your rewards with CodeCoin
            Analytics, the ultimate tool for GitHub success
          </p>
          <div className="flex items-center gap-x-6">
            <button
              type="button"
              className="text-[#f1f1f1] bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#8e2de2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 animate-fade-in-up"
            >
              <Link href="/sign-in">Sign In</Link>
            </button>
            <a
              href="#demoVideo"
              className="text-sm font-semibold rounded-lg shadow-2xl leading-6 text-slate-200 animate-fade-in-up"
            >
              Watch the demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          src="/main_test2.png"
          alt="App screenshot"
          width="2432"
          height="1442"
          className="bg-white/5 shadow-[0_0px_100px_#f9731645] rounded-lg object-left-top ml-10 ring-1 ring-neutral-700"
        />
      </section>
      <section id="demoVideo">
        <div className='wrapper grid place-items-center gap-8 py-8'>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl w-fit">
            See SolidPull in action.
          </p>
          <video className="w-full max-w-5xl shadow-[0_0px_200px_#f9731620] ring-1 ring-neutral-700" controls>
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section id="Features">
        <div className='wrapper grid place-items-center gap-8'>
          <div className="grid gap-5 text-center max-w-[70ch]">
            <h2 className="text-base font-semibold leading-7 text-slate-300">
              Revolutionize GitHub Contributions
            </h2>
            <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empowering GitHub Collaboration with Cutting-Edge Automation"
            </p>
            <p className="text-lg leading-8 text-slate-300">
              At SolidPull, we're transforming GitHub contributions. Our
              platform analyzes data to uncover invaluable insights, empowering
              contributors to make impactful pull requests. Join us as we
              revolutionize open-source collaboration."
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-10">
            <dl className="grid gap-1 grid-rows-[max-content]">
              <dt className="text-base font-semibold leading-7 text-white grid gap-4">
                <div className="grid place-items-center h-10 aspect-square rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 ">
                  <svg
                    className="h-6 aspect-square text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    ></path>
                  </svg>
                </div>
                Secure Bounty Distribution Platform
              </dt>
              <dd className="grid gap-5 content-between text-base leading-7 text-slate-300">
                <p>
                  SolidPull offers a secure bounty distribution platform
                  designed to address the challenges of unauthorized bounty
                  claims. Our solution ensures that payments are securely
                  transferred to deserving contributors, eliminating the risk
                  of fraudulent activity. With robust security measures in
                  place, contributors can trust that their rewards are
                  distributed fairly and transparently.
                </p>
                <a
                  href="#demoVideo"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </dd>
            </dl>
            <dl className="grid gap-1 grid-rows-[max-content]">
              <dt className="text-base font-semibold leading-7 text-white grid gap-4">
                <div className="grid place-items-center h-10 aspect-square rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 aspect-square text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25Z"
                    ></path>
                  </svg>
                </div>
                Intuitive Repository Management
              </dt>
              <dd className="grid gap-5 content-between text-base leading-7 text-slate-300">
                <p>
                  Simplify repository management with SolidPull's intuitive
                  platform. Repository maintainers have complete control over
                  bounty distribution, with the ability to review and approve
                  payments seamlessly. Our user-friendly interface streamlines
                  administrative tasks, allowing maintainers to focus on
                  nurturing a vibrant open-source community.
                </p>
                <a
                  href="#demoVideo"
                  className="text-sm font-semibold leading-6text-white text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </dd>
            </dl>
            <dl className="grid gap-1 grid-rows-[max-content]">
              <dt className="text-base font-semibold leading-7 text-white grid gap-4">
                <div className="grid place-items-center h-10 aspect-square rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 ">
                  <svg
                    className="h-6 aspect-square text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    ></path>
                  </svg>
                </div>
                Scalable Bounty Infrastructure
              </dt>
              <dd className="grid gap-5 content-between text-base leading-7 text-slate-300">
                <p>
                  SolidPull's flexible infrastructure supports unlimited
                  repositories, enabling organizations to scale their bounty
                  programs effortlessly. Whether you're managing a single
                  repository or an entire organization, our platform adapts to
                  your needs. With customizable features and robust support
                  for contributors, SolidPull empowers organizations to foster
                  collaboration and drive innovation across diverse projects.
                </p>
                <a
                  href="#demoVideo"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <section>
        <div className='wrapper grid place-items-center gap-8'>
          <div className="grid gap-5 text-center max-w-[70ch]">
            <h2 className="text-base font-semibold leading-7 text-slate-300">
              Everything you need
            </h2>
            <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empowering Open-Source Collaboration
            </p>
            <p className="text-lg leading-8 text-slate-300">
              SolidPull simplifies bounty management and payment security,
              empowering contributors and maintainers alike to drive open-source
              projects forward. Join us in revolutionizing collaborative
              development.
            </p>
          </div>
          <img
            src="/main_test1.png"
            alt="App screenshot"
            className="w-full max-w-5xl rounded-lg shadow-[0_0px_200px_#f9731620] ring-1 ring-neutral-700"
          />
        </div>
      </section>
      <section className='full-width-split-screen gap-20'>
        <img
          width="2432"
          height="1442"
          className="bg-white/5 shadow-[0_0px_100px_#f9731645] rounded-lg object-center ring-1 ring-neutral-700"
          src="/main_test3.png"
          alt=""
        />
        <div className="gap-5">
          <h2 className="text-base font-semibold leading-8 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent select-none">
            The Future of Open-Source in Crypto
          </h2>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Revolutionizing Open-Source with SolidPull
          </p>
          <p className="text-lg leading-8 text-slate-300">
            The Ethereum (ETH) ERC-20 utility token driving SolidPull's
            ecosystem. $SOLID offers users exclusive benefits, including instant
            bounty claim , early feature access, more.
          </p>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-5">
            <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
              <dt className="text-sm leading-6 text-slate-300">
                claim bounty
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                No Fees, Direct Payments
              </dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
              <dt className="text-sm leading-6 text-slate-300">
                Organized Repository Management
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                Effortlessly manage repositories
              </dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
              <dt className="text-sm leading-6 text-slate-300">
                enhanced collaboration
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                Bonus
              </dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
              <dt className="text-sm leading-6 text-gray-300">
                In our Discord community
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                Perks
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section>
        <div className='wrapper grid grid-cols-2'>
          <div className='grid gap-4 content-center pr-20'>
            <img src={logo.src} className="h-30"></img>
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
              How to Claim Your Bounty with SolidPull?{' '}
            </h2>
            <p className="text-base leading-7 text-slate-300">
              Note: Note: The bounty will be available for claiming upon the
              merge of your pull request.
            </p>
          </div>
          <div className='grid gap-10'>
            <dl className='grid gap-2'>
              <dt className="text-base font-semibold leading-7 text-white">
                Step 1. Copy Your Public Wallet Key
              </dt>
              <dd className="text-base leading-7 text-slate-300">
                If you don't have a crypto wallet, set up one through
                metamask.io. Once your pull request is merged, simply copy
                your public wallet key.
              </dd>
            </dl>

            <dl className='grid gap-2'>
              <dt className="text-base font-semibold leading-7 text-white">
                Step 2. Sign Up on SolidPull
              </dt>
              <dd className="text-base leading-7 text-slate-300">
                Follow the link provided by our bot in the repository comment
                to sign up on SolidPull..
              </dd>
            </dl>

            <dl className='grid gap-2'>
              <dt className="text-base font-semibold leading-7 text-white">
                Step 3. Paste Your Wallet Key
              </dt>
              <dd className="text-base leading-7 text-slate-300">
                After signing up, paste your public wallet key into the
                designated field.
              </dd>
            </dl>

            <dl className='grid gap-2'>
              <dt className="text-base font-semibold leading-7 text-white">
                Step 4. Claim Your Bounty{' '}
              </dt>
              <dd className="text-base leading-7 text-slate-300">
                Visit your profile on SolidPull to locate your pending bounty.
                With a single click, claim your bounty and receive it
                instantly.
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <footer className='ring-1 ring-slate-700 py-10'>
        <div className='wrapper flex w-full justify-between'>
          <p className="text-xs leading-5  text-slate-200 ">
            © 2024 SOLIDPULL Technology LLC. All rights reserved.
          </p>
          <a href="https://twitter.com/solid_pull" className="text-slate-100">
            <span className="sr-only">X</span>
            <svg
              className="h-6 mr-5 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
