import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  ArrowRightOutlined,
  TagOutlined,
} from "@ant-design/icons";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Yapay Zekanın Gelecekteki Maden Arama Faaliyetlerindeki Potansiyeli ve Yeri",
    slug: "yapay-zekanin-gelecekteki-maden-arama-faaliyetlerindeki-potansiyeli-ve-yeri",
    excerpt:
      "Yapay zeka teknolojileri, maden arama süreçlerinde devrim yaratıyor. Makine öğrenimi ve derin öğrenme algoritmaları, jeolojik verilerin analizini hızlandırarak yeni kaynakların keşfini kolaylaştırıyor. 3D modelleme ve büyük veri analitiği ile kaynak potansiyeli daha hassas bir şekilde belirleniyor.",
    image:
      "/assets/Yapay-Zekanin-Gelecekteki-Maden-Arama-Faaliyetlerindeki-Potansiyeli-ve-Yeri.webp",
    category: "Teknoloji",
    author: "NORM Engineering",
    date: "Mayıs 2024",
    readTime: "8 dk",
    featured: true,
  },
  {
    id: 2,
    title: "Haritalandırma İşlemlerinin Maden Aramadaki Yeri ve Önemi",
    slug: "haritalandirma-islemlerinin-maden-aramadaki-yeri-ve-onemi",
    excerpt:
      "Jeolojik haritalama, maden arama çalışmalarının temel taşlarından biridir. Modern haritalama teknikleri ve dijital çözümler ile kaynak potansiyelinin belirlenmesi daha hassas hale geliyor.",
    image:
      "/assets/Micromine-Origin-22.5_Media-Release_Image_FINAL-scaled-1.jpg",
    category: "Mühendislik",
    author: "NORM Engineering",
    date: "Mayıs 2024",
    readTime: "7 dk",
  },
  {
    id: 3,
    title: "Maden Arama Faaliyetleri: Geleceğin Kaynaklarını Keşfetmek",
    slug: "maden-arama-faaliyetleri-gelecegin-kaynaklarini-kesfetmek",
    excerpt:
      "Maden arama faaliyetleri, yeraltı kaynaklarını keşfetmek ve değerlendirmek amacıyla yapılan sistematik çalışmalardır. Modern teknolojiler ve bilimsel yöntemler kullanılarak gerçekleştirilen bu faaliyetler, endüstriyel kalkınmanın temel taşlarından biridir.",
    image: "/assets/mineral-exp.jpg",
    category: "Maden Arama",
    author: "NORM Engineering",
    date: "Mayıs 2024",
    readTime: "6 dk",
  },
];

const categories = ["Tümü", "Teknoloji", "Mühendislik", "Maden Arama"];

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <article
      className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 ${
        featured ? "grid lg:grid-cols-2 gap-0" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${featured ? "lg:order-1" : ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            featured ? "h-full min-h-[400px]" : "h-[400px]"
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between">
          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            <TagOutlined />
            {post.category}
          </span>

          {/* Featured badge */}
          {featured && (
            <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full">
              Öne Çıkan
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className={`${
          featured
            ? "lg:order-2 flex flex-col justify-center p-6 lg:p-8"
            : "p-4"
        }`}
      >
        {/* Meta info */}
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1.5">
            <CalendarOutlined />
            {post.date}
          </span>
          <span className="text-amber-500 font-medium">
            {post.readTime} okuma
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300 ${
            featured ? "text-2xl lg:text-3xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`text-slate-400 leading-relaxed mb-4 ${
            featured ? "text-base" : "line-clamp-3 text-sm"
          }`}
        >
          {post.excerpt}
        </p>

        {/* Read more */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm hover:text-amber-400 group-hover:gap-4 transition-all duration-300"
        >
          Devamını Oku
          <ArrowRightOutlined className="text-base" />
        </Link>
      </div>

      {/* Hover border effect */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500"></div>
    </article>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="relative bg-slate-950 py-12 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              {/* Horizontal and vertical lines */}
              <path
                d="M 0 30 L 120 30 M 0 60 L 120 60 M 0 90 L 120 90"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-blue-600"
                fill="none"
              />
              <path
                d="M 30 0 L 30 120 M 60 0 L 60 120 M 90 0 L 90 120"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-600"
                fill="none"
              />
              {/* Circuit nodes */}
              <circle
                cx="30"
                cy="30"
                r="3"
                fill="currentColor"
                className="text-amber-600"
              />
              <circle
                cx="60"
                cy="60"
                r="3"
                fill="currentColor"
                className="text-blue-600"
              />
              <circle
                cx="90"
                cy="90"
                r="3"
                fill="currentColor"
                className="text-amber-600"
              />
              {/* Connection paths */}
              <path
                d="M 30 30 L 60 60 M 60 60 L 90 90"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-600"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            Blog & Haberler
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            Sektörden Son <span className="text-amber-500">Gelişmeler</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Madencilik, jeoloji ve mühendislik dünyasından en güncel haberler,
            teknik makaleler ve uzman görüşleri.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="space-y-6 mb-8">
          {/* Featured Post - Full Width */}
          {selectedCategory === "Tümü" && featuredPost && (
            <BlogCard post={featuredPost} featured />
          )}

          {/* Regular Posts - 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(selectedCategory === "Tümü"
              ? filteredPosts.filter((p) => !p.featured)
              : filteredPosts
            ).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Info Text */}
        <div className="text-center">
          <p className="text-slate-400 text-xs">
            Yeni blog yazıları yakında eklenecektir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
