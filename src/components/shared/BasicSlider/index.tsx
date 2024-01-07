import { ConfigProvider, Slider } from "antd";
import { SliderMarks } from "antd/es/slider";
import { ChangeEventHandler, useState } from "react";

type BasicSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

function getGradientColor(percentage: number) {
  const startColor = [255, 92, 1];
  const endColor = [255, 210, 95];

  const midColor = startColor.map((start, i) => {
    const end = endColor[i];
    const delta = end - start;
    return (start + delta * percentage).toFixed(0);
  });

  return `rgb(${midColor.join(",")})`;
}

const BasicSlider = ({ value = 3, onChange }: BasicSliderProps) => {
  const start = 0;
  const end = (value * 15) / 100;

  const marks: SliderMarks = {
    3: {
      label: <span className="text-grey">3</span>,
    },
    6: {
      label: <span className="text-grey">6</span>,
    },
    9: {
      label: <span className="text-grey">9</span>,
    },
    12: {
      label: <span className="text-grey">12</span>,
    },
    15: {
      label: <span className="text-grey">15</span>,
    },
    20: {
      label: <span className="text-grey">50</span>,
    },
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            dotActiveBorderColor: "none",
            dotBorderColor: "none",
            handleColor: "#FFD05D",
            handleActiveColor: "#FFD05D",
            trackHoverBg: "#FFD05D",
            railHoverBg: "FFD05D",
          },
        },
      }}
    >
      <Slider
        className="[&>.ant-slider-step>.ant-slider-dot]:!bg-transparent"
        defaultValue={3}
        marks={marks}
        min={3}
        max={20}
        onChange={onChange}
        step={null}
        tooltip={{ open: false }}
        styles={{
          track: {
            background: "transparent",
          },
          tracks: {
            background: `linear-gradient(to right, ${getGradientColor(
              start
            )} 0%, ${getGradientColor(end)} 100%)`,
          },
        }}
      />
    </ConfigProvider>
  );
};

export default BasicSlider;
