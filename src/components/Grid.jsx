import Card from "./Cards"

const Grid = () => {
   return (
      <div className="Grid">
         <Card 
         img="src/assets/picone.jpeg" 
         name="Picone" 
         location="Denton" 
         link="https://piconedenton.net/"
         description="Cozy, casual, personable, and homey Italian American spot with a weekly changing menu. Whatever they are cooking that week, just know it's going to be consistently great!"
         />

         <Card 
         img="src/assets/eagle-cawfee.jpeg" 
         name="Eagle Cawfee" 
         location="Denton" 
         link="https://www.instagram.com/eaglecawffee/"
         description="Student owned coffee bar tucked inside a hair salon which is unexpected but awesome. Some of the best matcha in DFW honestly! The mango matcha is definetely a standout."
         />

         <Card 
         img="src/assets/lucis.jpg"  
         name="Luci's Restaurant" 
         location="Lewisville" 
         link="https://lucis-restaurant.restaurants-world.com/"
         description="One of the tastiest Latin spots around. Great drinks, crisp empanadas, and a dreamy cachapa stuffed with melty cheese all at wallet-friendly prices."
         />

         <Card 
         img="src/assets/hotsome.jpg" 
         name="Hotsome Chicken" 
         location="Lewisville" 
         link="https://hotsome-chicken.res-menu.com/"
         description="Top-tier Korean fried chicken inside H-Mart. Tons of flavors (the Korean Junkie is my fave) and don’t skip the cheesling fries, then grab dessert in the market!"
         />

         <Card 
         img="src/assets/filipino.jpeg" 
         name="Inihaw Avenue Filipino Kitchen" 
         location="Irving" 
         link="https://www.inihawavenue.com/"
         description="Fantastic pork dishes, friendly service, refreshing limeade, and tasty desserts. There’s also a small market inside! Overall a top-tier Filipino spot."
         />

         <Card 
         img="src/assets/pine-isle.jpeg" 
         name="Pine Isle" 
         location="Dallas" 
         link="https://www.alohapineisle.com/"
         description="iny place, big flavor. The kalbi is excellent, simple, satisfying, and a new favorite I’m already planning to revisit."
         />

         <Card 
         img="src/assets/pupusas.jpeg" 
         name="Pupusas Dona Lola" 
         location="Carrollton" 
         link="https://www.pupusasdonalola.com/"
         description="Hearty, generously stuffed pupusas with serious cheese pull, easily among the best in DFW and still reasonably priced."
         />

         <Card 
         img="src/assets/antojitos.jpeg" 
         name="Antojitos El Rey" 
         location="Denton" 
         link="https://www.snackselrey.com/"
         description="Craving a Mexican snack? They’ve got it all! Sweet, savory, fruit, drinks, one stop for all your antojo needs."
         />

         <Card 
         img="src/assets/ravelin.jpeg"
         name="Ravelin Bakery"
         location="Denton" 
         link="https://ravelinbakerydenton.wordpress.com/about-ravelin-bakery/"
         description="A Denton staple for baked goods. Hard to go wrong with anything here. Excellent sourdough at fair prices."
         />

         <Card
         img="src/assets/ajumma.jpeg"
         name="Ajumma SUNDAE DELI"
         location="Carrollton"
         link="http://www.ajummastx.com/"
         description="Comforting Korean fare made with love. Generous portions and fair prices. Home style flavors that hit the spot."
         />
      </div>
   )
}

export default Grid