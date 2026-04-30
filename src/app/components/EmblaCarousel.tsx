import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoHeight()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  // Full Screen
  const [expandedIndex, setExpandedIndex] = useState(null)
  const toggleExpand = useCallback((index: any) => {
    console.log("clicked")
    setExpandedIndex(expandedIndex === index ? null : index)
  }, [expandedIndex])


  // Critical: Re-initialize Embla whenever the expanded state changes
  useEffect(() => {
    if (emblaApi) emblaApi.reInit()
  }, [emblaApi, expandedIndex])

  return (
    <>
      <div className="embla" style={{ height: "fit-content" }}>
        <div className="embla__viewport" ref={emblaRef} style={{ height: "fit-content" }}>
          <div className="embla__container" style={{ height: "fit-content" }}>
            {slides.map((value, index) => (
              <div className={`embla__slide ${expandedIndex === index ? 'is-expanded' : ''}`} style={{ height: "fit-content" }} key={index} onClick={() => toggleExpand(value)}>
                <div className="relative slide-pixel-corners--wrapper">

                  <img
                    className="embla__slide__img embla-pixel-corners"
                    src={value ? value : `https://picsum.photos/600/350?v=${index}`}
                    alt="Your alt text"
                  />
                  <a href={value} target='_blank'>
                    <svg style={{ position: "absolute", right: 10, bottom: 10 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 5h6v2H5zm8-2h8v2h-8zM5 19h12v2H5zM3 7h2v12H3zm14 6h2v6h-2z" /><path d="M19 3h2v8h-2zm-8 8h2v2h-2zm6-4h-2v2h2zm2-2h-2v2h2zm-4 4h-2v2h2zm-4 4H9v2h2z" /></g></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot embla-pixel-corners'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EmblaCarousel
