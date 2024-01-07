"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '@/app/redux/reducers/DetailsReducer';
import { AppDispatch } from '@/app/redux/store/store';
import More from '@/app/components/More';
import { ItemData } from '@/app/types/types';


const Page = ({ params }: { params: { id: number } }) => {
    const dispatch: AppDispatch = useDispatch();
    const details: ItemData = useSelector((state: { details: { details: ItemData } }) => state.details.details);
    
    const img = "https://image.tmdb.org/t/p/original";
    const fullImg = img + details.poster_path;

    const {id} = params;

    useEffect(() => {
        if (id !== undefined && !isNaN(Number(id))) {
            dispatch(getDetails(Number(id)));
        }
    }, [dispatch, id]);


    return (
        <>
            <main>
                <div className="shadows"></div>
                <div className="img" style={{ backgroundImage: `url(${fullImg})` }}></div>
                <div className="container">
                    <div className="detail">
                        <h2>{details.original_title}</h2>
                        <div className="span">
                            <span>{details.release_date}</span>
                            <span className='dote'>{details.vote_average}</span>
                            <span>{details.runtime}</span>
                            {
                                details?.genres?.map((genre, index) => (
                                    <span key={index} className='genre'>{genre.name}</span>
                                ))
                            }
                        </div>
                        <p>{details.overview}</p>
                    </div>
                </div>
                <div className="more-details">
                    <h3 className='text-4xl'>More Details</h3>
                    <div className="row-details">
                        <div>
                            <h4>Name</h4>
                            {details.title}
                        </div>
                        <div className="subtitles">
                            <h4>Subtitles</h4>
                            {
                                details?.spoken_languages?.map((i,index) => (
                                    <span key={index}>{i.name}</span>
                                ))
                            }
                        </div>
                        <div className="genre-1">
                            <h4>Genres</h4>
                            {
                                details?.genres?.map((i,index) => (
                                    <span key={index}>{i.name}</span>
                                ))
                            }
                        </div>
                        <div>
                            <h4>Popular</h4>
                            {details.popularity}
                        </div>
                        <div className="country">
                            <h4>Country</h4>
                            {details?.production_countries?.map((i,index) => (
                                <span key={index}>{i.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <More/>
            </main>
        </>
    );
};

export default Page;
