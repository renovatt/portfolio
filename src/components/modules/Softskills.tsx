'use client'
import { SoftskillsResponse } from '@types'
import SmallError from '@helpers/SmallError'
import SmallLoader from '@helpers/SmallLoader'
import { useSoftskillsQuery } from '@hooks/useSoftskillsQuery'

const Softskills = () => {
  const { data, isError, isLoading } = useSoftskillsQuery()

  const softSkills = data as SoftskillsResponse

  if (isError) return <SmallError />
  if (isLoading) return <SmallLoader />

  return (
    <>
      {softSkills?.softskills?.map((softSkill) => (
        <h4
          key={softSkill.id}
          className="m-1 p-1 py-2 text-center font-bold text-textDescription transition-all md:p-2"
        >
          {softSkill.softskill_name}
        </h4>
      ))}
    </>
  )
}

export default Softskills
