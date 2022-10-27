import Cart from "../cart/cart";
import "./carts.css";

const items = [
  {
    img: "https://inter-nation.uz/student-asset/images/mymark.svg",
    title: "Marks",
    rout: "marks",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/exams.svg",
    title: "Exams",
    rout: "exams",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/hw.svg",
    title: "Homework",
    rout: "homework",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/lib.svg",
    title: "Library",
    rout: "library",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/mymark.svg",
    title: "Pay Online",
    rout: "pay-online",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/off-hours.svg",
    title: "Office hours",
    rout: "office-hours",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/books.svg",
    title: "Books",
    rout: "books",
  },
  {
    img: "https://inter-nation.uz/student-asset/images/vid.svg",
    title: "Videos",
    rout: "videos",
  },
];

function Carts() {
  return (
    <div className="carts">
      {items.map((item) => (
        <Cart
          key={item.title}
          img={item.img}
          title={item.title}
          rout={item.rout}
        />
      ))}
    </div>
  );
}

export default Carts;
