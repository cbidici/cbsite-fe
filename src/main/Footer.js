import React from 'react'
import {Container} from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return(
            <Container style={{marginBottom:150}}>
                <div className="dropdown-divider"></div>
                <div className="float-left">End of just a site</div>
                <div className="float-right">Some logos, links and icons</div>
            </Container>
        );
    }

}

export default Footer