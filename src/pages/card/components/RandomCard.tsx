import { randomConfigState } from "@/atom/random";
import { useSelections } from "ahooks";
import _, { set } from "lodash";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export const RandomCard = ({
  data,
  value,
  configKey,
}: {
  data: string[];
  value: string | string[];
  configKey: string;
}) => {
  const { selected, isSelected, toggle } = useSelections(data, data);
  const setRandomConfig = useSetRecoilState(randomConfigState);
  useEffect(() => {
    setRandomConfig((prev) => {
      return {
        ...prev,
        [configKey]: selected,
      };
    });
  }, [selected]);
  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {_.isArray(value)
          ? (value as string[]).map((i) => {
              return (
                <span key={i} className="mr-1">
                  {i}
                </span>
              );
            })
          : value}
      </div>
      <div className="collapse-content">
        {data.map((item) => {
          return (
            <div className="form-control" key={item}>
              <label className="label cursor-pointer">
                <span className="label-text">{item}</span>
                <input
                  type="checkbox"
                  onChange={() => toggle(item)}
                  checked={isSelected(item)}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
