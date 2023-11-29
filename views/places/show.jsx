//folder views/places file show.jsx

const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 🤩'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    const {name, pic, city, state, cuisines} = data.place;
    return(
        <Def>
            <main className="container">
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={pic} alt="missing picture" className='img-fluid w-100 h-auto' />
                        <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='mt-5'>{ name }</h1>
                        <div>
                            <h2>Rating</h2>
                            <p>Not rated</p>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <h4>
                                {data.place.showEstablished()}
                            </h4>
                            <h5>
                               Serving {data.place.cuisines}
                            </h5> 
                       </div>
                        <div>
                            <a href= {`/places/${data.place.id}/edit`} className='btn btn-warning'>
                                Edit
                            </a>
                            <form method="POST" action= {`/places/${data.place.id}?_method=DELETE`}>
                                <button type="submit" className='btn btn-danger'>
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2>Comments</h2>
                    {comments}
                    <p></p>
                </div>    
            </main>
        </Def>
    )
}

module.exports = show
