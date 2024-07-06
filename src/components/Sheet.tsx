
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const problems = [
    {name : "nastya and the array", judge: 'codeforces.com'},
    {name : "nastya and the MAC", judge: 'codeforces.com'},
    {name : "nastya and nic problem", judge: 'codechef.com'},
    {name : "MEX and the clown game", judge: 'leetcode.com'},
    {name : "nastya and the array", judge: 'codeforces.com'},
    {name : "nastya and the MAC", judge: 'codeforces.com'},
    {name : "nastya and nic problem", judge: 'codechef.com'},
    {name : "MEX and the clown game", judge: 'leetcode.com'},
    {name : "nastya and the array", judge: 'codeforces.com'},
    {name : "nastya and the MAC", judge: 'codeforces.com'},
    {name : "nastya and nic problem", judge: 'codechef.com'},
    {name : "MEX and the clown game", judge: 'leetcode.com'},

]
const Sheet = () => {
  return (
    <div className='w-full space-y-2 font-medium'>
        <div className='grid grid-cols-12 text-sm space-x-2'>
            <div className='col-span-1 flex items-center justify-center border-2 p-2 border-gray-200'>
                    No
            </div>
            <div className='col-span-9 md:col-span-7 flex items-center justify-start border-2 p-2 border-gray-200'>
                    Problem Name
            </div>
            <div className='col-span-2 md:col-span-4 flex items-center justify-center border-2 p-2 border-gray-200'>
                    Judge
            </div>
        </div>
        {problems.map((problem, index) => (
            <div key = {index} className='grid grid-cols-12 text-sm space-x-2'>
                <div className='col-span-1 flex items-center justify-center border-2 p-2 border-gray-200'>
                        {index + 1}
                </div>
                <Link href = "/" className='col-span-9 md:col-span-7 flex items-center justify-start border-2 p-2 border-gray-200'>
                        {problem.name}
                </Link>
                <div className='col-span-2 md:col-span-4 flex items-center justify-center border-2 p-2 border-gray-200'>
                        <Link href = {`https://${problem.judge}`} className='flex flex-wrap gap-2 font-normal'>
                            <Image
                            src={`/${problem.judge}.png`}
                            width={20}
                            height={20}
                            alt = "judge"
                            className='flex '
                            />
                            <div className='hidden md:flex'>
                                {problem.judge}
                            </div>
                        </Link>
                </div>
            </div>          
        ))}
    </div>
  )
}

export default Sheet