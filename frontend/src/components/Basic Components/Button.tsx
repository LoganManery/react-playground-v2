interface ButtonProps {
    text: string
}

export default function Button( { text }: ButtonProps ): JSX.Element {
    return (
        <div>
            <button className="border-2 border-black p-1 bg-slate-300">{text}</button>
        </div>
    )
}