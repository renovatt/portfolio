import { FaSpinner } from "react-icons/fa";

const SpinerLoader = () => {
    return (
        <span className='flex items-center justify-center animate-spin w-[24rem] md:w-[35rem]'>
            <FaSpinner className='text-textPrimary w-24 h-24' />
        </span>
    );

}

export default SpinerLoader;