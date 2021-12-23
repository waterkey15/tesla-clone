import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                desc= "Order Online for Touchless Delivery"
                image="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                desc= "Order Online for Touchless Delivery"
                image="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                 title="Model 3"
                 desc= "Order Online for Touchless Delivery"
                 image="model-3.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"
            />
            <Section
                 title="Model X"
                 desc= "Order Online for Touchless Delivery"
                 image="model-x.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"
            />
            <Section
                 title="Lowest Cost Solar Panels in America"
                 desc= "Money-back guarentee"
                 image="solar-panel.jpg"
                 leftBtnText="Order now"
                 rightBtnText="Learn More"
            />
            <Section
                 title="Solar for New Roofs"
                 desc= "Solar Roofs Costs Less Than a new Roof Plus Solar Panels"
                 image="solar-roof.jpg"
                 leftBtnText="Order now"
                 rightBtnText="Learn More"
            />
            <Section
                 title="Accessories"
                 desc= ""
                 image="accessories.jpg"
                 leftBtnText="Shop now"
            />
            
        </Container>
    )
}


const Container = styled.div`
    height: 100vh;
`

export default Home