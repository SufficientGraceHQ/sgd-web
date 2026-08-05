import Image from 'next/image'
import Link from 'next/link'

const CATEGORIES = [
  {
    name: 'Furniture',
    description: 'Sofas, beds, wardrobes, dining sets, and statement pieces.',
    image: '/images/category-furniture.webp',
    className: 'category-card--feature',
  },
  {
    name: 'Appliances',
    description: 'Fridges, washing machines, air conditioners, and home essentials.',
    image: '/images/category-appliances.webp',
    className: '',
  },
  {
    name: 'Electronics',
    description: 'Televisions, laptops, sound systems, phones, and gadgets.',
    image: '/images/category-electronics.webp',
    className: '',
  },
]

export default function Categories() {
  return (
    <section className="editorial-categories" aria-labelledby="category-heading">
      <div className="site-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow"><span /> Browse the marketplace</p>
            <h2 id="category-heading">Made for the way<br /><em>Lagos homes move.</em></h2>
          </div>
          <p>
            Find the category you need, then continue to our official Instagram feed for current items and reference IDs.
          </p>
        </div>

        <div className="editorial-categories__grid">
          {CATEGORIES.map((category, index) => (
            <Link
              key={category.name}
              href="/listings"
              className={`editorial-category ${category.className}`}
            >
              <div data-editorial-category-image className="editorial-category__media">
                <Image
                  src={category.image}
                  alt={`Illustrative ${category.name.toLowerCase()} category scene`}
                  fill
                  loading="eager"
                  sizes={index === 0 ? '(min-width: 900px) 58vw, 100vw' : '(min-width: 900px) 38vw, 100vw'}
                />
              </div>
              <div className="editorial-category__gradient" aria-hidden="true" />
              <span className="editorial-category__index">0{index + 1}</span>
              <div className="editorial-category__copy">
                <p>Explore category</p>
                <h3>{category.name}</h3>
                <span>{category.description}</span>
              </div>
              <span className="editorial-category__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <p className="editorial-note">Category photography is illustrative. Current availability comes from official SGD posts.</p>
      </div>
    </section>
  )
}
