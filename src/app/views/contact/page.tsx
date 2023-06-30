import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Portfolio | Contato',
    description: 'Wildemberg Renovato portfolio',
}

export default function Contact() {
    return (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-[800px] w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-md bg-slate-700 h-80 w-40"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-80 w-full bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="flex gap-4">
                            <div className="h-20  w-full bg-slate-700 rounded"></div>
                        </div>
                        <div className="h-5 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}