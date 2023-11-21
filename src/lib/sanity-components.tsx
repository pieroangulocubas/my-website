import { urlFor } from "./sanity.config"

const SampleImageComponent = ({value, isInline}:any) => {
  return (
    <div>
      <img
        src={urlFor()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          display: isInline ? 'inline-block' : 'block',
        }}
      />
    </div>
  )
}

export const components = {
  types: {
    image: SampleImageComponent,
  },
}