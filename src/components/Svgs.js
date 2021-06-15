import React from 'react';

const Svgs = ({tries}) =>{
    return(
        <svg>
            <g stroke="null">
            
                 <rect stroke="#000" class="gallow" fill="#75572D" strokeWidth="0" x="45.31816" y="15.45313" width="5" height="183" id="svg_4"/>
                 <rect stroke="#000" class="gallow" fill="#75572D" strokeWidth="0" strokeOpacity="null" x="5.0242" y="195.99992" width="123.5334" height="5.6" id="svg_5"/>
                 <rect stroke="#000" class="gallow" fill="#75572D" strokeWidth="0" strokeOpacity="null" x="45.8182" y="12.99997" width="101.79999" height="5.6" id="svg_7"/>
                 <rect stroke="#000" class="gallow" fill="#75572D" strokeWidth="0" strokeOpacity="null" x="140.62423" y="13.75755" width="7.2" height="41.52731" id="svg_17"/>
                 {
                tries<6?
                <g>
                    <ellipse stroke="#000" class="head" fill="#07ffc9" strokeWidth="0" strokeOpacity="null" cx="144.24857" cy="63.78917" id="svg_18" rx="13.00608" ry="12.80002"/>
                    <rect stroke="#000" class="neck" fill="#07ffc9" strokeWidth="0" x="143.06048" y="72.23257" width="2.4" height="23.0788" id="svg_32"/>
                </g>
                :null
                }
                {tries<5?
                    <rect transform="rotate(139.71775817871094 136.7581787109375,85.96707153320314) " stroke="#000" class="left_arm" fill="#07ffc9" strokeWidth="0" x="135.5082" y="74.90763" width="2.49995" height="22.11887" id="svg_36"/>
                    :null
                }
                {tries<4?
                    <rect stroke="#000" class="torso" fill="#07ffc9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" x="143.34801" y="94.23871" width="2.08696" height="20.48228" id="svg_38"/>
                    :null
                }
                {tries<3?
                    <rect transform="rotate(38.08864974975586 151.6085357666016,85.35657501220703) " stroke="#000" class="right_arm" fill="#07ffc9" strokeWidth="0" x="150.35855" y="73.68631" width="2.49995" height="23.34053" id="svg_34"/>
                    :null
                }
                {tries<2?
                    <rect transform="rotate(-146.4536590576172 137.6775360107422,123.99925231933595) " stroke="#000" class="left_leg" fill="#07ffc9" strokeWidth="0" x="136.42756" y="111.37273" width="2.49995" height="25.25304" id="svg_41"/>
                    :null
                }
                {tries<1?
                 <rect transform="rotate(-30.7056827545166 150.40476989746102,123.9992446899414) " stroke="#000" class="right_leg" fill="#07ffc9" strokeWidth="0" x="149.15481" y="111.37273" width="2.49995" height="25.25304" id="svg_2"/>
                 :null
                }
            </g>
        </svg>
    )
}
export default Svgs