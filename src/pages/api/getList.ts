import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any[];
  status: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    status: 200,
    data: [
      {
        name: "MAX AIR Men's Mesh Running Shoes",
        discription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est ducimus enim at animi sint ad! Tempore maiores.",
        popularity: 1252,
        image: "./images1.jpg",
        date: new Date("2015-03-25"),
      },
      {
        name: "Neo Splash Blue Dial Watch",
        discription:
          "This watch offers 24 months warranty on the Movement and 12 months warranty on the Battery from the date of purchase.",
        popularity: 1330,
        image: "./image2.jpg",
        date: new Date("2011-03-25"),
      },
      {
        name: "Apple iPhone 12 ",
        discription:
          "6.1-inch (15.5 cm diagonal) Super Retina XDR display. Ceramic Shield, tougher than any smartphone glass.",
        popularity: 231,
        image: "./image3.jpg",
        date: new Date("2014-03-25"),
      },
      {
        name: "GAINX Aviator Sunglasses",
        discription:
          "Fashion and stylish design - The square aviator sunglasses are suitable for any face. Alloy metal frames with acetate glass lenses.",
        popularity: 546,
        image: "./image4.jpg",
        date: new Date("2010-03-25"),
      },
      {
        name: "Zebronics On Ear Headphone",
        discription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est ducimus enim at animi sint ad! Tempore maiores illum!",
        popularity: 869,
        image: "./image.jpg",
        date: new Date("2018-03-25"),
      },
      {
        name: "boAt Xtend Smartwatch",
        discription:
          "Screen Size- 1.69 big square colour LCD display with a round dial features complete capacitive touch experience to let you take control.",
        popularity: 645,
        image: "./image9.jpg",
        date: new Date("2020-03-25"),
      },
      {
        name: "NAPA HIDE India Leather Men's Wallet",
        discription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est ducimus enim at animi sint ad! Tempore maiores.",
        popularity: 756,
        image: "./image5.jpg",
        date: new Date("2017-03-25"),
      },
      {
        name: "Jbuds-Air-3",
        discription:
          "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours.",
        popularity: 980,
        image: "./image8.jpg",
        date: new Date("2023-03-25"),
      },
      {
        name: "Apple 2021 iPad Pro M1 chip",
        discription:
          "Apple M1 chip for next-level performance Brilliant 32.77 cm (12.9-inch) Liquid Retina XDR display with ProMotion True Tone.",
        popularity: 123,
        image: "./image6.jpg",
        date: new Date("2021-03-25"),
      },
      {
        name: "Apple iPhone 14 Plus ",
        discription:
          "16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps.",
        popularity: 5000,
        image: "./image7.webp",
        date: new Date("2016-03-25"),
      },
    ],
  });
}
