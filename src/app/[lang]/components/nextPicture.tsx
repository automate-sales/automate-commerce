import Image from 'next/image';
import { headers } from 'next/headers';

interface PictureProps {
  smImage: string;
  mdImage?: string;
  lgImage?: string;
  priority?: boolean;
  cover?: boolean;
}

export default function NextPicture({ smImage, mdImage, lgImage, priority = false, cover = false }: PictureProps) {
  // Detect the user-agent on the server side
  const userAgent = headers().get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);
  const isTablet = /tablet|ipad/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  // Tailwind classes for breakpoints
  const smClasses = `absolute block md:hidden`;
  const mdClasses = `absolute hidden md:block lg:hidden`;
  const lgClasses = `absolute hidden lg:block`;

  return (
    <div>
      {/* Mobile Image */}
      <Image
        src={smImage}
        alt="Mobile Image"
        priority={priority && isMobile}
        loading={isMobile ? 'eager' : 'lazy'}
        {...(cover
          ? { fill: true, className: `object-cover ${smClasses}` }
          : { width: 600, height: 400, className: smClasses }
        )}
      />

      {/* Tablet Image */}
      {mdImage && (
        <Image
          src={mdImage}
          alt="Tablet Image"
          priority={priority && isTablet}
          loading={isTablet ? 'eager' : 'lazy'}
          {...(cover
            ? { fill: true, className: `object-cover ${mdClasses}` }
            : { width: 800, height: 600, className: mdClasses }
          )}
        />
      )}

      {/* Desktop Image */}
      {lgImage && (
        <Image
          src={lgImage}
          alt="Desktop Image"
          priority={priority && isDesktop}
          loading={isDesktop ? 'eager' : 'lazy'}
          {...(cover
            ? { fill: true, className: `object-cover ${lgClasses}` }
            : { width: 1200, height: 800, className: lgClasses }
          )}
        />
      )}
    </div>
  );
}
