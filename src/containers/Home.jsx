import React from 'react'
import { Helmet } from 'react-helmet'
import Products from '../components/Products'
import initialState from '../initialState'

const Home = () => {
    return(
        <>
            <Helmet>
                <title>Products - Platzi conf merch</title>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="og:title" content="Platzi Conf Store"/>
                <meta property="og:description" content="Platzi Conf Store"/>
                <meta
                property="og:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
            </Helmet>
            <Products products={initialState.products} />
        </>
    )
}

export default Home;
