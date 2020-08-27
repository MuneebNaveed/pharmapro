import React, { Component } from 'react';
import { BRAND_NAME, DEVELOPER_NAME, DEVELOPER_CONTACT } from '../constants/config';

/**
 * Renders the Footer
 */
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { currentYear: null };
    }

    componentDidMount() {
        this.setState({ currentYear: new Date().getFullYear() });
    }

    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {this.state.currentYear} &copy; {BRAND_NAME}. All Rights Reserved. Crafted with{' '}
                            <i className="uil uil-heart text-danger font-size-12"></i> by
                            <a href={DEVELOPER_CONTACT} target="_blank" rel="noopener noreferrer" className="ml-1">
                                {DEVELOPER_NAME}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
