import React from 'react';
import { Link } from 'react-router-dom';

class AgricultureLoanIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllLoans()
    };

    render() {
        const { loans, logout } = this.props;
        return (
            <div>
                <nav class="site-nav">
                    <div>
                        <div>
                            <Link class="header-button" to="/dashboard">Giva</Link>
                        </div>
                        <div>
                            <button class="lend-button">Lend</button>
                        </div>
                    </div>
                    <div>
                        <button>About</button>
                        <Link to="/profile">Profile</Link>
                    </div>
                </nav>
                <div>
                    <p><Link to={'/loans'}>All Loans</Link> > Agriculture</p>
                    <h1>Agriculture</h1>
                    <p>
                        Farmers face many challenges like unpredictable weather and 
                        market prices, and are often forced to choose between investing 
                        in their crops and fulfilling basic needs for their families. Your 
                        support keeps their crops growing and their livelihoods stable.
                    </p>
                </div>
                <div>
                {loans.map(loan => {
                    if (loan.type_category == "Agriculture") return (
                        <div>
                            <img src={loan.thumbnailUrl} />
                            <div>
                                <h1>{loan.loan_name}</h1>
                                <p>{loan.location}</p>
                                <p>{loan.loan_description}</p>
                                <p>{loan.total_amount}</p>
                                <button>$25</button>
                                <button>Lend Now</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    };
}

export default AgricultureLoanIndex;