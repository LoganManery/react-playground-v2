interface BadgeProps {
    text: string
    color: string 
}

export default function Badge( { text }: BadgeProps ): JSX.Element {
    return (
        <div>
            <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-slate-100 bg-slate-600 rounded-full border-4`}>{text}</span>
        </div>
    )
}