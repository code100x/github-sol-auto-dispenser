"use client"
import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';

export default function Home() {
  return (
  <><div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r  to-[#2f10f8] text-gray-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-starry-night  z-[-1] animate-starry-night"></div>
      <img  
        src={logo.src}
        alt="LOGO" />
      <div className="flex items-center mb-8   from-[#c0c1ee] to-[#2f10f8] animate-fade-in-up">
        <h1 className="text-4xl font-bold from-[#c0c1ee] to-[#2f10f8]  text-[#352c43]">
<span className="text-[#f2f2f2] select-none font-montserrat">SOLIDPULL</span>

        </h1>
      </div>
      <div className="flex flex-col items-center animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="icon  mr-2">💰</span>
          <span className="shining-text select-none">
            GitHub Gold Rush - Pull, Earn, Repeat!
          </span>
        </h2>
        <p className="text-lg text-[#352c43] select-none">
          A platform for developers to earn money by contributing to open-source projects.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-40 lg:flex lg:px-8  lg:pt-20 animate-fade-in-up">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-[#352c43] sm:text-6xl">
            Unlock GitHub Success with CodeCoin Analytics
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#352c43]">
            Elevate your GitHub contributions with CodeCoin Analytics, a cutting-edge
            AI-powered platform. Gain an unparalleled advantage in open-source development by
            harnessing our advanced algorithms to analyze pull requests and identify optimal
            strategies. Stay ahead of the curve and maximize your rewards with CodeCoin
            Analytics, the ultimate tool for GitHub success
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button
              type="button"
              className="text-[#f1f1f1] bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#8e2de2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 animate-fade-in-up"
            >
              <Link href="/sign-in">Sign In</Link>
            </button>
            <a
              href="#demoVideo"
              className="text-sm font-semibold rounded-lg shadow-2xl leading-6 text-[#352c43] animate-fade-in-up"
            >
              Watch the demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0  lg:max-w-none lg:flex-none xl:ml-32 animate-fade-in-up">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/main_test2.png"
              alt="App screenshot"
              width="2432"
              height="1442"
              className="w-[76rem]  bg-white/5 shadow-2xl   x-auto my-4 rounded-lg ring-1 ring-white/10" />
          </div>
        </div>
      </div>

      <div
        id="demoVideo"
        className="mx-auto max-w-7xl -mb-24 px-6 flex justify-center items-center mt-10 flex-col animate-fade-in-up"
      >
        <p className="mt-8 mb-10 text-3xl font-bold tracking-tight text-[#352c43] sm:text-4xl">
          See SolidPull in action.
        </p>
        <video className="w-full max-w-3xl" controls>
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="Features" className="mx-auto mt-32 max-w-7xl  px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto  max-w-2xl text-center">
          <h2 className="text-base font-semibold  leading-7 text-purple"> Revolutionize GitHub Contributions </h2>
          <p className="mt-2  text-3xl font-bold tracking-tight text-white sm:text-4xl">
           Empowering GitHub Collaboration with Cutting-Edge Automation"
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          At SolidPull, we're transforming GitHub contributions. Our platform analyzes data to uncover invaluable insights, empowering contributors to make impactful pull requests. Join us as we revolutionize open-source collaboration."
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24  lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                  <svg
                    className="h-6 w-6 text-white"
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
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                 SolidPull offers a secure bounty distribution platform designed to address the challenges of unauthorized bounty claims. Our solution ensures that payments are securely transferred to deserving contributors, eliminating the risk of fraudulent activity. With robust security measures in place, contributors can trust that their rewards are distributed fairly and transparently.
                </p>
                <p className="mt-6">
                  <a href="#demoVideo" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
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
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
               Simplify repository management with SolidPull's intuitive platform. Repository maintainers have complete control over bounty distribution, with the ability to review and approve payments seamlessly. Our user-friendly interface streamlines administrative tasks, allowing maintainers to focus on nurturing a vibrant open-source community.
                </p>
                <p className="mt-6">
                  <a href="#demoVideo" className="text-sm font-semibold leading-6text-white text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                  <svg
                    className="h-6 w-6 text-white"
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
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                 SolidPull's flexible infrastructure supports unlimited repositories, enabling organizations to scale their bounty programs effortlessly. Whether you're managing a single repository or an entire organization, our platform adapts to your needs. With customizable features and robust support for contributors, SolidPull empowers organizations to foster collaboration and drive innovation across diverse projects.

                </p>
                <p className="mt-6">
                  <a href="#demoVideo" className="text-sm font-semibold leading-6text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-2xl   to-[#2f10f8] text-gray-300 sm:text-center">
        <h2 className="text-base font-semibold leading-7 text-purple-900">Everything you need</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empowering Open-Source Collaboration
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          SolidPull simplifies bounty management and payment security, empowering contributors and maintainers alike to drive open-source projects forward. Join us in revolutionizing collaborative development.
        </p>
      </div>

<img
    src="/main_test1.png"
    alt="App screenshot"
    className="mx-auto my-4 rounded-lg shadow-md"
    width="800"
    height="600"
/>


    </div>
<div id="" className="relative  mt-40">
                <div>
                 <img    width="2432"
              height="1442"
     className="h-full w-full bg-gray-50  shadow-md object-cover rounded-lg  lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2" src="/main_test3.png" alt="">
                  
                  
                </img>

                
                
                 
                </div>
    <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-8 text-purple-400">The Future of Open-Source in Crypto
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"> Revolutionizing Open-Source with SolidPull </p>
                      <p className="mt-6 text-lg leading-8 text-gray-300">The Ethereum (ETH) ERC-20 utility token driving SolidPull's ecosystem. $SOLID offers users exclusive benefits, including instant bounty claim , early feature access, more.</p>
                      <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                        <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
                          <dt className="text-sm leading-6 text-gray-300"> claim bounty </dt>
                          <dd className="order-first text-3xl font-semibold tracking-tight text-white"> No Fees, Direct Payments </dd>
                        </div>
                        <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
                          <dt className="text-sm leading-6 text-gray-300">Organized Repository Management</dt>
                          <dd className="order-first text-3xl font-semibold tracking-tight text-white">Effortlessly manage repositories </dd>
                        </div>
                        <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
                          <dt className="text-sm leading-6 text-gray-300">enhanced collaboration</dt>
                          <dd className="order-first text-3xl font-semibold tracking-tight text-white">Bonus</dd>
                        </div>
                        <div className="flex flex-col gap-y-3 border-l border-gray-white pl-6">
                          <dt className="text-sm leading-6 text-gray-300">In our Discord community</dt>
                          <dd className="order-first text-3xl font-semibold tracking-tight text-white">Perks</dd>
                        </div>
                      </dl>
                    </div>
                    </div>

                <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                      <img      src={logo.src} className="h-30 "></img>
                      <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">How to Claim Your Bounty with SolidPull? </h2>
                      <p className="mt-4 text-base leading-7 text-black-300">Note: Note: The bounty will be available for claiming upon the merge of your pull request.</p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                      <dl className="space-y-10">
                        <div>
                          <dt className="text-base font-semibold leading-7 text-white">Step 1. Copy Your Public Wallet Key</dt>
                          <dd className="mt-2 text-base leading-7 text-gray-300">If you don't have a crypto wallet, set up one through metamask.io. Once your pull request is merged, simply copy your public wallet key.</dd>
                        </div>

        

                        <div>
                          <dt className="text-base font-semibold leading-7 text-white">Step 2. Sign Up on SolidPull</dt>
                          <dd className="mt-2 text-base leading-7 text-gray-300">Follow the link provided by our bot in the repository comment to sign up on SolidPull..</dd>
                        </div>

                        <div>
                          <dt className="text-base font-semibold leading-7 text-white">Step 3. Paste Your Wallet Key</dt>
                          <dd className="mt-2 text-base leading-7 text-gray-300">After signing up, paste your public wallet key into the designated field.</dd>
                        </div>
              
                              <div>
                          <dt className="text-base font-semibold leading-7 text-white">Step 4. Claim Your Bounty </dt>
                          <dd className="mt-2 text-base leading-7 text-gray-300">Visit your profile on SolidPull to locate your pending bounty. With a single click, claim your bounty and receive it instantly.</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div> 
                
<div className="border-t border-white/10 pt-8 mb-8 md:flex md:items-center md:justify-between">
    <div className="flex space-x-6  mr-5 md:order-2">

     
        
        <a href="" className="text-purple-500">
            <span className="sr-only">X</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
            </svg>
        </a>
        
        <a href="" className="text-purple-500">
            <span className="sr-only">Discord</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.2 0H2.8C1.253 0 0 1.253 0 2.8v18.4c0 1.547 1.253 2.8 2.8 2.8h18.4c1.547 0 2.8-1.253 2.8-2.8V2.8C24 1.253 22.747 0 21.2 0zM20 16c0 .14-.038.266-.038.4-.108.6-.344 1.133-.7 1.6-.266.333-.6.574-.974.734-.04.02-.06.06-.084.094-.56.616-1.32.966-2.1 1.166-.28.06-.574.094-.854.094h-.034c-.76 0-1.513-.174-2.2-.54-.34-.194-.666-.44-.96-.72-.2-.166-.387-.346-.54-.547-.34-.46-.56-1.007-.653-1.587 0-.134-.038-.266-.038-.407V9.354c.046-.08.1-.147.14-.22.24-.393.593-.693 1.007-.88.306-.134.633-.22.98-.22.313 0 .62.067.9.22.34.14.64.353.906.62.2.193.38.42.54.66.293.533.486 1.133.607 1.74 0 .147.046.294.046.44V16zm-3.72-7.307c.6 0 1.093.493 1.093 1.093 0 .6-.493 1.094-1.093 1.094-.6 0-1.094-.493-1.094-1.094 0-.6.493-1.093 1.094-1.093zm-5.244 0c.6 0 1.093.493 1.093 1.093 0 .6-.493 1.094-1.093 1.094-.6 0-1.094-.493-1.094-1.094 0-.6.494-1.093 1.094-1.093zM10.5 20.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.415.335-.75.75-.75s.75.335.75.75zM15.75 20.25c0 .414-.335.75-.75.75-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75.415 0 .75.335.75.75z"></path>
            </svg>
        </a>
        
      
    </div>
    <p className="mt-8 text-xs leading-5 ml-5 text-black-400 md:order-1 md:mt-0">© 2024  SOLIDPULL Technology LLC. All rights reserved.</p>
</div>



            
               
                   

    <style jsx>{`
        @keyframes shine {
          from {
            background-position: -300% center;
          }
          to {
            background-position: 300% center;
          }
        }
  .shining-text {
  position: relative;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #c0c1ee 0%,
    #2f10f8 50%,
    #c0c1ee 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  animation: shine 8s linear infinite; /* Slower animation */
  background-size: 400% 100%;
}

@keyframes shine {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% -100%;
  }
}

        .bg-starry-night {
          background-image: url('/starry-night.png');
          background-size: 200% 200%;
          animation: starry-night 60s linear infinite;
        }
        .animate-starry-night {
          animation: starry-night 60s linear infinite;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style></>
    
  );
}