import { useEffect, useRef } from "react"

export const useScrollDown = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef?.current) {
            scrollRef?.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
            // scrollRef?.current.scrollTo({top: 10000000, behavior: "smooth"})
        }
    }, [scrollRef])

    return {scrollRef}
}
