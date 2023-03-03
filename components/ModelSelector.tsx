"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getModels").then((res) => res.json());

function ModelSelector() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#fcfcfc] border-[#2c2c2c]",
        }}
        options={models?.modelOptions}
        defaultValue={model}
        onChange={(e) => setModel(e.value)}
        placeholder={model}
      />
    </div>
  );
}

export default ModelSelector;
