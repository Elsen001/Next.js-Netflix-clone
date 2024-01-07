"use client"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store/store";
import { getItems } from "../redux/reducers/DataSliceReducer";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SwiperButton from "./swiperButton";
import { useClient } from "./useclient/useClient";
import Image from "next/image";
import { ItemData, ItemData2 } from "../types/types";

export interface ImportedRootState {
  items: {
    items: {
      results: ItemData2[];
    };
  };
}

const Items: React.FC = () => {
  
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector<ImportedRootState, ItemData2[]>(state => state.items.items.results);
  const img = `https://image.tmdb.org/t/p/w500`;

  const { windowSize } = useClient();
  const [slidesPerView, setSlidesPerView] = useState(4);


  useEffect(() => {
    if (windowSize.width < 800) {
        setSlidesPerView(2.3);
    } else if (windowSize.width < 1200) {
        setSlidesPerView(3);
    } else {
        setSlidesPerView(4);
    }
}, [windowSize]);


  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="items-container">
      <h2 className="text-white py-4">Popular on Netflix</h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={2}
        centeredSlides={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/details/${item.id}`}>
              <div className="flex px-6">
                <Image width={300} height={300} className="img-item " src={img + item.poster_path} alt={item.original_title} />
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

export default Items;
