import React from "react";
import {CardDeck, Card} from 'react-bootstrap'

import web from './invetoriesWeb.png'
import mobile from './inventoriesMobile.jpg'
import macha from './macha.jpg'

export default () => {
    return (
        <div className="component fifth-component">
            <div>
                <h4>Portofolio</h4>
            </div>
            <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={web} />
                    <Card.Body>
                    <Card.Title>Furniture Inventories Web Application</Card.Title>
                    <Card.Text>
                    Furniture inventories is web and mobile app
                    to facilitate the work of inventory products
                    such as create, update and delete products.
                    This project was created with the aim of
                    implementing backend (expressJS + mysql)
                    and frontend (reactJS)
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={mobile} />
                    <Card.Body>
                    <Card.Title>Furniture Inventories Mobile Application</Card.Title>
                    <Card.Text>
                        This is mobile application from web based furniture inventories
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={macha} />
                    <Card.Body>
                    <Card.Title>Macha (Maps and Chatting App)</Card.Title>
                    <Card.Text>
                    This application was created to facilitate
                    communication. This application has several
                    features such as being able to see online or
                    offline status, last seen and seeing the
                    location of friends. This application is based
                    on the original reaction and Firebase
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
        </div>
    )
}