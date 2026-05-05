import { Card } from "@/components/ui/card";

export default function Menu() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg text-primary mb-4">OUR MENU</h2>
          <p className="body-lg text-primary-foreground/90">
            Fresh, bold flavors made to order. Perfect for game day or any day.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Wings */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 border-b-4 border-accent pb-4">WINGS</h2>
            <p className="body-base text-muted-foreground mb-6">Sold by the pound (~8 wings) with one side</p>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-primary mb-2">FLAVORS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 body-base">
                  <div>• Buffalo</div>
                  <div>• BBQ</div>
                  <div>• Garlic Parmesan</div>
                  <div>• Caribbean Jerk</div>
                  <div>• Asian Zing</div>
                  <div>• Korean Pepper</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">DRY RUBS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 body-base">
                  <div>• Lemon Pepper</div>
                  <div>• House Rub</div>
                </div>
              </div>
            </div>
          </div>

          {/* Burgers */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 border-b-4 border-accent pb-4">BURGERS</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">ALL STAR BURGER</h3>
                <p className="body-base text-muted-foreground">Weekday special feature</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">BRUNCH BURGER</h3>
                <p className="body-base text-muted-foreground">Half-pound patty, egg, bacon, American cheese, chipotle ranch</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">MUSHROOM & SWISS BURGER</h3>
                <p className="body-base text-muted-foreground">Served with one side</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">PIZZA BURGER</h3>
                <p className="body-base text-muted-foreground">Pizza-style toppings on a juicy burger</p>
              </div>
            </div>
          </div>

          {/* Sandwiches & Baskets */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 border-b-4 border-accent pb-4">SANDWICHES & BASKETS</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">REUBEN SANDWICH</h3>
                <p className="body-base text-muted-foreground">Fan favorite, frequent special</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">JERK CHICKEN SANDWICH</h3>
                <p className="body-base text-muted-foreground">Pineapple, served with one side</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">CATFISH BASKET</h3>
                <p className="body-base text-muted-foreground">Fish Friday feature - crispy and delicious</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">FRIED TENDERLOIN</h3>
                <p className="body-base text-muted-foreground">Thursday special</p>
              </div>
            </div>
          </div>

          {/* Appetizers */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 border-b-4 border-accent pb-4">APPETIZERS</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">BOUDIN BALLS</h3>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">PULLED PORK NACHOS / HORSESHOES</h3>
                <p className="body-base text-muted-foreground">Loaded with smoked pork</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">BREADED CAULIFLOWER</h3>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-2">FRIED RAVIOLI</h3>
              </div>
            </div>
          </div>

          {/* Weekly Specials */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 border-b-4 border-accent pb-4">WEEKLY SPECIALS</h2>
            
            <div className="space-y-4">
              <div className="bg-accent text-accent-foreground p-6 rounded-lg">
                <h3 className="heading-sm mb-2">WING WEDNESDAY</h3>
                <p className="body-base">1 lb wings + side (~$10–$12)</p>
              </div>

              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="heading-sm mb-2">FISH FRIDAY</h3>
                <p className="body-base">Catfish baskets and Reuben sandwiches</p>
              </div>

              <div className="bg-accent text-accent-foreground p-6 rounded-lg">
                <h3 className="heading-sm mb-2">THURSDAY SPECIAL</h3>
                <p className="body-base">Fried Tenderloin</p>
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 border-b-4 border-accent pb-4">DRINKS & SPECIALS</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">BUSCH LIGHT MUG</h3>
                <p className="body-base text-muted-foreground font-bold">~$2.50</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">BUSCH LIGHT PITCHER</h3>
                <p className="body-base text-muted-foreground font-bold">~$6.00</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">DOMESTIC BEER FLIGHTS</h3>
                <p className="body-base text-muted-foreground font-bold">~$8.00</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-2">SPECIALTY FLIGHTS</h3>
                <p className="body-base text-muted-foreground font-bold">~$10.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-primary-foreground mb-4">READY TO ORDER?</h2>
          <p className="body-lg text-primary-foreground/90 mb-6">
            Call us at (573) 869-0022 or visit us in person
          </p>
          <button 
            onClick={() => window.location.href = "tel:(573) 869-0022"}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-bold text-lg transition cursor-pointer"
          >
            CALL NOW
          </button>
        </div>
      </section>
    </div>
  );
}
