import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tv, Utensils, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/manus-storage/bar_atmosphere_1_25ef19b3.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/manus-storage/game_changers_logo_32047ec0.webp" 
              alt="Game Changers Bar & Grill" 
              className="h-32 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="heading-xl text-white mb-6 drop-shadow-lg">
            WHERE EVERY PLAY IS A GAME CHANGER
          </h1>
          
          <p className="text-xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
            Your ultimate destination for great food, refreshing drinks, and sports action
          </p>
          
          <div className="flex justify-center">
            <Link href="/menu">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8"
              >
                VIEW MENU
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center text-primary mb-16">
            WHY GAME CHANGERS?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Sports */}
            <div className="text-center p-8 rounded-lg border-2 border-primary/20 hover:border-primary transition hover:shadow-lg">
              <Tv className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="heading-md text-primary mb-3">LIVE SPORTS</h3>
              <p className="body-base text-muted-foreground">
                Multiple large screens showing all your favorite games - NFL, college football, basketball, and more
              </p>
            </div>

            {/* Great Food */}
            <div className="text-center p-8 rounded-lg border-2 border-accent/20 hover:border-accent transition hover:shadow-lg">
              <Utensils className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="heading-md text-accent mb-3">GREAT FOOD</h3>
              <p className="body-base text-muted-foreground">
                Wings, burgers, sandwiches, and appetizers made fresh daily. Perfect for game day or any day
              </p>
            </div>

            {/* Local Hangout */}
            <div className="text-center p-8 rounded-lg border-2 border-primary/20 hover:border-primary transition hover:shadow-lg">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="heading-md text-primary mb-3">LOCAL HANGOUT</h3>
              <p className="body-base text-muted-foreground">
                A friendly, welcoming community space where locals come to relax, eat, and enjoy the game
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center text-primary mb-16">
            FEATURED FAVORITES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wings */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <img 
                src="/manus-storage/food_wings_ff11545f.webp" 
                alt="Wings" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="heading-md text-primary mb-2">WINGS</h3>
                <p className="body-base text-muted-foreground mb-4">
                  Crispy wings with your choice of flavors - Buffalo, BBQ, Garlic Parmesan, Caribbean Jerk, Asian Zing, and more
                </p>
                <p className="font-bold text-accent">~$10-$12 per pound</p>
              </div>
            </div>

            {/* Burgers */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <img 
                src="/manus-storage/food_burger_fries_129e07ce.webp" 
                alt="Burgers" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="heading-md text-primary mb-2">BURGERS</h3>
                <p className="body-base text-muted-foreground mb-4">
                  All-Star Burger, Brunch Burger with egg and bacon, Mushroom & Swiss, and Pizza Burger
                </p>
                <p className="font-bold text-accent">Premium quality, half-pound patties</p>
              </div>
            </div>

            {/* Appetizers */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <img 
                src="/manus-storage/food_appetizer_cauliflower_1d6020cf.webp" 
                alt="Appetizers" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="heading-md text-primary mb-2">APPETIZERS</h3>
                <p className="body-base text-muted-foreground mb-4">
                  Boudin Balls, Pulled Pork Nachos, Breaded Cauliflower, and Fried Ravioli
                </p>
                <p className="font-bold text-accent">Perfect for sharing</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                SEE FULL MENU
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center text-primary mb-16">
            HOURS OF OPERATION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {/* Bar Hours */}
            <div className="border-2 border-primary rounded-lg p-8">
              <h3 className="heading-md text-primary mb-6">BAR HOURS</h3>
              <div className="space-y-3 body-base">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-bold">4 PM - 12 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-bold">4 PM - 1:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">11 AM - 1:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">11 AM - 10 PM</span>
                </div>
              </div>
            </div>

            {/* Kitchen Hours */}
            <div className="border-2 border-accent rounded-lg p-8">
              <h3 className="heading-md text-accent mb-6">KITCHEN HOURS</h3>
              <div className="space-y-3 body-base">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-bold">11 AM - 8 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Pizza (Fri/Sat)</span>
                  <span className="font-bold">Until 9 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">11 AM - 4 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            READY TO JOIN THE GAME?
          </h2>
          <p className="body-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit us at 414 S Main St, Palmyra, MO or call (573) 869-0022 to make a reservation
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
              >
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
