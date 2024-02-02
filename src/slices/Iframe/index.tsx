import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Iframe`.
 */
export type IframeProps = SliceComponentProps<Content.IframeSlice>;

/**
 * Component for "Iframe" Slices.
 */
const Iframe = ({ slice }: IframeProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div dangerouslySetInnerHTML={{ __html: slice.primary.iframe || "" }} />
    </Bounded>
  );
};

export default Iframe;
