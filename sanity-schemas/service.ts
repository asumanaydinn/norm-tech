// service.ts
export default {
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'İkon/Görsel',
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
      title: 'title',
      order: 'order',
      media: 'icon',
    },
    prepare({ title, order, media }: any) {
      return {
        title: `${order}. ${title}`,
        media,
      };
    },
  },
};
