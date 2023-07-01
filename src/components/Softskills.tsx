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
            className='text-center text-textDescription m-1 font-bold transition-all md:p-2 p-1 py-2'
            key={props.softskill.id}
        >
            {props.softskill.softskill_name}
        </h4>
    )
}

export default Softskills;