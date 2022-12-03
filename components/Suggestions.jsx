import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
const Suggestions = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData([...Array(5)].map((profile) => ({
            userId: faker.datatype.uuid(),
            userName: faker.internet.userName(),
            avatar: faker.image.avatar()
        })))
    }, [])
    console.log(data)
    return (
        <div className='mt-4'>
            <div className="flex items-center justify-between">
                <p className='text-sm font-semibold text-gray-400 mt-1'>Suggestions for you</p>
                <button className='font-semibold text-xs'>See All</button>
            </div>
            {data.map((profile) => (
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center">
                        <div className="w-8 h-8">
                            <img src={profile.avatar} alt="" className='rounded-full' />
                        </div>
                        <div className="ml-4">
                            <p className='text-sm font-semibold'>{profile.userName}</p>
                            <p className='text-xs text-gray-500'>Suggested for you</p>
                        </div>
                    </div>
                    <button className='text-xs font-semibold text-[#0095f6]'>Follow</button>
                </div>
            ))}
            <div className="flex flex-wrap text-xs mt-6 text-semibold text-[#d2d2d2] cursor-pointer space-x-1">
                <p>About</p>
                <span>&#183;</span>
                <p>Help</p>
                <span>&#183;</span>
                <p>Press</p>
                <span>&#183;</span>
                <p>Api</p>
                <span>&#183;</span>
                <p>Jobs</p>
                <span>&#183;</span>
                <p>Privacy</p>
                <span>&#183;</span>
                <p>Terms</p>
                <span>&#183;</span>
                <p>Locations</p>
                <span className='mt-1'>&#183;</span>
                <p className='mt-1'>Language</p>
            </div>
            <div className="text-xs mt-6 text-semibold text-[#d2d2d2]">
                <p>Made With ❤️ By <a href="https://goutham.codes">Goutham</a></p>
            </div>
        </div>
    )
}

export default Suggestions