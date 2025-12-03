export interface Product {
  id: string
  name: string
  brand: string
  price: number
  image: string
  ecoScore: number
  category: string
  material: string
  impact: string
  style: number
  ethicsScore: number
  slug: string
  reviewer?: string
  rating?: number
  highlights?: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton T-Shirt",
    brand: "Patagonia",
    slug: "patagonia",
    price: 45,
    image: "/organic-cotton-tshirt-sustainable.jpg",
    ecoScore: 9.5,
    ethicsScore: 95,
    category: "Tops",
    material: "Organic Cotton",
    impact: "Saves 2,700L water",
    style: 30,
    rating: 9.5,
    reviewer: "Corbin Hayes",
    highlights: ["Fair Trade Certified", "1% for the Planet", "Repair Program", "Transparent Supply Chain"],
  },
  {
    id: "2",
    name: "Recycled Denim Jeans",
    brand: "Reformation",
    slug: "reformation",
    price: 128,
    image: "/recycled-denim-jeans-sustainable.jpg",
    ecoScore: 9.2,
    ethicsScore: 89,
    category: "Bottoms",
    material: "Recycled Denim",
    impact: "80% less water usage",
    style: 45,
    rating: 8.9,
    reviewer: "Juniper Moss",
    highlights: ["Climate Positive", "Deadstock Fabrics", "Water Conservation", "RefScale Tracking"],
  },
  {
    id: "3",
    name: "Hemp Blend Hoodie",
    brand: "Tentree",
    slug: "tentree",
    price: 78,
    image: "/hemp-hoodie-sustainable.jpg",
    ecoScore: 9.8,
    ethicsScore: 90,
    category: "Outerwear",
    material: "Hemp + Organic Cotton",
    impact: "10 trees planted",
    style: 25,
    rating: 9.0,
    reviewer: "Orion Vance",
    highlights: ["10 Trees per Item", "Sustainable Materials", "Climate+ Positive", "Transparent Impact"],
  },
  {
    id: "4",
    name: "Bamboo Yoga Pants",
    brand: "Girlfriend Collective",
    slug: "girlfriend-collective",
    price: 68,
    image: "/bamboo-yoga-pants.jpg",
    ecoScore: 9.4,
    ethicsScore: 88,
    category: "Activewear",
    material: "Bamboo Fiber",
    impact: "Biodegradable",
    style: 20,
    rating: 8.8,
    reviewer: "Petra Novak",
    highlights: ["Made from Recycled Bottles", "Inclusive Sizing", "Transparent Factories", "Carbon Neutral"],
  },
  {
    id: "5",
    name: "Recycled Wool Sweater",
    brand: "Everlane",
    slug: "everlane",
    price: 95,
    image: "/recycled-wool-sweater.png",
    ecoScore: 9.1,
    ethicsScore: 87,
    category: "Tops",
    material: "Recycled Wool",
    impact: "Carbon neutral",
    style: 75,
    rating: 8.7,
    highlights: ["Radical Transparency", "Ethical Factories", "Carbon Neutral Shipping", "Recycled Materials"],
  },
  {
    id: "6",
    name: "Cork Leather Jacket",
    brand: "Stella McCartney",
    slug: "stella-mccartney",
    price: 350,
    image: "/cork-leather-jacket-vegan.jpg",
    ecoScore: 9.7,
    ethicsScore: 94,
    category: "Outerwear",
    material: "Cork + Recycled Poly",
    impact: "Vegan & Cruelty-free",
    style: 95,
    rating: 9.4,
    highlights: ["No Leather or Fur", "Regenerative Agriculture", "Circular Design", "B Corp Certified"],
  },
  {
    id: "7",
    name: "Linen Summer Dress",
    brand: "Reformation",
    slug: "reformation",
    price: 148,
    image: "/linen-summer-dress-sustainable.jpg",
    ecoScore: 9.3,
    ethicsScore: 89,
    category: "Dresses",
    material: "European Linen",
    impact: "Zero waste pattern",
    style: 60,
    rating: 8.9,
    highlights: ["Climate Positive", "Deadstock Fabrics", "Water Conservation", "RefScale Tracking"],
  },
  {
    id: "8",
    name: "Recycled Sneakers",
    brand: "Allbirds",
    slug: "allbirds",
    price: 95,
    image: "/recycled-sustainable-sneakers.jpg",
    ecoScore: 9.6,
    ethicsScore: 85,
    category: "Footwear",
    material: "Recycled Materials",
    impact: "Carbon negative",
    style: 40,
    rating: 8.5,
    highlights: ["Carbon Footprint Labels", "Natural Materials", "B Corp Certified", "Renewable Energy"],
  },
  {
    id: "9",
    name: "Hemp Canvas Sneakers",
    brand: "Veja",
    slug: "veja",
    price: 120,
    image: "/hemp-sneakers-sustainable.jpg",
    ecoScore: 9.2,
    ethicsScore: 92,
    category: "Footwear",
    material: "Hemp + Wild Rubber",
    impact: "Fair Trade certified",
    style: 40,
    rating: 9.2,
    highlights: ["Fair Trade", "Organic Cotton", "Wild Rubber", "No Advertising"],
  },
  {
    id: "10",
    name: "Linen Dress Shirt",
    brand: "Reformation",
    slug: "reformation",
    price: 98,
    image: "/linen-dress-shirt.jpg",
    ecoScore: 9.0,
    ethicsScore: 89,
    category: "Tops",
    material: "European Linen",
    impact: "Natural fiber",
    style: 75,
    rating: 8.8,
    highlights: ["Climate Positive", "Deadstock Fabrics", "Water Conservation", "RefScale Tracking"],
  },
  {
    id: "11",
    name: "Organic Denim Jeans",
    brand: "Nudie Jeans",
    slug: "nudie-jeans",
    price: 140,
    image: "/organic-denim-jeans.jpg",
    ecoScore: 9.1,
    ethicsScore: 91,
    category: "Bottoms",
    material: "Organic Cotton Denim",
    impact: "Free repairs for life",
    style: 45,
    rating: 9.0,
    highlights: ["100% Organic Cotton", "Free Repairs", "Transparent Production", "Fair Trade"],
  },
  {
    id: "12",
    name: "Cork Sandals",
    brand: "Birkenstock",
    slug: "birkenstock",
    price: 85,
    image: "/cork-sandals.jpg",
    ecoScore: 8.2,
    ethicsScore: 82,
    category: "Footwear",
    material: "Natural Cork",
    impact: "Biodegradable materials",
    style: 20,
    rating: 8.5,
    highlights: ["Natural Materials", "German Craftsmanship", "Comfortable Footbed", "Long Lasting"],
  },
]

// Helper function to get unique brands
export function getBrands() {
  const brandMap = new Map<
    string,
    {
      brand: string
      slug: string
      rating: number
      category: string
      ethicsScore: number
      highlights: string[]
      image: string
    }
  >()

  products.forEach((product) => {
    if (!brandMap.has(product.slug) && product.rating && product.highlights) {
      brandMap.set(product.slug, {
        brand: product.brand,
        slug: product.slug,
        rating: product.rating,
        category: product.category,
        ethicsScore: product.ethicsScore,
        highlights: product.highlights,
        image: product.image,
      })
    }
  })

  return Array.from(brandMap.values())
}

// Helper function to get products by category
export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

// Helper function to get products by brand
export function getProductsByBrand(slug: string) {
  return products.filter((p) => p.slug === slug)
}
