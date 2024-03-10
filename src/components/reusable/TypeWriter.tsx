import { useEffect, useState } from 'react';

type Props = {
    text: string;
}

const TypeWriter = ({text}:Props) => {
    const [displayText, setDisplayText] = useState<string>('')
    const [currIndex, setCurrIndex] = useState<number>(0)
    const repeat = true

    useEffect(() => {
        const interval = setInterval(() => {
            if (currIndex < text.length) {
                setDisplayText(prev => prev + text[currIndex])
                setCurrIndex(prev => prev +1)
            } else {
                if (repeat) {
                    setDisplayText('')
                    setCurrIndex(0)
                } else {
                    clearInterval(interval)
                }
            }
        },300)

        return () => clearInterval(interval)
    },[text,currIndex])

    return (
        <div className='h-10'>
            <span className='font-general-medium text-xl sm:text-2xl mb-1 text-ternary-dark dark:text-ternary-light'>{displayText}</span>
        </div>
    )
}

export default TypeWriter;