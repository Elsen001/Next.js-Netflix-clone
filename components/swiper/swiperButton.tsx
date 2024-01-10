import React from 'react'
import { useSwiper } from 'swiper/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SwiperButton:React.FC = () => {
    const swiper = useSwiper()

    return (
        <div className='swiper-icon'>
            <button onClick={() => swiper.slidePrev()}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{ fontSize: 20, color: "red" }}
                />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ fontSize: 20, color: "red" }}
                />
            </button>

        </div>
    )
}

export default SwiperButton
