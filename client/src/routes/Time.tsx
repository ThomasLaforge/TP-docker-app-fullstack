import { useEffect, useState } from "react"

export default function Time() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const fetchTime = async () => {
            const response = await fetch('http://localhost:2023/server/time')
            const data = await response.json()
            setTime(data.time)
        }
        fetchTime()
    }, [])

    return (
        <div className="time">
            <h1>Time</h1>
            <p>Server time: {time}</p>
        </div>
    )
}