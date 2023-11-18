// folder views file error404.jsx
const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='/images/smiling-donkey.jpg' alt="smiling donkey" className="img-fluid" style={{maxWidth: '400px', maxHeight: '300px'}}/>
                    <div>
                        Photo by <a href='https://unsplash.com/photos/long-coated-brown-animal-MCauAnBJeig'>Dan Cook</a> from <a href='https://unsplash.com/@dan_scape'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404