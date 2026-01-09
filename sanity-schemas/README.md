# Norm Engineering - Sanity Studio Schemas

Bu klasör, Sanity Studio'da kullanılacak schema tanımlamalarını içerir.

## Kurulum

1. Sanity Studio projesi oluşturun:

```bash
npm create sanity@latest
```

2. Proje bilgilerini girin:

   - Project name: norm-engineering-cms
   - Dataset: production
   - Output path: ./sanity-studio

3. Schema dosyalarını `sanity-studio/schemas` klasörüne kopyalayın

4. `sanity-studio/sanity.config.ts` dosyasında schema'ları import edin

## Schema Yapısı

### Content Types:

- **heroSection**: Ana sayfa hero bölümü
- **service**: Hizmet kartları
- **workProcess**: "Nasıl Çalışırız" adımları
- **faq**: Sık sorulan sorular
- **stats**: İstatistikler
- **partner**: İş ortakları
- **blogPost**: Blog yazıları
- **companyInfo**: Şirket bilgileri (singleton)
- **siteSettings**: Site ayarları (singleton)

## Environment Variables

Frontend projede `.env` dosyası oluşturun:

```
REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_TOKEN=your-token (optional, read-only için gerekli değil)
```

## Sanity Studio'yu Başlatma

```bash
cd sanity-studio
npm run dev
```

Studio http://localhost:3333 adresinde çalışacaktır.
