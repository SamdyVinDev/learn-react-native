export const test_data = {
  _id: "123",
  name: "Test Name",
  desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maxime voluptatibus cum quis adipisci quasi, libero veniam tenetur ipsam magni sint, assumenda accusantium eveniet nemo ab nihil beatae sed commodi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maxime voluptatibus cum quis adipisci quasi, libero veniam tenetur ipsam magni sint, assumenda accusantium eveniet nemo ab nihil beatae sed commodi.",
  discount: 25,
  max_price: 120,
  min_price: 50,
  options: [
    {
      _id: "1",
      color: "Blue",
      image: {
        _id: "1",
        uri: "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
        thumbnail:
          "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
      },
      sizes: [
        { _id: "1", desc: "S", quantity: 20 },
        { _id: "2", desc: "M", quantity: 15 },
        { _id: "3", desc: "L", quantity: 5 },
      ],
    },
    {
      _id: "2",
      color: "Red",
      image: {
        _id: "1",
        uri: "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
        thumbnail:
          "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
      },
      sizes: [
        { _id: "1", desc: "S", quantity: 8 },
        { _id: "2", desc: "M", quantity: 12 },
        { _id: "3", desc: "L", quantity: 6 },
      ],
    },
    {
      _id: "3",
      color: "White",
      image: {
        _id: "1",
        uri: "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
        thumbnail:
          "https://botero.com.au/wp-content/uploads/mens-tshirt-front-1.jpg",
      },
      sizes: [
        { _id: "1", desc: "S", quantity: 10 },
        { _id: "2", desc: "M", quantity: 7 },
        { _id: "3", desc: "L", quantity: 3 },
      ],
    },
  ],
  orders: ["1", "2", "3"],
};
