import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

//not a capital letter to start with here because we are not using this in JSX code
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
 
        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUpdate() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;