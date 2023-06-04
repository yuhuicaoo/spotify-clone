"use client";

import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedVlaue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedVlaue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedVlaue, router]);

  return (
    <Input
        placeholder="What do you want to listen to?"
        value={value}
        onChange={(element) => setValue(element.target.value)}
    />
  );
};

export default SearchInput;
