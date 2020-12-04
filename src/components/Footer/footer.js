import React from 'react'
import { FooterContainer, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights } from './footerElements'

const Footer = ({dark}) => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                <WebsiteRights dark={dark}>Elias Vival </WebsiteRights>
                <SocialIcons>
                <p>eliasvival@hotmail.com</p>
                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
