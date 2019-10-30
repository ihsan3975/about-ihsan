import React from "react";
import {Card, Button, Modal, ButtonToolbar} from 'react-bootstrap'


import web from '../img/invetoriesWeb.png'
import mobile from '../img/inventoriesMobile.jpg'
import macha from '../img/macha.jpg'

import trui from '../img/logotrui1.jpg'
import mii from '../img/logoMii.jpg'
import hmd from '../img/hmdfLogo.jpg'
import robotic from '../img/robotic.jpg'

export default () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              Furniture Inventories Web Application
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Furniture inventories is web and mobile app
                to facilitate the work of inventory products
                such as create, update and delete products.
                This project was created with the aim of
                implementing backend (expressJS + mysql)
                and frontend (reactJS)
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }  

    function MyVerticallyCenteredModal1(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Furniture Inventories Mobile Application
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                This is mobile application from web based furniture inventories
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }  

    function MyVerticallyCenteredModal2(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Macha (Maps and Chatting App)
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                    This application was created to facilitate
                    communication. This application has several
                    features such as being able to see online or
                    offline status, last seen and seeing the
                    location of friends. This application is based
                    on the original reaction and Firebase
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }      

    return (
        <div className="component fifth-component">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
              <div>
                  <h4>Recent Project</h4>
              </div>
              <ButtonToolbar style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
                <Card className='cardPro' style={{backgroundImage: `url(${web})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor:'#FF9F1C'}} variant='warning' onClick={() => setModalShow(true)}>Furniture Inventories Web Application</Button>
                  </Card.Body>
                </Card>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Card className='cardPro' style={{backgroundImage: `url(${mobile})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor:'#FF9F1C'}} variant='warning' onClick={() => setModalShow1(true)}>Furniture Inventories Mobile Application</Button>
                  </Card.Body>
                </Card>
                <MyVerticallyCenteredModal1
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                />
                <Card className='cardPro' style={{backgroundImage: `url(${macha})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor:'#FF9F1C'}} variant='warning' onClick={() => setModalShow2(true)}>Macha (Maps and Chatting App)</Button>
                  </Card.Body>
                </Card>
                <MyVerticallyCenteredModal2
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />
              </ButtonToolbar>
            </div>

            <div>
              <div>
                  <h4>Organization and Event</h4>
              </div>
              <ButtonToolbar style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
                <Card className='cardPro1' style={{backgroundImage: `url(${trui})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor: '#2EC4B6'}} variant="info">TRUI - AI AUAV</Button>
                  </Card.Body>
                </Card>
                
                <Card className='cardPro1' style={{backgroundImage: `url(${hmd})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor: '#2EC4B6'}} variant="info">Himpunan Mahasiswa Departemen Fisika - Staff</Button>
                  </Card.Body>
                </Card>
              
                <Card className='cardPro1' style={{backgroundImage: `url(${mii})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor: '#2EC4B6'}} variant="info">LD MII 26 - Head of Departement Syiar Islam</Button>
                  </Card.Body>
                </Card>
              
                <Card className='cardPro1' style={{backgroundImage: `url(${robotic})`}}>
                  <Card.Body className="text-center">
                    <Button style={{backgroundColor: '#2EC4B6'}} variant="info">Pesta Rakyat Fisika Universitas Indoensia - Robotic Competition</Button>
                  </Card.Body>
                </Card>
              
              </ButtonToolbar>
            </div>
          </div>
        </div>
    )
}