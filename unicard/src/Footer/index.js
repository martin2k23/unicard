import './styles.css'

const Footer = () => {
    return(
        <footer className="footer_container" id="footer">
            <div className="footer_main">
                <div className='footer_div'>
                    <div className="footer_start">
                        <svg className="logo_footer_svg" viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z" fill="#00DCC8"></path>
                        </svg>

                        <div className="footer_text_grey">
                            <p className='footer_address_text'>
                                Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony, 
                                Koramangala, Bengaluru, Karnataka 560034
                            </p>

                            <p className="footer_address_text" style={{marginTop:'16px'}}>Contact Us: 
                                <a className="a_tag" href="tel: 080 68216821">
                                   &nbsp; 080 68216821
                                </a>
                            </p>

                            <p className='footer_address_text'>Email: 
                                <a className="a_tag" href="mailto: care@uni.club">
                                &nbsp; care@uni.club 
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="line_footer"></div>
            <div className="footer_line_text">
                <p className="footer_p_line">
                <a href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php" className='text_color'>
                    <u>Grievance Redressal Mechanism</u> - SBM Bank India </a>
                </p>
            </div>

            <div className="line_footer2"></div>

            <div className="content_value">
                <div className="flex_footer_links">
                    <div className="footer_link">
                        <a className="padding_links" href="https://www.instagram.com/uni_cards/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>

                    <div className="footer_link">
                        <a className="padding_links" href="https://www.linkedin.com/company/uni-cards" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                    <div className="footer_link">
                        <a className="padding_links" href="https://twitter.com/cards_uni" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>

                    <div className="footer_link">
                        <a className="padding_links" href="https://www.facebook.com/Uni-Cards-104179288358904" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>

                    <div className="footer_link">
                        <a className="padding_links" href="https://careers.uni.cards/" target="_blank" rel="noopener noreferrer">Careers</a>
                    </div>
                </div>

                <div className="link_allowed">
                    <span>
                        <a className="a_tag" href="/credit-card-key-facts" target="_blank">Credit Card KFS</a>
                        <span className='padding_line'>|</span>
                    </span>

                    <span>
                        <a  className="a_tag"href="/docs/Credit_Card_MITC.pdf" target="_blank">Credit Card T&amp;Cs</a>
                        <span className='padding_line'>|</span>
                    </span>

                    <span>
                        <a className="a_tag" href="/privacy-policy-main" target="_blank">Uni T&amp;Cs</a>
                        <span className='padding_line'>|</span>
                    </span>

                    <span>
                        <a className="a_tag" href="/nbfc-terms" target="_blank">Lending Partner TnCs</a>
                    </span>
                </div>
            </div>
            <div class="sm:h-40 md:hidden"></div>
        </footer>
    )
}
export default Footer