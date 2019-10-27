import React from "react";
import {CardColumns, Card} from 'react-bootstrap'

import logoTrui from './logotrui1.jpg'
import logoHMD from './hmdfLogo.jpg'
import logoMii from './logoMii.jpg'


export default () => {
    return (
        <div className="component fourth-component">
            <div style={{marginBottom: '20px', marginTop: '10px'}}>
                <h4>Organization and Event Commitee</h4>
            </div>

            <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={logoTrui} />
                    <Card.Body>
                    <Card.Title>Tim Robotik UAV - Artificial Intelligence member</Card.Title>
                    <Card.Text>
                        Learning artificial intelligence of UAV using ROS and OpenCV
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={logoHMD} />
                    <Card.Body>
                        <Card.Title>Himpunan Mahasiswa Departement Fisika, Universitas Indonesia</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Depok, 2016 - Staff</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <Card.Img variant="top" src={logoMii} />
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Head of Departement Syiar Islam
                    </p>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Pesta Rakyat Fisika Universitas Indoensia</Card.Title>
                    <Card.Text>
                        Managing the rules of competition{' '}
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Depok, 2016 - Robotic Competition</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                {/*<Card>
                    <Card.Img src={logoMii} />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card> */}
            </CardColumns>
            </div>
        </div>
    )
}