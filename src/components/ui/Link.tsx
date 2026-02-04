import { useMemo } from "react";
import type { LinkProps } from "../../types";

export const Link = ({ url, isEmail, isInternal }: LinkProps) => {
  const adjustedUrl = useMemo(() => {
    if (isEmail) {
      return `mailto:${url}`;
    } else if (!isInternal && !url.startsWith("http")) {
      return `https://${url}`;
    }
    return url;
  }, [url, isEmail, isInternal]);

  return (
    <a href={adjustedUrl} className="no-underline text-black">
      {url}
    </a>
  );
};
