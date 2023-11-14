const React = require('react')
const Def = require('../default')


function index(data){
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-4" key={index}>
                <h2>{place.name}</h2>
                <p className='text-left'>
                    {place.cuisines}
                </p>    
                <img src={place.pic} alt={place.name}/>
                <p className='text-left'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className='row'>
                {placesFormatted}
                </div>
            </main>
        </Def>

    )
}


module.exports = index