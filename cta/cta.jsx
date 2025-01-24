import React from 'react'
import { ArrowRight } from '../arrow/arrow'
import Bitcoin from '../bitcoinlogo/bitcoin'

const CTA = () => {
    return (
        <div className="cta-wrapper">
            <Bitcoin />
            <h4 className="cta-text">Jump start your portfolio</h4>
            <ArrowRight />
            <style jsx>
                {
                    `
                    .cta-text{
                            color: rgb(22, 82, 240);
                        }
                    .cta-text:hover{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                    }
                    .cta-wrapper{
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                        flex-direction: row;
                        color: rgb(22, 82, 240);
                        font-weight: 600;
                    }
                    `
                }
            </style>
        </div>
    )
}

export default CTA
