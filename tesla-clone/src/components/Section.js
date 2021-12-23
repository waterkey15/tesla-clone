import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, desc, image, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage={image}>
            <Fade bottom>
                <ItemText>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {desc}
                    </p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {
                            rightBtnText &&
                            <RightButton>
                            {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src="images/down-arrow.svg">
                </DownArrow>
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media(max-width: 768px){
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 40vw;
    max-width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`


const RightButton = styled(LeftButton)`
    background-color: white;
    color: #000;
    opacity: 0.65;

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`
`

export default Section
