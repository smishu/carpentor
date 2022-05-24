import React from 'react';
import profile from '../../Assets/profile.ae46fec81078c7b146a5.png';

const Profile = () => {
    return (
        <div className='flex items-center justify-self-auto'>
            <div className='w-1/2 '>
                <h3>Hi I'm <span>Mithila!!</span> </h3>
                <p>I am currently a student I want to do a job as a junior developer,
                    And I want to work at Google as a good developer in the future.
                    Current Currently planning to find a job for myself as a junior developer.</p>
            </div>
            <div><img src={profile} alt="" /></div>


        </div>
    );
};

export default Profile;