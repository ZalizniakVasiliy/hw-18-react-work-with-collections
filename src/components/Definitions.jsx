import React from "react";

class Definitions extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <dl>
                {data.map(item => {
                    return (
                        <React.Fragment>
                            <dt key={item.id}>{item.dt}</dt>
                            <dd key={item.id}>{item.dd}</dd>
                        </React.Fragment>
                    )
                })}
            </dl>
        )
    }
}

export default Definitions;