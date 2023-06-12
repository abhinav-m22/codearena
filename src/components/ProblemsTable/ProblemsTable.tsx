import React from 'react';
import { problems } from '@/problems/problems';
import { BsCheckCircle } from 'react-icons/bs'
import Link from 'next/link';
import { AiFillYoutube } from 'react-icons/ai';

type ProblemsTableProps = {

};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {

    return (
        <tbody className='text-white'>
            {problems.map((item, index) => {

                const difficulty = item.difficulty === "Easy" ? 'text-dark-green-s' : item.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";

                return (
                    <tr className={`${index % 2 == 1 ? 'bg-dark-layer-1' : ''}`} key={item.id}>
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={18} width={18} />
                        </th>
                        <td className='px-6 py-4'>
                            <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${item.id}`}>
                                {item.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${difficulty}`}>
                            {item.difficulty}
                        </td>
                        <td className='px-6 py-4'>
                            {item.category}
                        </td>
                        <td className='px-6 py-4'>
                            {item.videoId ? (
                                <AiFillYoutube 
                                    fontSize={20}
                                    className='cursor-pointer hover:text-red-500'
                                />
                            ) : (
                                <p className='text-gray-400'>Coming Soon</p>
                            )}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default ProblemsTable;