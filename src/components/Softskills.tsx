'use client'

import SmallError from './Helper/SmallError'
import SmallLoader from './Helper/SmallLoader'
import { SoftskillsResponse } from '@/@types'
import { useSoftskillsQuery } from '@/hooks/useSoftskillsQuery'

const Softskills = () => {
    const {
        data,
        isError,
        isLoading,
    } = useSoftskillsQuery()

    const softSkills = data as SoftskillsResponse;

    if (isError) return <SmallError />
    if (isLoading) return <SmallLoader />

    return (
        <>
            {softSkills?.softskills?.map(softSkill => (
                <h4
                    key={softSkill.id}
                    className='text-center text-textDescription m-1 font-bold transition-all md:p-2 p-1 py-2'
                >
                    {softSkill.softskill_name}
                </h4>
            ))}
        </>
    )
}

export default Softskills;