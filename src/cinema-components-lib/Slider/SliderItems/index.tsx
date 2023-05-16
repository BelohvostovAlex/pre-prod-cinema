import { SliderItemsProps } from "./interfaces";

const SliderItems = <T,>({ data, index, renderItem }: SliderItemsProps<T>) => {
  const dataLength = data.length;

  const mod = (n: number, m: number) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };
  return (
    <>
      {data?.map((item, idx) => {
        const indexTop = mod(index - 1, dataLength);
        const indexDown = mod(index + 1, dataLength);
        const indexLeft = mod(index - 1, dataLength);
        const indexRight = mod(index + 1, dataLength);
        const indexPrevLeft = mod(index - 2, dataLength);
        const indexPrevRight = mod(index + 2, dataLength);
        const top = idx === indexTop;
        const center = idx === index;
        const bot = idx === indexDown;
        const left = idx === indexLeft;
        const right = idx === indexRight;
        const prevLeft = idx === indexPrevLeft;
        const prevRight = idx === indexPrevRight;

        return renderItem(
          item,
          top,
          center,
          bot,
          left,
          right,
          prevLeft,
          prevRight,
        );
      })}
    </>
  );
};

export default SliderItems;
