import React from "react";

export default () => {
    return (
        <div className="component third-component">
            <div>
                <h4>Education and Experience</h4>
            </div>
            <div className='third-content'>
                <div className='sub-third-content'>
                    <h5>Education</h5>
                    <div style={{marginTop: '10px'}}>
                        <text style={{fontWeight: 'bold'}}>Arkademy Tech Education Platform - </text>
                        <text>Bogor, Indonesia 2019 </text>
                    </div>
                    <text>Full Stack Developer</text>
                    <text>* Learn Express Js, Node Js, React and ReactNative</text>
                    
                    <div style={{marginTop: '20px'}}>
                        <text style={{fontWeight: 'bold'}}>Universitas Indonesia - </text>
                        <text>Depok, Indonesia 2015-2019 </text>
                    </div>
                    <text>Bachelor's degree, Physics</text>
                    
                    <div style={{marginTop: '20px'}}>
                        <text style={{fontWeight: 'bold'}}>SMA Negeri 85 Jakarta - </text>
                        <text>Jakarta, Indonesia 2012-2019 </text>
                    </div>
                    <text>Science Program</text>
                </div>

                <div className='sub-third-content'>
                    <h5>Experience</h5>
                    <div style={{marginTop: '10px'}}>
                        <text>Badan Tenaga Nuklir Nasional (BATAN) - </text>
                        <text style={{fontWeight: 'bold'}}>Research Intern </text>
                    </div>
                    <text>Jakarta, Indonesia July 2018 - Sept 2018</text>
                    <text>* Doing an examination of hollow stem using gamma radiation and construct image to visualize stem condition</text>
                    
                    <div style={{marginTop: '20px'}}>
                        <text>Physics Electronics Lab of Universitas Indonesia - </text>
                        <text style={{fontWeight: 'bold'}}>Assistant Lab </text>
                    </div>
                    <text>Depok, Indonesia 2017</text>
                    <text>* Teaching how to analyze analog components and assign some task in order to develop using analog components</text>
                </div>
                
            </div>

        </div>
    )
}