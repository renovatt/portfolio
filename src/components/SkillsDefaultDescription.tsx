import { DefaultDescriptonProps } from "@/@types";
import SmallError from "./Helper/SmallError";
import SmallLoader from "./Helper/SmallLoader";

export const SkillsDefaultDescription = (props: DefaultDescriptonProps) => {
    if (props.loading) {
        return <SmallLoader />
    }

    if (props.error) {
        return <SmallError />
    }

    return (
        <section className='flex items-center justify-center bg-backgroundThird w-full min-h-[10rem] p-4'>
            <h2 className='text-textDescription text-xl'>Passe o mouse nos ícones para ver mais informações.</h2>
        </section>
    )
}