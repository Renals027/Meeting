import React,{Component} from 'react';

class FormData extends Component {

    render() {
        const {theMessage} = this.props;
        return(
            <div className="col-12 alert alert-danger px-3">
                {theMessage}
            </div>
        );
    }

}
export default FormData;
