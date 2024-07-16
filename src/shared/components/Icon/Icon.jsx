import sprite from "./sprite.svg";

const Icon = ({ className, width, height, iconId }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

export default Icon;
