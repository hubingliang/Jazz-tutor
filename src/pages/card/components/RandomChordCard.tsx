import { randomConfigState } from "@/atom/random";
import { useSelections } from "ahooks";
import { set } from "lodash";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export const RandomChordCard = ({
  data,
  value,
  configKey,
}: {
  data: string[];
  value: string;
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
      <div className="collapse-title text-xl font-medium">{value}</div>
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
