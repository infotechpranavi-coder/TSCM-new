import { createPermanentRedirectRoute } from '@/lib/permanentRedirectRoute';

export const { GET, HEAD } = createPermanentRedirectRoute('/membership');
