import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default function Player() {

  const router = useRouter()
    const [track, setTrack] = useState('')
    useEffect(() => {
        const { query } = router;
        if (query.trackurl) {
            setTrack(''+query.trackurl)
        }
    }, [router])

  return (
    <>
     <div>
          <ReactAudioPlayer controls src={track} />
      </div>
    </>
  )
}
