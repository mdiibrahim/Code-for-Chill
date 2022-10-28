import React from 'react';

const Error = () => {
    return (
        <div className='justify-centen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Ooooppppsss!!</h2>
                    <p>You are in wrong place.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline">Go Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;