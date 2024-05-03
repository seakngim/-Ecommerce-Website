import ButtonComponent from "./ButtonComponent";

type PropType = {
  image: string;
  button: string;
  title: string;
};

export default function CardComponent({ image, title, button }: PropType) {
  return (
    <a href="#" className="group relative block">
      <img
        src={image}
        alt=""
        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
      />
      <div className="absolute right-0 inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <ButtonComponent name={button} />
      </div>
    </a>
  );
}