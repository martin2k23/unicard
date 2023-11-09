import './styles.css'
const DataValidation =() =>{
    return(
        <section className='section_con'>
            <div className="div_style">
                <div className="row_data">
                    <div className="flex_shrink">
                        <div className='positions'>
                        <img className="img_dat" src="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp" alt=""/>
                        </div>
                    </div>

                    <div className="flex_flex">
                        <p className="text_p_tag">Help, just a WhatsApp away. Anytime, Anyday.</p>
                        <p className="text_flex">
                        <span>During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.</span>
                        </p>
                    </div>
                </div>

                <div className="flex_row_data">
                    <div className="flex_shrink">
                        <div className='positions'>
                        <img className="img_dat" src="https://www.uni.cards/images/nx-wave/rupee_bubble.webp" alt=""/>
                        </div>
                    </div>

                    <div className="flex_flex">
                        <p className="text_p_tag"> No hidden charges, no last minute surprises.</p>
                        <p className="text_flex">
                        <span>100% money back guarantee if a charge is applied without your knowledge.</span>
                        </p>
                    </div>
                </div>

                <div className="flex_full_width">
                    <div className="flex_shrink">
                        <div className='positions'>
                           <img className="img_dat" src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp" alt=""/>
                        </div>
                    </div>

                    <div className="flex_flex">
                        <p className="text_p_tag"> Super secure. Because we care about your money.</p>
                        <p className="text_flex">
                        <span>
                            <img style={{marginTop:"24px"}} src="https://www.uni.cards/images/pcidss_cert.svg" alt="PCI Logo"/>
                        </span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default DataValidation