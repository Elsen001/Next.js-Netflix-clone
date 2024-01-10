"use client"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store/store";
import { getNowPlaying } from "../../redux/reducers/MovieListReducer";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SwiperButton from "../swiper/swiperButton";
import { useClient } from "../useclient/useClient";
import Image from "next/image";
import { ItemData2 } from "@/types/types";

const NowPlaying: React.FC = () => {
  

    interface ImportedRootState {
        nowPlaying: {
            nowPlaying: {
                results: ItemData2[];
            };
        };
    }

    const dispatch: AppDispatch = useDispatch();
    const nowPlaying = useSelector<ImportedRootState, ItemData2[]>((state) => state.nowPlaying.nowPlaying.results);
    const img = `https://image.tmdb.org/t/p/w500`;

    const { windowSize } = useClient();
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        dispatch(getNowPlaying());
    }, [dispatch]);

    useEffect(() => {
        if (windowSize.width < 800) {
            setSlidesPerView(2.3);
        } else if (windowSize.width < 1200) {
            setSlidesPerView(3);
        } else {
            setSlidesPerView(4);
        }
    }, [windowSize]);

    return (
        <div className="items-container">
            <h2 className="text-white py-4">Now Playing</h2>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={2}
                centeredSlides={false}
                modules={[Pagination]}
                className="mySwiper"
            >
                {nowPlaying?.map((item,index) => (
                    <SwiperSlide key={item.id}>
                        <Link key={index} href={`/details/${item.id}`}>
                            <div className="flex px-6">
                                <Image width={300} height={300} className="object-cover" src={img + item.poster_path} alt={item.original_title} />
                                <h4 className="text-white">{item.original_title}</h4>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                <SwiperButton />
            </Swiper>
        </div>
    );
};

export default NowPlaying;
