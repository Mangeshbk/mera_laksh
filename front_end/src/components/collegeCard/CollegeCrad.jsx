import React from 'react'

const CollegeCrad = ({clg}) => {
    return (

        <>
            {/* components of card starts from here */}
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img
                        className="project-image"
                        src="https://www.thoughtco.com/thmb/WeZTn-IMR0RqlNB4THgDxMFL__c=/2779x1852/filters:fill(auto,1)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
                        alt=""
                    />
                    <div class="card-body">
                        <h3>{clg.Name}</h3>
                        <p class="card-text">
                            Branches Available:{clg.Branches_Available}
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a
                                    type="button"
                                    class="btn btn-sm btn-outline-primary official-websiteBtn"
                                    href={clg.Url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit the official website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* card components ends here */}
        </>
    )
}

export default CollegeCrad
