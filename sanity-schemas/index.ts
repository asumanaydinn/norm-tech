// index.ts - Tüm schema'ları export eden dosya

import heroSection from './heroSection';
import service from './service';
import workProcess from './workProcess';
import faq from './faq';
import stats from './stats';
import companyInfo from './companyInfo';
import blog from './blog';

export const schemaTypes = [
  heroSection,
  service,
  workProcess,
  faq,
  stats,
  companyInfo,
  blog,
];
