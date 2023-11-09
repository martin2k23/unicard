import './styles.css'
const Parts = ({flex,footer,img,description_color,description_grey}) => {
    return(
            <div className="container_text" style={{ flexDirection: flex ? 'row-reverse' : null}}>
                <div className='text_value'>
                    <div className='text'>
                        <span  style={{fontWeight:700}}>{description_color}</span>
                        <span style={{fontWeight:400, color:"#9EA7AE"}}>{description_grey}</span>
                    </div>
                    
                    {footer ? null :<div class="info">
                     Not applicable on fuel purchase, rent &amp; wallet transfers, ATM withdrawals &amp; <br/> international transactions.
                    </div>
                    }
                </div>

                <div className='image_con'>
                    <div className="img_val">
                        <img src={img} alt='img' />
                    </div>
                </div>
               
            </div>
    )
}
export default Parts