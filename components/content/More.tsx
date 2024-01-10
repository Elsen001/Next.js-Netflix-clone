"use client"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { getMore } from "../../redux/reducers/MoreReducer";
import Image from "next/image";
import { ItemData2 } from "../../types/types";

interface ImportedRootState {
    more: {
        more: {
            results: ItemData2[];
        };
    };
}

const More: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const more = useSelector<ImportedRootState, ItemData2[]>(state => state.more.more.results);
    const img = `https://image.tmdb.org/t/p/w500`;
    const slice = more?.slice(8,20)

    useEffect(() => {
        dispatch(getMore());
    }, [dispatch]);
    

    return (
        <div className="items-container flex flex-wrap justify-between more-container">
            <h1 className="text-white w-full text-4xl pt-10 pb-5 ml-1">More Like This</h1>
                {slice?.map((item,index) => (
                     <Link key={index} href={`/details/${item.id}`}>
                        <div key={item.id} className="flex p-2 w-100">
                            <Image width={300} height={300} className="img-item w-72 h-36 object-cover" src={img + item.poster_path} alt={item.original_title} />
                        </div>
                     </Link>
                ))}
        </div>
    );
};

export default More;
