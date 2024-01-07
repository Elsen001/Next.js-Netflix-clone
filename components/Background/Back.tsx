import React, {  } from 'react'
import logo from "../../features/images/1.png"
import Image from 'next/image'

const Back = () => {

    return (
        <div className='back'>
            <Image width={300} height={300} src={logo} alt="Logo"/>
            <div className="blur">
                <div className="shadow"></div>
            </div>
            <div className="text">
                <h2>There’s even more to watch.</h2>
                <h3>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </h3>
                <button>JOIN NOW</button>
            </div>
        </div>
    )
}

export default Back
