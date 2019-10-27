import React from "react";
import {Figure} from 'react-bootstrap'

import photo from './MaulanaIhsan.jpg'

export default () => {
    return (
        <div className="component second-component">
            <div className='aboutme'>
                <h4>About Me</h4>
                <p style={{paddingTop: '20px'}}>A self-motivated learner with experience in
                    several activities throughout study years
                    that are related to leadership and other
                    soft-skills, yet learning as a developing
                    individual. Having interest and experience
                    in making a web or mobile app using
                    Express Js, MySQL, Redux and React-Native.
                </p>

                <h5 style={{marginTop: '70px', marginBottom: '10px'}}>Personal Info</h5>
                <div className='personalInfo'>
                    <div className='key'>
                        <div style={{flexDirection: 'column', display:'flex'}}>
                            <text style={{fontWeight: 'bold'}}>Full name</text>
                            <text>Maulana Ihsan</text>
                        </div>
                        <div style={{flexDirection: 'column', display: 'flex', marginTop: '70px'}}>
                            <text style={{fontWeight: 'bold'}}>Email / Phone</text>
                            <text>m.ihsan3975@gmail.com / 081511051669</text>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='value'>
                        <text style={{fontWeight: 'bolder'}}>Address</text>
                        <text>Jl. Idris no 33 Sukabumi Utara, Jakarta Barat</text>
                    </div>
                </div>
            </div>
            <div className='profile'>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        // alt="171x180"
                        src={photo}
                    />
                </Figure>
            </div>
        </div>
    )
}