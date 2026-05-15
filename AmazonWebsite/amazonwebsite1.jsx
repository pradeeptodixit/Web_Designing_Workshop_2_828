export default function AmazonHomePageClone() {
  const cards = [
    {
      title: 'Pick up where you left off',
      items: [
        { name: 'Casio FX-991MS', img: 'https://placehold.co/120x120?text=Calculator' },
        { name: 'Casio FX-82MS', img: 'https://placehold.co/120x120?text=Calculator' },
        { name: 'Casio FX-350MS', img: 'https://placehold.co/120x120?text=Calculator' },
        { name: 'Casio FX-991ES', img: 'https://placehold.co/120x120?text=Calculator' },
      ],
      footer: 'Calculators',
    },
    {
      title: 'Shop by brand | Deals on top smartphones',
      items: [
        { name: 'Samsung', img: 'https://placehold.co/120x120?text=Samsung' },
        { name: 'Apple', img: 'https://placehold.co/120x120?text=Apple' },
        { name: 'OnePlus', img: 'https://placehold.co/120x120?text=OnePlus' },
        { name: 'iQOO', img: 'https://placehold.co/120x120?text=iQOO' },
      ],
      footer: 'See all offers',
    },
    {
      title: 'Up to 45% off | Echo with Alexa and Fire TV',
      items: [
        { name: 'Echo Show', img: 'https://placehold.co/120x120?text=Echo+Show' },
        { name: 'Fire TV Stick', img: 'https://placehold.co/120x120?text=Fire+TV' },
        { name: 'Echo Pop', img: 'https://placehold.co/120x120?text=Echo+Pop' },
        { name: 'Echo 4th Gen', img: 'https://placehold.co/120x120?text=Echo' },
      ],
      footer: 'See all deals',
    },
    {
      title: 'Up to 75% off | Deals on headphones',
      large: true,
      image: 'https://placehold.co/600x400?text=Headphones',
    },
    {
      title: 'Popular Toys & Games for Kids',
      items: [
        { name: 'Backpack', img: 'https://placehold.co/120x120?text=Backpack' },
        { name: 'DIY Kit', img: 'https://placehold.co/120x120?text=DIY+Kit' },
        { name: 'Wooden Toy', img: 'https://placehold.co/120x120?text=Toy' },
        { name: 'Inflatable', img: 'https://placehold.co/120x120?text=Float' },
      ],
    },
    {
      title: 'Shop by price | Deals on top smartphones',
      items: [
        { name: 'Budget', img: 'https://placehold.co/120x120?text=Budget' },
        { name: 'Mid-range', img: 'https://placehold.co/120x120?text=Mid' },
        { name: 'Premium', img: 'https://placehold.co/120x120?text=Premium' },
        { name: 'Ultra Premium', img: 'https://placehold.co/120x120?text=Ultra' },
      ],
      footer: 'See all offers',
    },
    {
      title: 'Up to 65% off | Offers on home appliances',
      items: [
        { name: 'Washing machines', img: 'https://placehold.co/120x120?text=Washer' },
        { name: 'Refrigerators', img: 'https://placehold.co/120x120?text=Fridge' },
        { name: 'Air conditioners', img: 'https://placehold.co/120x120?text=AC' },
        { name: 'Chimneys', img: 'https://placehold.co/120x120?text=Chimney' },
      ],
      footer: 'See all deals',
    },
    {
      title: 'Popular this category for Kids',
      items: [
        { name: 'Shoes', img: 'https://placehold.co/120x120?text=Shoes' },
        { name: 'Craft', img: 'https://placehold.co/120x120?text=Craft' },
        { name: 'Bracelet', img: 'https://placehold.co/120x120?text=Bracelet' },
        { name: 'Watch', img: 'https://placehold.co/120x120?text=Watch' },
      ],
    },
    {
      title: 'Up to 80% off | Home, kitchen & more',
      items: [
        { name: 'Kitchen essentials', img: 'https://placehold.co/120x120?text=Kitchen' },
        { name: 'Home decor', img: 'https://placehold.co/120x120?text=Decor' },
        { name: 'Furniture', img: 'https://placehold.co/120x120?text=Furniture' },
        { name: 'Home improvement', img: 'https://placehold.co/120x120?text=Home' },
      ],
      footer: 'See all deals',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 font-sans">
      {/* Mobile Browser Header */}
      <div className="bg-gray-100 px-4 py-3 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🏠</div>
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-500 shadow-inner border">
            amazon.in
          </div>
          <div className="text-2xl">＋</div>
          <div className="w-8 h-8 border rounded-md flex items-center justify-center">3</div>
          <div className="text-2xl">⋮</div>
        </div>
      </div>

      {/* Amazon Top Nav */}
      <div className="bg-slate-900 text-white px-3 py-2">
        <div className="flex items-center gap-3 text-sm">
          <div className="font-bold text-xl">amazon.in</div>
          <div className="flex-1 bg-white rounded-md px-3 py-2 text-gray-500">Search Amazon.in</div>
          <button className="bg-yellow-400 text-black px-3 py-2 rounded-md">🔍</button>
        </div>
      </div>

      {/* Sale Banner */}
      <section className="relative bg-cyan-100 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center text-sm font-semibold py-1">
          Great Summer Sale | Live Now
        </div>
        <div className="pt-10 px-6 pb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Starting ₹9,499</h1>
            <p className="text-lg text-gray-700">Samsung smartphones</p>
            <p className="text-sm text-gray-600 mt-1">Best value deals</p>
          </div>
          <img
            src="https://placehold.co/220x180?text=Galaxy+S25"
            alt="Samsung Phone"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Product Cards Grid */}
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-4">
            <h2 className="text-2xl font-bold leading-tight mb-4 text-gray-900">
              {card.title}
            </h2>

            {card.large ? (
              <img
                src={card.image}
                alt={card.title}
                className="w-full rounded-xl object-cover"
              />
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {card.items.map((item, i) => (
                  <div key={i}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full aspect-square object-cover rounded-lg bg-gray-100"
                    />
                    <p className="text-xs mt-1 text-gray-700 line-clamp-1">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {card.footer && (
              <button className="mt-4 text-sky-700 text-sm font-medium hover:underline">
                {card.footer}
              </button>
            )}
          </div>
        ))}
      </main>

      {/* Premium Hardcovers */}
      <section className="bg-white mx-4 mb-6 rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Up to 35% off | Premium hardcovers</h2>
          <button className="text-sky-700 text-sm">See all</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {['Harry Potter', 'Unravel Me', 'Ignite Me', 'Collector Box', 'Restore Me'].map(
            (book) => (
              <img
                key={book}
                src={`https://placehold.co/180x260?text=${encodeURIComponent(book)}`}
                alt={book}
                className="w-full rounded-xl shadow-sm"
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}