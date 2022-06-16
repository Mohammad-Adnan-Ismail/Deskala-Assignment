import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const CreateCandidate = () => {
    
    

    return (
        <div className='flex h-screen justify-center items-center pr-24 '>
            <div className="card w-auto bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Create Candidate</h2>
                    <div className='flex'>
                        <div>
                            <form  className='pr-24' >
                                <div className="form-control w-full max-w-xs m-5">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="name"
                                        placeholder="Your Name"
                                        name="name"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs m-5">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Date Of Birth"
                                        
                                        name="date"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs m-5">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder="Your Age"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                            </form>
                        </div>
                        <div>
                            <form className='pr-24' >
                                <div className="form-control w-full max-w-xs m-5">
                                    <label className="label">
                                        <span className="label-text">Adress</span>
                                    </label>
                                    <input
                                        type="adress"
                                        placeholder="Adress"
                                        name="adress"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs m-5">
                                    <label className="label">
                                        <span className="label-text">State</span>
                                    </label>
                                    <input
                                        type="state"
                                        placeholder="State"
                                        name="state"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs m-5">
                                    <label className="label">
                                        <span className="label-text">Pin Code</span>
                                    </label>
                                    <input
                                        type="Number"
                                        placeholder="Pin Code"
                                        name="pincode"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                                <div className='flex'>
                                    <button class="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Cancel</button>
                                    <div class="divider divider-horizontal"></div>
                                    <button class="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default CreateCandidate;