import React from "react";
import {Pagination} from "react-bootstrap"

import ReactPageScroller from 'react-page-scroller';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import FifthComponent from "./FifthComponent";

import "./index.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {
        let items = [];
        for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === this.state.currentPage}>
                {number}
            </Pagination.Item>,
        );
        }

        const paginationBasic = (
            <div>
              <Pagination>{items}</Pagination>
            </div>
          );

          return paginationBasic
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <FirstComponent/>
                <SecondComponent/>
                <FifthComponent/>
            </ReactPageScroller>
            <Pagination className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pagination>
        </React.Fragment>
    }
}