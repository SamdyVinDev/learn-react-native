export const data = {
  _id: "123",
  name: "Test Name",
  desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maxime voluptatibus cum quis adipisci quasi, libero veniam tenetur ipsam magni sint, assumenda accusantium eveniet nemo ab nihil beatae sed commodi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maxime voluptatibus cum quis adipisci quasi, libero veniam tenetur ipsam magni sint, assumenda accusantium eveniet nemo ab nihil beatae sed commodi.",
  discount: 10,
  max_price: 120,
  min_price: 50,
  images: [
    {
      _id: "1",
      uri: "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
      thumbnail:
        "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
    },
    {
      _id: "2",
      uri: "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
      thumbnail:
        "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
    },
    {
      _id: "3",
      uri: "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
      thumbnail:
        "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
    },
  ],
  options: [
    {
      _id: "1",
      color: "Blue",
      sizes: [
        { _id: "1", desc: "S", quantity: 20 },
        { _id: "2", desc: "M", quantity: 15 },
        { _id: "3", desc: "L", quantity: 5 },
      ],
    },
    {
      _id: "2",
      color: "Red",
      sizes: [
        { _id: "1", desc: "S", quantity: 8 },
        { _id: "2", desc: "M", quantity: 12 },
        { _id: "3", desc: "L", quantity: 6 },
      ],
    },
    {
      _id: "3",
      color: "White",
      sizes: [
        { _id: "1", desc: "S", quantity: 10 },
        { _id: "2", desc: "M", quantity: 7 },
        { _id: "3", desc: "L", quantity: 3 },
      ],
    },
  ],
  orders: ["1", "2", "3"],
};
