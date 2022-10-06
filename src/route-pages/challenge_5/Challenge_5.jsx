import deskBg from './mockups/images/bg-desktop.png'
import './css/challenge_5.css'
import { useState } from 'react'
export const Challenge_5 = () => {
    return (
        <>
            <div className=" bg-[#0c122c] w-screen min-h-screen flex items-center bg-no-repeat bg-contain bg-bottom" style={{ backgroundImage: `url(${deskBg})` }}>
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-3/4 md:w-3/4 lg:w-[60vw] xl:w-1/2 m-3">
                            <div className="block md:flex">
                                <div className="w-full md:w-1/3 p-7 flex flex-col bg-[#1d2c67] shadow-lg rounded-md rounded-tr-[4rem]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40"><path fill="#FFF" fill-rule="evenodd" d="M0 12.593v.1L22.823 23.28l22.903-10.624v-.027L22.823 2.006 0 12.593zm8.228.05l14.595-6.77 14.597 6.77-14.597 6.77-14.595-6.77zm14.595 14.75L0 16.962v3.857l22.823 10.453 22.903-10.488v-3.858L22.823 27.392zm0 7.822L0 24.785v3.858l22.823 10.454 22.903-10.49V24.75L22.823 35.215zM129.796 20.17a6.604 6.604 0 00-1.752-4.533 5.888 5.888 0 00-1.897-1.36 5.554 5.554 0 00-2.313-.49c-.819 0-1.59.164-2.313.49a5.886 5.886 0 00-1.897 1.36 6.605 6.605 0 00-1.753 4.533 6.604 6.604 0 001.753 4.533 5.886 5.886 0 001.897 1.36c.723.326 1.494.49 2.313.49.82 0 1.59-.164 2.313-.49a5.888 5.888 0 001.897-1.36 6.603 6.603 0 001.753-4.533zm5.204 0c0 1.571-.29 3.028-.867 4.37a10.654 10.654 0 01-2.385 3.48 11.348 11.348 0 01-3.56 2.322 11.19 11.19 0 01-4.354.852c-1.542 0-2.987-.284-4.336-.852a11.241 11.241 0 01-3.541-2.34 10.86 10.86 0 01-2.385-3.499c-.578-1.341-.868-2.786-.868-4.333 0-1.523.296-2.956.886-4.297a11.322 11.322 0 012.403-3.518 11.087 11.087 0 013.541-2.357 10.966 10.966 0 014.3-.852c1.542 0 2.993.284 4.354.852a11.347 11.347 0 013.56 2.321 10.605 10.605 0 012.385 3.5c.578 1.353.867 2.804.867 4.35zM110.898 30.54c-.41.193-.874.35-1.392.471a7.05 7.05 0 01-1.608.182c-.77 0-1.511-.103-2.222-.308a4.864 4.864 0 01-1.86-.998c-.53-.459-.952-1.057-1.266-1.795-.313-.737-.47-1.625-.47-2.665V.552h5.313v23.97c0 .87.174 1.468.523 1.794.35.327.765.49 1.247.49.602 0 1.18-.181 1.735-.544v4.28zM99.732 9.654l-9.395 24.912c-.699 1.862-1.614 3.203-2.747 4.025-1.132.822-2.481 1.233-4.047 1.233a6.426 6.426 0 01-1.626-.217l-1.734-4.86c.409.194.83.345 1.264.454.434.109.843.163 1.229.163.819 0 1.566-.187 2.24-.562.675-.375 1.193-1.07 1.554-2.085l.723-2.103-8.058-20.96h5.673l4.806 13.49 4.517-13.49h5.6zM77.87 6.499H64.283v6.745h13.406v4.569H64.283V30.65H58.79V1.676h19.08v4.823z" /></svg>
                                    <div className="flex mt-6">
                                        <button className="p-2 rounded flex justify-center items-center bg-[#0c122c]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#697ED4" d="M21.6 2.4H12L9.6 0H2.4A2.39 2.39 0 00.012 2.4L0 16.8a2.4 2.4 0 002.4 2.4h19.2a2.4 2.4 0 002.4-2.4v-12a2.4 2.4 0 00-2.4-2.4z" /></svg>
                                        </button>
                                        <button className="p-2 ml-3 rounded flex justify-center items-center bg-[#0c122c]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path fill="#697ED4" d="M12.028 0H2.436A2.387 2.387 0 00.049 2.398L.037 21.583a2.387 2.387 0 002.387 2.398h14.4a2.397 2.397 0 002.398-2.398V7.194L12.028 0zM10.83 8.393V1.8l6.595 6.594h-6.595z" /></svg>
                                        </button>
                                        <button className="p-2 ml-3 rounded flex justify-center items-center bg-[#0c122c]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16"><path fill="#697ED4" d="M19.4 6c-.7-3.4-3.7-6-7.4-6-2.9 0-5.4 1.6-6.6 4C2.3 4.4 0 6.9 0 10c0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2.1-4.8-4.6-5zM14 9v4h-4V9H7l5-5 5 5h-3z" /></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 md:ml-4 mt-8 p-7 bg-[#1d2c67] shadow-lg rounded-md">
                                    <p className=' text-[#dddbff] text-lg'>You've used <span className=' font-bold'>815 GB</span> of your storage</p>
                                    <div className="flex flex-col mt-4">
                                        <div className="w-full rounded-xl flex h-5 bg-[#0c122c]">
                                            <div className="w-1/2 rounded-lg m-[0.125rem] bg-gradient-to-r from-[#ffa399] to-[#ff4d97] h-4 flex">
                                                <div className="h-3 w-3 bg-white rounded-full ml-auto my-auto mr-[2px]">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className='text-[#dddbff] text-sm font-semibold'>0 GB</p>
                                            <p className='text-[#dddbff] text-sm font-semibold'>1000 GB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}