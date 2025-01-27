interface CustomObjectProps {
  variants:
    | "line-purple-left"
    | "full"
    | "green"
    | "orange-half-circle-lines"
    | "hero-left-full"
    | "circle-2"
    | "blue-short-line-left"
    | "hero-left-full-gif"
    | "purple-dots"
    | "purple-line-small-right"
    | "green-disk"
    | "orange-disk"
    | "blue-dots"
    | "line-orange-left"
    | "long-line-orange-left"
    | "long-line-teal-left"
    | "line-teal-up"
    | "teal-disk"
    | "vector_one"
    | "half-dash-yellow"
    | "text-rotate"
    | "yellow-doted"
    | "green-doted"
    | "vector_fixed"; 


  className: string;
}

function CustomObject({ variants, className }: CustomObjectProps) {
  const objectVariants = {
    "line-purple-left": "/izhtech/images/objects/purple-line-left.svg",
    "circle-2": "/izhtech/images/objects/circle-2.gif",
    "half-dash-yellow":"/izhtech/images/objects/half-dash-yellow.gif",
    "full": "/izhtech/images/objects/ful.gif",
    "green": "/izhtech/images/objects/green.gif",
    "orange-half-circle-lines": "/izhtech/images/objects/orange-half-circle-lines.svg",
    "hero-left-full": "/izhtech/images/objects/hero-full.svg",
    "hero-left-full-gif": "/izhtech/images/objects/hero-full.gif",
    "purple-dots": "/izhtech/images/objects/purple-dots.svg",
    "blue-dots": "/izhtech/images/objects/blue-dots.svg",
    "line-orange-left": "/izhtech/images/objects/orange-line-left.svg",
    "long-line-orange-left": "/izhtech/images/objects/orange-line-long-left.svg",
    "long-line-teal-left": "/izhtech/images/objects/teal-line-long-left.svg",
    "green-disk": "/izhtech/images/objects/green-disk.svg",
    "orange-disk": "/izhtech/images/objects/orange-right.svg",
    "line-teal-up": "/izhtech/images/objects/line-up-teal.svg",
    "teal-disk": "/izhtech/images/objects/teal-disk.svg",
    "purple-line-small-right": "/izhtech/images/objects/purple-line-right-small.gif",
    "vector_one": "/izhtech/images/objects/Vector1.png",
    "vector_fixed": "/izhtech/images/objects/purple-line-right-small-rename.svg",
    "blue-short-line-left": "/izhtech/images/objects/blue-short-line-left.gif",
    "text-rotate": "/izhtech/images/objects/text-rotate.gif",
    "green-doted": "/izhtech/images/objects/green-doted.png",
    "yellow-doted" : "/izhtech/images/objects/yellow-doted.png"
  };

 

  const imageSrc: string =
    objectVariants[variants] || "/izhtech/images/objects/purple-line-left.svg"; 

  return (
    <img
      className={` ${className}`}
      src={imageSrc}
      alt={`Custom object variant: ${variants}`}
    />
  );
}

export default CustomObject;
