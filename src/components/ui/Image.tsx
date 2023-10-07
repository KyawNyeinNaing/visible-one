import { RiPhoneFill } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { MdEmail, MdSearch } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiArrowRightThin, PiCaretDownLight } from "react-icons/pi";
import { AiOutlineDesktop } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { cn } from "../../shared/cn";

interface Icon {
  className: string;
}

interface Image {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

export const Icons = {
  loading: ({ className, ...props }: Icon) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("block animate-spin", className)}
        {...props}
      >
        <path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
        />
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  phone: RiPhoneFill,
  viber: FaViber,
  email: MdEmail,
  search: MdSearch,
  docs: IoDocumentTextOutline,
  downCaret: PiCaretDownLight,
  computer: AiOutlineDesktop,
  mobile: HiOutlineDevicePhoneMobile,
  rightArrow: PiArrowRightThin
};

export const Image: React.FC<Image> = ({
  src,
  width,
  className,
  height,
  alt,
  ...props
}: Image) => {
  return (
    <img
      className={className}
      src={src}
      width={width || 0}
      height={height || 0}
      alt={alt}
      {...props}
    />
  );
};
