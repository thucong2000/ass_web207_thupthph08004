import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/website/header'
import Footer from '../components/website/footer'

import '../pages/assets/client/css/linearicons.css'
import '../pages/assets/client/css/themify-icons.css'
import '../pages/assets/client/css/bootstrap.css'
import '../pages/assets/client/css/nice-select.css'
import '../pages/assets/client/css/nouislider.min.css'
import '../pages/assets/client/css/ion.rangeSlider.css'
import '../pages/assets/client/css/ion.rangeSlider.skinFlat.css'
import '../pages/assets/client/css/magnific-popup.css'
import '../pages/assets/client/css/main.css'
const WebsiteLayout = (props) => {
    return (
        <>
            <Header>Header website</Header>
            <div className="container">
                <main>{props.children}</main>
            </div>
            <Footer>Footer</Footer>
        </>
    )
}

export default WebsiteLayout
