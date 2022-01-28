import React from 'react';
import { Col, Row } from 'reactstrap';

import VerticalTabs from './TabPanel';
function Details(props) {
    return (
        <div>
            <Row>
                <Col>
                <Row> 
                    
                    <VerticalTabs/>
                    </Row>
                    </Col>


            </Row>
        </div>
    );
}

export default Details;