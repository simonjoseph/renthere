import { useLightbox } from 'simple-react-lightbox'


export default function Button() {
  const { openLightbox } = useLightbox()

  return (
    <>
    <button onClick={() => openLightbox()}>
      Open the lightbox
    </button>
    </>
  )
}