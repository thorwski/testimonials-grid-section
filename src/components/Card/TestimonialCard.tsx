interface TestimonialCardProps {
  theme: "purple" | "grey" | "white" | "dark";
  profileImage: string;
  name: string;
  title: string;
  highlightText: string;
  quoteText: string;
}

const TestimonialCard = ({
  theme,
  profileImage,
  name,
  title,
  highlightText,
  quoteText,
}: TestimonialCardProps) => {
  const themeStyles = {
    purple: {
      backgroundClass: "bg-purple-500",
      nameClass: "text-white",
      titleClass: "text-purple-50",
      highlightTextClass: "text-white",
      quoteTextClass: "text-purple-50",
      border: true,
      borderClass: "border-2 border-purple-300",
      showQuoteImage: true,
    },
    grey: {
      backgroundClass: "bg-grey-500",
      nameClass: "text-white",
      titleClass: "text-grey-100",
      highlightTextClass: "text-white",
      quoteTextClass: "text-grey-100",
      border: false,
      borderClass: "",
      showQuoteImage: false,
    },
    white: {
      backgroundClass: "bg-white",
      nameClass: "text-grey-500",
      titleClass: "text-grey-400",
      highlightTextClass: "text-grey-500",
      quoteTextClass: "text-grey-400",
      border: false,
      borderClass: "",
      showQuoteImage: false,
    },
    dark: {
      backgroundClass: "bg-dark-blue",
      nameClass: "text-white",
      titleClass: "text-white",
      highlightTextClass: "text-grey-200",
      quoteTextClass: "text-grey-100",
      border: true,
      borderClass: "border-2 border-purple-300",
      showQuoteImage: false,
    },
  };

  const quoteImageSrc = "images/bg-pattern-quotation.svg";
  const styles = themeStyles[theme];

  const imageClasses = [
    "max-w-[28px]",
    "rounded-full",
    "z-100",
    styles.border ? styles.borderClass : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`${styles.backgroundClass} p-10 rounded-lg flex flex-col gap-4 relative`}
    >
      {styles.showQuoteImage && (
        <img
          src={quoteImageSrc}
          alt="quote icon"
          className="absolute top-0 right-[60px] hidden sm:block"
        />
      )}
      <div className="flex items-center gap-4">
        <img src={profileImage} alt="profile image" className={imageClasses} />
        <div className="flex flex-col gap-1 z-100">
          <span className={`text-preset-2 ${styles.nameClass}`}>{name}</span>
          <span className={`text-preset-4 ${styles.titleClass}`}>{title}</span>
        </div>
      </div>
      <p className={`text-preset-1 ${styles.highlightTextClass} z-100`}>
        {highlightText}
      </p>
      <p className={`text-preset-3 ${styles.quoteTextClass} z-100`}>
        {quoteText}
      </p>
    </div>
  );
};

export default TestimonialCard;
