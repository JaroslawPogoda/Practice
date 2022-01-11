import Item from "./components/Item";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Header storeName='Babbage Cabbage' eventName="50 for 50" eventDate='January 7th-9th from 9:00am - 3:00pm' imgStore="https://payload.cargocollective.com/1/10/331191/10383162/charlesbabbageweb_1000.jpg"/>
      <div className="itemsList">

      <Item name="Charcoal Grill" discountPrice="$197.00" img="https://image.made-in-china.com/43f34j00akbGJrQRqBqf/18inch-Weber-Kettle-BBQ-Grill-Charcoal-BBQ-Grill.jpg" />

      <Item name="Fruit Platter" discountPrice="$12.88" img="https://www.whattheforkfoodblog.com/wp-content/uploads/2016/11/Turkey-Fruit-Platter-8-200x300.jpg.webp" />

      <Item name="Gourmet Cupcakes 6 Count" discountPrice="$19.99" img="https://thefoodcharlatan.com/wp-content/uploads/2017/10/IMG_8622-e1507163015136-200x300.jpg" />

      <Item name="Charcuterie Board" discountPrice="$29.87" img="https://carltonlanding.com/wp-content/uploads/2020/09/IMG-5649-200x300.jpg"/>

      <Item name="Organic Avocados" discountPrice="$4.24" img="https://www.westfaliafruit.com/wp-content/uploads/2021/08/Wesstfalia-avocados-200x300.jpg" />

      <Item name="Kitchen Knife Set" discountPrice="$63.59" img="https://i.ebayimg.com/images/g/kPgAAOSwQPtftpQx/s-l300.jpg" />

      <Item name="Cabbage" discountPrice="$3.75" img="https://healthyfitnessmeals.com/wp-content/uploads/2020/11/how-to-cut-cabbage-4-ways-rena-3-200x300.jpg" />
      </div>
      <Footer storeHours='(9am to 9pm, Tuesday-Sunday)' storeLocation='123 Babbage Street, Beverly Hills CA 90210' telephone='101-101-1010'/>
    </div>
  );
}

export default App;
