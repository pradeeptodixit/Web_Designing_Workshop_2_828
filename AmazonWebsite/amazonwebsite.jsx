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