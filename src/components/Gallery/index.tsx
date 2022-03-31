import { useEffect, useState, useRef } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'
import { Close } from '@styled-icons/material-outlined'

const commonSetting: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const settings: SliderSettings = {
  ...commonSetting,
  slidesToShow: 4
}

const modalSettings: SliderSettings = {
  ...commonSetting,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const slider = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items?.map((item, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.src}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>
      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items?.map((item) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={item.src}
                src={item.src}
                alt={`gallery - ${item.label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
