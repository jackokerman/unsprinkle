export function OptimizedImage({ src, alt, ...delegated }) {
  const name = src.match(new RegExp(`images/(.*).jpg`))[1];
  return (
    <picture>
      <Source name={name} type="image/avif" file="avif" />
      <Source name={name} type="image/jpeg" file="jpg" />
      <img src={src} alt={alt} {...delegated} />
    </picture>
  );
}

function Source({ name, type, file }) {
  return (
    <source
      type={type}
      srcSet={`
        /images/${name}.${file} 1x,
        /images/${name}@2x.${file} 2x,
        /images/${name}@3x.${file} 3x,
      `}
    />
  );
}
