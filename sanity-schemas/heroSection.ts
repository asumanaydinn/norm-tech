// heroSection.ts
export default {
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Alt Başlık",
      type: "string",
    },
    {
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "backgroundImage",
      title: "Arka Plan Görseli",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "ctaText",
      title: "CTA Buton Metni",
      type: "string",
      initialValue: "Learn More",
    },
    {
      name: "ctaLink",
      title: "CTA Buton Linki",
      type: "string",
    },
    {
      name: "showVideoButton",
      title: "Video Butonu Göster",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      hidden: ({ document }: any) => !document?.showVideoButton,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "backgroundImage",
    },
  },
};
