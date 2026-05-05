export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary-foreground mb-4">ABOUT US</h1>
          <p className="body-lg text-primary-foreground/90">
            Your local sports bar and gathering place
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="heading-lg text-primary mb-8">OUR STORY</h2>
            
            <div className="space-y-6 body-lg text-muted-foreground">
              <p>
                Game Changers Bar & Grill is more than just a restaurant—it's a community gathering place where locals come together to enjoy great food, refreshing drinks, and the excitement of live sports. Located in the heart of Palmyra, Missouri, we've become a beloved destination for game day and everyday celebrations.
              </p>

              <p>
                Our commitment is simple: provide an authentic sports bar experience with high-quality food, friendly service, and an atmosphere that feels like home. Whether you're here to catch the big game, celebrate with friends, or grab a quick bite, you'll feel the energy and warmth that makes Game Changers special.
              </p>

              <h3 className="heading-md text-accent mt-8 mb-4">OUR ATMOSPHERE</h3>
              <p>
                With multiple large screens showing all your favorite sports, a fully stocked bar, and a welcoming environment, Game Changers is the perfect place to be on game day. Our team takes pride in creating a space where everyone feels welcome—whether you're a die-hard sports fan or just looking for a great meal.
              </p>

              <h3 className="heading-md text-accent mt-8 mb-4">OUR FOOD</h3>
              <p>
                We serve fresh, made-to-order food that goes beyond typical bar fare. From our famous wings in multiple flavors to premium burgers, sandwiches, and appetizers, every dish is prepared with care. Our weekly specials—Wing Wednesday, Fish Friday, and Thursday's Fried Tenderloin—have become local favorites.
              </p>

              <h3 className="heading-md text-accent mt-8 mb-4">OUR COMMUNITY</h3>
              <p>
                Game Changers is proud to be part of the Palmyra community. We're not just a business—we're a gathering place where neighbors become friends, where celebrations happen, and where everyone feels like part of the team. Come join us and become part of the Game Changers family.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16">
            <h2 className="heading-lg text-primary mb-8 text-center">WHY CHOOSE GAME CHANGERS?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-3">LIVE SPORTS</h3>
                <p className="body-base text-muted-foreground">Multiple screens showing NFL, college football, basketball, and more</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-3">QUALITY FOOD</h3>
                <p className="body-base text-muted-foreground">Fresh, made-to-order meals prepared with care</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-3">FRIENDLY STAFF</h3>
                <p className="body-base text-muted-foreground">Welcoming team dedicated to your experience</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-3">LOCAL PRIDE</h3>
                <p className="body-base text-muted-foreground">Community-focused atmosphere where everyone belongs</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="heading-sm text-primary mb-3">GREAT DRINKS</h3>
                <p className="body-base text-muted-foreground">Cold beers, specialty flights, and refreshing options</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                <h3 className="heading-sm text-accent mb-3">WEEKLY SPECIALS</h3>
                <p className="body-base text-muted-foreground">Wing Wednesday, Fish Friday, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-accent-foreground mb-4">VISIT US TODAY</h2>
          <p className="body-lg text-accent-foreground/90 mb-6">
            414 S Main St, Palmyra, MO 63461
          </p>
          <p className="body-lg text-accent-foreground/90 mb-6">
            (573) 869-0022
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
