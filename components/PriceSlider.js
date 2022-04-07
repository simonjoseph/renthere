// import Slider from 'rc-slider'
import React, {useState} from 'react'
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


import "rc-slider/assets/index.css";



function PriceSlider() {

  function handleSlider(event) {
    this.setState({ priceSlider: event });
    const priceMin = event[0];
    const priceMax1 = event[1];
    let priceMax;
    if (priceMax1 === 1000) {
      priceMax = 500000;
    } else {
      priceMax = priceMax1;
    }
    let query = {
      ...this.state.query,
      filter_by: {
        ...this.state.query.filter_by,
        price_min: priceMin,
        price_max: priceMax
      }
    };
    this.updateFilter(query);
  }

  let priceSlider = [49, 1000]
  // const [price, setPrice] = useState([1, 1000])
  return (
    <>
    <div className="price-filter col-6 col-sm-6 col-md-3 offset-md-3">
        <div className="slider orientation-reversed">
          <div className="slider-group">
            <div className="slider-horizontal">
              <label>Price</label>
              <Range
                allowCross={false}
                min={49}
                max={1000}
                step={1}
                marks={{ 49: "$49", 1000: "$1000+" }}
                value={priceSlider}
                onChange={e => handleSlider(e)}
                tipFormatter={value => `$${value}`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Slider 
        trackStyle={{
          transition: "0.3s ease background-color",
          height: 12,
          background: "#000"
        }}
        railStyle={{ background: "rgba(0, 0, 0, 0.3)", height: 12 }}
        min={1000}
        max= {50000}
        handleStyle={{
          height: 20,
          width: 20,
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          border: "none"
        }}
        /> */}
        
    </>

  )
}

export default PriceSlider