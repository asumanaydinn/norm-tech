// stats.ts
export default {
  name: 'stats',
  title: 'İstatistikler',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Etiket',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Örn: "Tamamlanan Projeler", "Yıllık Deneyim"',
    },
    {
      name: 'value',
      title: 'Değer',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'prefix',
      title: 'Ön Ek',
      type: 'string',
      description: 'Sayının önüne eklenir (örn: "$", "₺")',
    },
    {
      name: 'suffix',
      title: 'Son Ek',
      type: 'string',
      description: 'Sayının sonuna eklenir (örn: "+", "M", "K")',
    },
    {
      name: 'icon',
      title: 'İkon (İsteğe Bağlı)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
  orderings: [
    {
      title: 'Sıralama, Artan',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      label: 'label',
      value: 'value',
      order: 'order',
      suffix: 'suffix',
      prefix: 'prefix',
      media: 'icon',
    },
    prepare({ label, value, order, suffix, prefix, media }: any) {
      return {
        title: `${order}. ${label}`,
        subtitle: `${prefix || ''}${value}${suffix || ''}`,
        media,
      };
    },
  },
};
