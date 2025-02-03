"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

import { ArrowLeft, ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/form/button";

const arrowButtonVariants = cva(
  "z-10 absolute top-1/2 -translate-y-1/2 transition-colors",
  {
    variants: {
      design: {
        default: "",
        roundWhite: "bg-white text-black hover:bg-gray-100 shadow-md rounded-full",
      },
    },
    defaultVariants: {
      design: "default",
    },
  }
);

// 左右箭頭部分
interface CarouselArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arrowButtonVariants> {
  position?: "left" | "right";
  emblaApi?: EmblaApi;
}

function CarouselArrowButton({
  position = "left",
  design,
  emblaApi,
  className,
  ...props
}: CarouselArrowButtonProps) {
  const isLeft = position === "left";
  const Icon = isLeft ? ArrowLeft : ArrowRight;

  const handleClick = () => {
    if (!emblaApi) return;
    isLeft ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={handleClick}
      className={cn(
        arrowButtonVariants({ design }),
        isLeft ? "left-5" : "right-5",
        className
      )}
      {...props}
    >
      <Icon className="h-3 w-3" />
    </Button>
  );
}

interface CarouselDotsProps {
  emblaApi: EmblaApi | null;
  className?: string;
}

// 圓點指示器部分
function CarouselDots({ emblaApi, className }: CarouselDotsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slidesCount, setSlidesCount] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    setSlidesCount(emblaApi.slideNodes().length);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (!emblaApi || slidesCount === 0) return null;

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: slidesCount }, (_, i) => (
        <button
          key={i}
          onClick={() => emblaApi.scrollTo(i)}
          className={cn(
            "h-2 w-2 rounded-full bg-gray-100 transition-all",
            i === selectedIndex && "bg-black h-2 w-2 transition-all"
          )}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// 輪播功能主體
interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  autoPlay?: boolean;
  intervalMs?: number;
  showDots?: boolean;
  arrowDesign?: NonNullable<VariantProps<typeof arrowButtonVariants>["design"]>;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      children,
      autoPlay = false,
      intervalMs = 8000,
      showDots = false,
      arrowDesign = "default",
      ...props
    },
    ref
  ) => {
    const [carouselRef, emblaApi] = useEmblaCarousel({ loop: true });

    React.useEffect(() => {
      if (!autoPlay || !emblaApi) return;
      let timer: NodeJS.Timeout | null = null;

      const startAutoPlay = () => {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
          emblaApi.scrollNext();
        }, intervalMs);
      };

      const stopAutoPlay = () => {
        if (timer) clearInterval(timer);
      };

      // 當前頁面可見時 -> 啟動輪播
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          startAutoPlay();
        } else {
          stopAutoPlay();
        }
      };

      // 監聽瀏覽器頁面可見性變化
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // 初始化時啟動
      startAutoPlay();

      return () => {
        stopAutoPlay();
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }, [autoPlay, intervalMs, emblaApi]);

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center", className)}
        {...props}
      >
        <div ref={carouselRef} className="overflow-hidden w-full">
          <div className="flex">{children}</div>
        </div>

        <CarouselArrowButton position="left" design={arrowDesign} emblaApi={emblaApi} />
        <CarouselArrowButton position="right" design={arrowDesign} emblaApi={emblaApi} />

        {showDots && (
          <CarouselDots
            emblaApi={emblaApi}
            className="absolute bottom-2 left-1/2 -translate-x-1/2"
          />
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative min-w-full flex-shrink-0 flex-grow-0 px-2",
        className
      )}
      {...props}
    />
  )
);
CarouselItem.displayName = "CarouselItem";

export {
  Carousel,
  CarouselItem,
  CarouselArrowButton,
  CarouselDots,
};
