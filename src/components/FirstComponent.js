import React from "react";
import {Image, Button} from 'react-bootstrap'

import Photo from '../img/MaulanaIhsan.jpg'

export default () => {
    return (
        <div className="component first-component">
            <div className='first-content'>
                <Image src={Photo} width='250' roundedCircle />
                <h2>Maulana Ihsan</h2>
                <h5>Full Stack Developer</h5>
                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Button style={{margin: '5px', backgroundColor: '#333'}} target="_blank" variant="secondary" href="https://github.com/ihsan3975">Github</Button>
                    <Button style={{margin: '5px', backgroundColor: '#0e76a8'}} target="_blank" href="https://www.linkedin.com/in/maulana-ihsan-3aba7964/">Linkedin</Button>
                    <Button style={{margin: '5px', backgroundColor: '#FF9F1C', borderColor: '#FF9F1C'}} target="_blank" variant="danger" href="https://drive.google.com/file/d/1Y_ZtH4ymtO1JZAs5EKi-k24jbUXLKkBL/view?usp=sharing">Resume</Button>
                </div>
            </div>
        </div>
    )
}