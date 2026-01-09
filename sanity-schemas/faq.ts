// faq.ts
export default {
  name: 'faq',
  title: 'Sık Sorulan Sorular',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Soru',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Cevap',
      type: 'text',
      rows: 6,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Genel', value: 'general' },
          { title: 'Madencilik', value: 'mining' },
          { title: 'Hizmetler', value: 'services' },
          { title: 'Projeler', value: 'projects' },
        ],
      },
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
      title: 'question',
      order: 'order',
      category: 'category',
    },
    prepare({ title, order, category }: any) {
      return {
        title: `${order}. ${title}`,
        subtitle: category ? `Kategori: ${category}` : '',
      };
    },
  },
};
