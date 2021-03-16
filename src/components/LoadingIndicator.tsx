import React, { useRef, useEffect } from "react"
import { Player, IPlayerProps } from "@lottiefiles/react-lottie-player"

const LoadingIndicator: React.FC<IPlayerProps> = props => {
  const player = useRef()

  useEffect(() => {}, [])
  return (
    <div className="d-flex flex-column  align-items-center justify-content-between vh-100">
      <Player ref={player.current} {...props} speed={3} />

      <h2>Carregando</h2>

      <Player
        ref={player.current}
        {...props}
        speed={3}
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  )
}

export { LoadingIndicator }
