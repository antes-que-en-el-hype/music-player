import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AudioPlayer from 'react-audio-player'

const inter = Inter({ subsets: ['latin'] })

export default function Player() {

  const router = useRouter()
    const [track, setTrack] = useState('')
    useEffect(() => {
        const { query } = router;
        if (query.trackId) {
            setTrack(`https://example.com/track${query.trackId}.mp3`)
        }
    }, [router])

  return (
    <>
    <AudioPlayer src={track || ''} />
    <div>
        <button onClick={() => setTrack('https://example.com/track1.mp3')}>Track 1</button>
        <button onClick={() => setTrack('https://example.com/track2.mp3')}>Track 2</button>
        <button onClick={() => setTrack('https://example.com/track3.mp3')}>Track 3</button>
    </div>
</>
  )
}
