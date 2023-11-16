//folder views/places file show.jsx

const React = require('react')
const Def = require('../default')

function show(data) {
    const {name, pic, city, state} = data.place;
    return(
        <Def>
            <main className="container">
                <h1 className='mt-5'>{ name }</h1>
                <div className='row'>
                    <img src={pic} alt="missing picture" className='img-fluid' />
                </div>
                <p>Location: {city}, {state}</p>
            </main>
        </Def>
    )
}

module.exports = show
