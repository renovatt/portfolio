import { SoftskillComponentProps } from '@/@types'
import SmallLoader from './Helper/SmallLoader'
import SmallError from './Helper/SmallError'

const Softskills = (props: SoftskillComponentProps) => {
    if (props.loading) {
        return <SmallLoader />
    }

    if (props.error) {
        return <SmallError />
    }

    return (
        <h4
            className='text-center text-white bg-black hover:text-textPrimary hover:bg-white font-bold transition-all m-2 p-2'
            key={props.softskill.id}
        >
            {props.softskill.softskill_name}
        </h4>
    )
}

export default Softskills;