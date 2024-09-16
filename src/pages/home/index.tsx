import { useEffect, useRef, useState } from 'react'
import { Container, ContainerHome } from './style'
import * as faceApi from 'face-api.js'
import { translateExpressionToEmoji } from '../../lib/utils'
import { Footer } from '../../components/footer'

export function Home() {
  const [expression, setExpression] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      const videoElement = videoRef.current
      if (videoElement) {
        videoElement.srcObject = stream
      }
    })
  }, [])

  useEffect(() => {
    Promise.all([
      faceApi.loadTinyFaceDetectorModel('/models'),
      faceApi.loadFaceLandmarkModel('/models'),
      faceApi.loadFaceExpressionModel('/models'),
    ]).then(() => {
      console.log('Models Loaded')
    })
  }, [])

  async function handleLoadedMetadata() {
    const videElement = videoRef.current as HTMLVideoElement
    const canvasElement = canvasRef.current as HTMLCanvasElement

    if (!videElement || !canvasElement) return

    const detection = await faceApi
      .detectSingleFace(videElement, new faceApi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()

    if (detection) {
      const dominantExpression = detection.expressions.asSortedArray()[0]
      setExpression(dominantExpression.expression)

      const dimensions = {
        width: videElement?.offsetWidth,
        height: videElement?.offsetHeight,
      }

      faceApi.matchDimensions(canvasElement, dimensions)
      const resizeResults = faceApi.resizeResults(detection, dimensions)
      faceApi.draw.drawDetections(canvasElement, resizeResults)
      faceApi.draw.drawFaceLandmarks(canvasElement, resizeResults)
      faceApi.draw.drawFaceExpressions(canvasElement, resizeResults)
    }

    setTimeout(handleLoadedMetadata, 250)
  }

  return (
    <ContainerHome>
      <Container>
        <div>
          <h1>Emotion Recognition.</h1>
          <p>Você sente. O resto é com a gente. </p>
        </div>

        <div>
          <article>
            <div>
              <video
                onLoadedMetadata={handleLoadedMetadata}
                autoPlay
                ref={videoRef}
              ></video>
              <canvas ref={canvasRef}></canvas>
            </div>
          </article>

          <article>
            <p>
              <span>Sua expressão é: </span>
              {translateExpressionToEmoji(expression)}
            </p>
          </article>
        </div>
      </Container>
      <Footer />
    </ContainerHome>
  )
}
