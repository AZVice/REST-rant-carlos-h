//folder views/places file show.jsx

const React = require('react')
const Def = require('../default')

function show(data) {
    let rating;
    let comments = [];

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '🌟'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    } else{
     rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
     );
    }
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
                            {rating}
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
                <div className= 'mt-4 row'>
                    <h2 className='w-100'>Comments</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className='col-md-4 mb-3'>
                            {comment}
                        </div> 
                    ))}   
                </div>
                <h3> Rant or Rave!!</h3>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                  <div className='row'>
                        <div className='form-group col-sm-12'>
                            <label htmlFor='content'>Comment</label>
                            <textarea id='content' name='content' className='form-control'></textarea>
                        </div>
                  </div>
                  <div className='row'>
                        <div className='form-group col-sm-4'>
                                <label htmlFor='content'>Author</label>
                                <input id='author' name='author' className='form-control'/>
                        </div>
                        <div className='form-group col-sm-4'>
                                <label htmlFor='stars' className='d-block'>Rating</label>
                                <input type='range' step='0.5' min='1' max='5' id='stars' name='stars'/>
                        </div>
                        <div className='form-group col-sm-2'>
                                <label htmlFor='content' className='d-block'>Rant?</label>
                                <input type='checkbox' id='rant' name='rant'/>  
                        </div>
                    </div>
                  <input type='submit' className='btn btn-primary' value='Add Comment' />
                </form>
            </main>
        </Def>
    )
}

module.exports = show
