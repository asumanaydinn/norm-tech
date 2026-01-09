// workProcess.ts
export default {
  name: 'workProcess',
  title: 'İş Süreçleri',
  type: 'document',
  fields: [
    {
      name: 'stepNumber',
      title: 'Adım Numarası',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
    },
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
      rows: 4,
      validation: (Rule: any) => Rule.required(),
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
  ],
  orderings: [
    {
      title: 'Adım Numarası, Artan',
      name: 'stepNumberAsc',
      by: [{ field: 'stepNumber', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      stepNumber: 'stepNumber',
      media: 'icon',
    },
    prepare({ title, stepNumber, media }: any) {
      return {
        title: `Adım ${stepNumber}: ${title}`,
        media,
      };
    },
  },
};
