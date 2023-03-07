import React, {useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

export default function PriceFilter() {
  const [price, setPrice] = useState([1, 25000000])
  return (
    <div>
      <Range
        marks={{
          1: `1kz`,
          25000000: `25000000kz`,
        }}
        min={1}
        max={25000000}
        defaultValue={[1, 25000000]}
        tipFormatter={(value) => `${value}kz`}
        tipProps={{
          placement: "top",
          visible: true,
        }}
        value={price}
        handleStyle={{
          borderRadius: "50%",
          background: "#fff",
          border: "solid 2px #00af9e",
        }}
        className="mt-8"
        onChange={(price) => setPrice(price)}
      />
    </div>
  );
}
