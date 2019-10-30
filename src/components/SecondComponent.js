import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default () => {
    return (
        <div className="component second-component">
            <div className='aboutme'>
                <h3>About Me</h3>
                <div style={{backgroundColor: '#2EC4B6', margin: '70px', borderRadius: 9}}>
                    <p style={{fontSize: '25px', color: '#011627'}}>A self-motivated learner with experience in
                        several activities throughout study years
                        that are related to leadership and other
                        soft-skills, yet learning as a developing
                        individual. Experienced in building CRUD application, RESTful APIs using Node.JS and Express.
                        common libraries of use: Axios, Redux, Express, body-parser, react-router. Common ise of UI libraries: 
                        Bootstrap 4, React-Bootstrap, Elemental-UI and Native-Base for React Native
                    </p>
                </div>

                <h4>Contact Me</h4>
                <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center', marginTop: '60px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px'}}>
                        <PhoneIcon style={{fontSize: '50px'}}/>
                        <text style={{fontWeight: 'bold', fontSize: '25px'}}>Phone:</text>
                        <text style={{fontSize: '24px'}}>(+62) 81511051669</text>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px'}}>
                        <EmailIcon style={{fontSize: '50px'}} />
                        <text style={{fontWeight: 'bold', fontSize: '25px'}}>Email:</text>
                        <text style={{fontSize: '24px'}}>m.ihsan3975@gmail.com</text>
                    </div>
                </div>
            </div>
        </div>
    )
}