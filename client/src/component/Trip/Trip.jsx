import React from 'react';

class Trip extends React.Component {
    state = {

    }


    render() {
        return (
            <section class="section">
                <div class="container">
                    <div class="card is-fullwidth">
                        <header class="card-header">
                            <p class="card-header-title">Card #1</p>
                            <a class="card-header-icon card-toggle">
                                <i class="fa fa-angle-down"></i>
                            </a>
                        </header>
                        <div class="card-content is-hidden">
                            <div class="content">
                                Content goes here <small>Small text</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trip;
