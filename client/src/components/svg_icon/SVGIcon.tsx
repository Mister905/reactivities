import React from "react";

interface IProps {
  icon: string;
}

const icons: any = {
  calendar:
    "M17 3h-1v2h-3v-2h-6v2h-3v-2h-1c-1.101 0-2 0.9-2 2v12c0 1.1 0.899 2 2 2h14c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM17 17h-14v-8h14v8zM6.5 1h-2v3.5h2v-3.5zM15.5 1h-2v3.5h2v-3.5z",
  location_pin:
    "M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"
};

const SVGIcon: React.FC<IProps> = ({ icon }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20">
      <path d={icons[icon]}></path>
    </svg>
  );
};

export default SVGIcon;
