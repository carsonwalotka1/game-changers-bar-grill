export default function Events() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary-foreground mb-4">EVENTS & SPECIALS</h1>
          <p className="body-lg text-primary-foreground/90">
            Check out our weekly specials and upcoming events
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Weekly Specials */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 text-center">WEEKLY SPECIALS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Monday */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="heading-md text-primary mb-4">MONDAY</h3>
                <p className="body-base text-muted-foreground mb-2">Bar: 4 PM - 12 AM</p>
                <p className="body-base text-muted-foreground">Kitchen: 11 AM - 8 PM</p>
                <p className="body-base text-accent font-bold mt-4">Great day to watch the game!</p>
              </div>

              {/* Tuesday */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="heading-md text-primary mb-4">TUESDAY</h3>
                <p className="body-base text-muted-foreground mb-2">Bar: 4 PM - 12 AM</p>
                <p className="body-base text-muted-foreground">Kitchen: 11 AM - 8 PM</p>
                <p className="body-base text-accent font-bold mt-4">Perfect for mid-week hangouts</p>
              </div>

              {/* Wednesday */}
              <div className="bg-accent text-accent-foreground p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="heading-md text-accent-foreground mb-4">🍗 WING WEDNESDAY 🍗</h3>
                <p className="body-base text-accent-foreground/90 mb-2">Bar: 4 PM - 12 AM</p>
                <p className="body-base text-accent-foreground/90">Kitchen: 11 AM - 8 PM</p>
                <p className="body-base font-bold mt-4">1 LB WINGS + SIDE</p>
                <p className="heading-sm text-accent-foreground">~$10-$12</p>
                <p className="body-base text-accent-foreground/90 mt-4">Your choice of flavors: Buffalo, BBQ, Garlic Parmesan, Caribbean Jerk, Asian Zing, Korean Pepper, Lemon Pepper, or House Rub</p>
              </div>

              {/* Thursday */}
              <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg border-t-4 border-accent">
                <h3 className="heading-md text-primary-foreground mb-4">🍖 THURSDAY SPECIAL 🍖</h3>
                <p className="body-base text-primary-foreground/90 mb-2">Bar: 4 PM - 12 AM</p>
                <p className="body-base text-primary-foreground/90">Kitchen: 11 AM - 8 PM</p>
                <p className="body-base font-bold mt-4">FRIED TENDERLOIN</p>
                <p className="body-base text-primary-foreground/90 mt-4">A local favorite! Crispy, golden fried tenderloin served with your choice of sides</p>
              </div>

              {/* Friday */}
              <div className="bg-accent text-accent-foreground p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="heading-md text-accent-foreground mb-4">🐟 FISH FRIDAY 🐟</h3>
                <p className="body-base text-accent-foreground/90 mb-2">Bar: 4 PM - 1:30 AM</p>
                <p className="body-base text-accent-foreground/90">Kitchen: 11 AM - 9 PM (Pizza until 9 PM)</p>
                <p className="body-base font-bold mt-4">CATFISH BASKETS & REUBEN SANDWICHES</p>
                <p className="body-base text-accent-foreground/90 mt-4">Fresh, crispy catfish and our famous Reuben sandwiches. Perfect for Friday night!</p>
              </div>

              {/* Saturday */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="heading-md text-primary mb-4">SATURDAY</h3>
                <p className="body-base text-muted-foreground mb-2">Bar: 11 AM - 1:30 AM</p>
                <p className="body-base text-muted-foreground">Kitchen: 11 AM - 8 PM (Pizza until 9 PM)</p>
                <p className="body-base text-accent font-bold mt-4">All-day sports action!</p>
              </div>

              {/* Sunday */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <h3 className="heading-md text-primary mb-4">SUNDAY</h3>
                <p className="body-base text-muted-foreground mb-2">Bar: 11 AM - 10 PM</p>
                <p className="body-base text-muted-foreground">Kitchen: 11 AM - 4 PM</p>
                <p className="body-base text-accent font-bold mt-4">Perfect for game day brunch and afternoon games</p>
              </div>
            </div>
          </div>

          {/* Sports Events */}
          <div className="mb-16">
            <h2 className="heading-lg text-primary mb-8 text-center">LIVE SPORTS</h2>
            
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-accent">
              <p className="body-lg text-muted-foreground mb-6">
                Game Changers Bar & Grill is your ultimate destination for watching live sports. We have multiple large screens throughout the bar showing all your favorite games.
              </p>

              <h3 className="heading-md text-primary mb-4">SPORTS WE SHOW</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 body-base text-muted-foreground mb-8">
                <div>• NFL Football</div>
                <div>• College Football</div>
                <div>• NBA Basketball</div>
                <div>• College Basketball</div>
                <div>• MLB Baseball</div>
                <div>• NHL Hockey</div>
                <div>• Soccer</div>
                <div>• And more!</div>
              </div>

              <p className="body-base text-muted-foreground">
                Whether it's the Super Bowl, March Madness, the World Series, or just a regular season game, we've got you covered. Come join the Game Changers family and experience game day the way it should be!
              </p>
            </div>
          </div>

          {/* Future Events */}
          <div>
            <h2 className="heading-lg text-primary mb-8 text-center">UPCOMING EVENTS</h2>
            
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg text-center">
              <p className="body-lg text-primary-foreground/90 mb-4">
                Check back soon for special events, live entertainment, and seasonal celebrations!
              </p>
              <p className="body-base text-primary-foreground/80">
                Follow us on Facebook and Instagram for the latest updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-accent-foreground mb-4">DON'T MISS OUT!</h2>
          <p className="body-lg text-accent-foreground/90 mb-6">
            Make your reservation or stop by for our weekly specials
          </p>
          <button 
            onClick={() => window.location.href = "tel:(573) 869-0022"}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            CALL NOW
          </button>
        </div>
      </section>
    </div>
  );
}
