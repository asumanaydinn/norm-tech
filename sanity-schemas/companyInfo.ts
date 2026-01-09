// companyInfo.ts
export default {
  name: 'companyInfo',
  title: 'Şirket Bilgileri',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Kısa İsim',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Örn: NORM',
    },
    {
      name: 'fullName',
      title: 'Tam Ünvan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Örn: NORM SONDAJ TEKNOLOJİLERİ LTD ŞTİ.',
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 5,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'E-posta',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Adres',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'socialMedia',
      title: 'Sosyal Medya',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'fullName',
      media: 'logo',
    },
  },
};
