import React from "react";
import axios from "axios";
import { withRouter } from "../HOC/withRouter";

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        if (this.props.params) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            });
        }
    }

    handleBackButton = () => {
        this.props.navigate("/user");
    };

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                <div>
                    hello world from detail user with id: {this.props.params.id}
                </div>
                {isEmptyObj === false && (
                    <>
                        <div>
                            User's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => this.handleBackButton()}
                            >
                                Back
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default withRouter(DetailUser);
