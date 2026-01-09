export default {
  name: 'blog',
  title: 'Blog Yazıları',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'content',
      title: 'İçerik',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternatif Metin',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Teknoloji', value: 'Teknoloji' },
          { title: 'Mühendislik', value: 'Mühendislik' },
          { title: 'Maden Arama', value: 'Maden Arama' },
          { title: 'Sürdürülebilirlik', value: 'Sürdürülebilirlik' },
          { title: 'Yönetim', value: 'Yönetim' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Yazar',
      type: 'string',
      initialValue: 'NORM Engineering',
    },
    {
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Okuma Süresi (dk)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(60),
    },
    {
      name: 'featured',
      title: 'Öne Çıkan Yazı',
      type: 'boolean',
      description: 'Bu yazıyı ana sayfada öne çıkar',
      initialValue: false,
    },
    {
      name: 'tags',
      title: 'Etiketler',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'metaDescription',
      title: 'SEO Açıklaması',
      type: 'text',
      rows: 2,
      description: 'Arama motorları için açıklama (max 160 karakter)',
      validation: (Rule: any) => Rule.max(160),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection: any) {
      const { author, category } = selection;
      return {
        ...selection,
        subtitle: `${category} - ${author}`,
      };
    },
  },
  orderings: [
    {
      title: 'Yayın Tarihi, Yeni',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Yayın Tarihi, Eski',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Başlık, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
};
